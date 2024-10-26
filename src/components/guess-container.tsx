"use client";

import { allCharactersKV, hiraganaComboTable, hiraganaTable, KanaType, katakanaComboTable, katakanaTable } from "@/entities/characters";
import { CharacterState, learningStateAtom, selectedColumnsAtom } from "@/entities/characters-state";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { prop, sortBy } from "remeda";

import { GuessInput } from "./guess-input";

// const increaseWeight = (currentWeight: number) => {
// 	return Math.min(Math.max(currentWeight * 1.5, 2), Number.MAX_SAFE_INTEGER);
// };

// const calculateCDF = (characters: Character[]) => {
// 	const sumWeights = characters.reduce<number>((acc, { weight }) => {
// 		acc += 1 / weight;
// 		return acc;
// 	}, 0);
// 	let cumulativeSum = 0;
// 	return characters.map(({ weight }) => {
// 		cumulativeSum += weight;
// 		return cumulativeSum / sumWeights;
// 	});
// };

// const getWeightedCharacter = (characters: Character[]) => {
// 	const sortedCharacters = sortBy(characters, prop("weight"));

// 	const cdfValues = calculateCDF(sortedCharacters);
// 	const randomNumber = Math.random();
// 	const index = cdfValues.findIndex((value) => value >= randomNumber); // TODO find out why random number might be bigger than any CDF value
// 	return sortedCharacters[index] || sortedCharacters[0];
// };

const getSelectedTableCharacters = (selectedTable: boolean[], tableLayout: (null | string)[][]) => {
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

const getSelectedCharacters = (selectedColumns: Record<KanaType, boolean[]>) => [
	...getSelectedTableCharacters(selectedColumns.hiragana, hiraganaTable),
	...getSelectedTableCharacters(selectedColumns["hiragana-combos"], hiraganaComboTable),
	...getSelectedTableCharacters(selectedColumns.katakana, katakanaTable),
	...getSelectedTableCharacters(selectedColumns["katakana-combos"], katakanaComboTable),
];

export const GuessContainer = () => {
	const [isError, setIsError] = useState(false);
	const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
	const [inputValue, setInputValue] = useState("");
	const [learningState, setLearningState] = useAtom(learningStateAtom);
	const [selectedColumns] = useAtom(selectedColumnsAtom);
	const selectedCharacters = getSelectedCharacters(selectedColumns);
	console.log({ selectedCharacters });
	return (
		<div className="flex flex-col items-center gap-2">
			{"" ? (
				<span className={cn("text-5xl font-bold", { "text-red-500": isError })}>{characterToGuess.kana}</span>
			) : (
				<span className="text-lg leading-[3rem]">Choose columns to grind</span>
			)}
			<span>
				{stats.correct}/{stats.correct + stats.incorrect}
			</span>
			<GuessInput setValue={setInputValue} value={inputValue} />
		</div>
	);
};
