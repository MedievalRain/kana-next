"use client";

import { allCharactersKV, Character, hiraganaComboTable, hiraganaTable, KanaType, katakanaComboTable, katakanaTable } from "@/entities/characters";
import { CharacterState, learningStateAtom, selectedColumnsAtom } from "@/entities/characters-state";
import { useAnimation } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useMemo, useRef, useState } from "react";
import { prop, sortBy } from "remeda";

import { CharactersGuess } from "./character-guess";
import { RomajiInput } from "./romaji-input";

const increaseWeight = (currentWeight: number) => {
	return Math.min(Math.max(currentWeight * 1.5, 2), Number.MAX_SAFE_INTEGER);
};

const calculateCDF = (characters: CharacterState[]) => {
	const totalWeightInverse = characters.reduce<number>((acc, { weight }) => {
		return acc + 1 / weight;
	}, 0);

	let cumulativeSum = 0;
	return characters.map(({ weight }) => {
		cumulativeSum += 1 / weight;
		return cumulativeSum / totalWeightInverse;
	});
};

const getWeightedCharacter = (characters: CharacterState[]): (Character & CharacterState) | null => {
	const sortedCharacters = sortBy(characters, prop("weight"));

	const cdfValues = calculateCDF(sortedCharacters);
	const randomNumber = Math.random();
	const index = cdfValues.findIndex((value) => value >= randomNumber);
	if (index === -1) {
		return null;
	}
	const character = sortedCharacters[index];

	return { ...character, ...allCharactersKV[character.kana] };
};

const getSelectedTableKanas = (selectedTable: boolean[], tableLayout: (null | string)[][]) => {
	return selectedTable.reduce<string[]>((acc, isSelected, columnIndex) => {
		if (!isSelected) {
			return acc;
		}
		acc.push(
			...tableLayout.reduce<string[]>((acc, row) => {
				if (row[columnIndex] !== null) {
					acc.push(row[columnIndex]);
				}
				return acc;
			}, [])
		);

		return acc;
	}, []);
};

const getSelectedKanas = (selectedColumns: Record<KanaType, boolean[]>) => [
	...getSelectedTableKanas(selectedColumns.hiragana, hiraganaTable),
	...getSelectedTableKanas(selectedColumns["hiragana-combos"], hiraganaComboTable),
	...getSelectedTableKanas(selectedColumns.katakana, katakanaTable),
	...getSelectedTableKanas(selectedColumns["katakana-combos"], katakanaComboTable),
];

const getCharacterToGuess = (selectedKanas: string[], learningState: CharacterState[], lastGuessedCharacter: null | string) => {
	const selectedLearningState = learningState.filter(({ kana }) => selectedKanas.includes(kana) && kana !== lastGuessedCharacter);
	return getWeightedCharacter(selectedLearningState);
};

export const GuessContainer = () => {
	const [isError, setIsError] = useState(0); // Using timestamps for errors to detect multiple errors in a row
	const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
	const [inputValue, setInputValue] = useState("");
	const [learningState, setLearningState] = useAtom(learningStateAtom);
	const [selectedColumns] = useAtom(selectedColumnsAtom);
	const selectedKanas = useMemo(() => getSelectedKanas(selectedColumns), [selectedColumns]);
	const lastGuessedCharacterRef = useRef<null | string>(null);
	const [characterToGuess, setCharacterToGuess] = useState(() =>
		getCharacterToGuess(selectedKanas, learningState, lastGuessedCharacterRef.current)
	);

	const animationControls = useAnimation();

	const onInputChange = async (newInputValue: string) => {
		if (!characterToGuess || Date.now() - isError < 500) {
			return;
		}

		if (newInputValue === characterToGuess.romaji) {
			setLearningState((draft) => {
				const character = draft.find(({ kana }) => kana === characterToGuess.kana)!;
				character.weight = increaseWeight(character.weight);
			});

			setInputValue("");
			setIsError(0);
			setStats((v) => ({ ...v, correct: v.correct + 1 }));
			lastGuessedCharacterRef.current = characterToGuess.kana;
		} else if (characterToGuess.romaji.startsWith(newInputValue)) {
			setInputValue(newInputValue);
		} else {
			setLearningState((draft) => {
				const character = draft.find(({ kana }) => kana === characterToGuess.kana)!;
				character.weight = 1;
			});

			setInputValue("");
			setStats((v) => ({ ...v, incorrect: v.incorrect + 1 }));
			setIsError(Date.now());
		}
	};

	useEffect(() => {
		if (!isError) {
			setCharacterToGuess(getCharacterToGuess(selectedKanas, learningState, lastGuessedCharacterRef.current));
		}
	}, [animationControls, isError, learningState, selectedKanas]);

	return (
		<div className="flex flex-col items-center gap-2">
			<CharactersGuess isError={isError} kana={characterToGuess?.kana} />
			<span>
				{stats.correct}/{stats.correct + stats.incorrect}
			</span>
			<RomajiInput disabled={!characterToGuess} setValue={onInputChange} value={inputValue} />
		</div>
	);
};
