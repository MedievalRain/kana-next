"use client";

import { type Character } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { prop, sortBy } from "remeda";

import { GuessInput } from "./guess-input";

const increaseWeight = (currentWeight: number) => {
  return Math.min(Math.max(currentWeight * 1.5, 2), Number.MAX_SAFE_INTEGER);
};

const calculateCDF = (characters: Character[]) => {
  const sumWeights = characters.reduce<number>((acc, { weight }) => {
    acc += 1 / weight;
    return acc;
  }, 0);
  let cumulativeSum = 0;
  return characters.map(({ weight }) => {
    cumulativeSum += weight;
    return cumulativeSum / sumWeights;
  });
};

const getWeightedCharacter = (characters: Character[]) => {
  const sortedCharacters = sortBy(characters, prop("weight"));

  const cdfValues = calculateCDF(sortedCharacters);
  const randomNumber = Math.random();
  const index = cdfValues.findIndex((value) => value >= randomNumber); // TODO find out why random number might be bigger than any CDF value
  return sortedCharacters[index] || sortedCharacters[0];
};

export const GuessContainer = () => {
  const [characters, setCharacters] = useAtom(kanasAtom);
  const selectedCharacters = characters.filter(
    ({ isSelected }) => isSelected === true
  );
  const [isError, setIsError] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [inputValue, setInputValue] = useState("");

  const [characterToGuess, setCharacterToGuess] = useState<
    Character | undefined
  >(() => getWeightedCharacter(selectedCharacters));

  useEffect(() => {
    if (isError) {
      return;
    }
    setCharacterToGuess(getWeightedCharacter(selectedCharacters));
  }, [isError, selectedCharacters]);

  useEffect(() => {
    if (!inputValue || !characterToGuess) {
      return;
    }

    if (inputValue === characterToGuess.romaji) {
      console.log({ characterToGuess, inputValue });

      setCharacters((draft) => {
        const character = draft.find(
          ({ kana }) => kana === characterToGuess.kana
        )!;
        character.weight = increaseWeight(character.weight);
      });
      setIsError(false);
      setStats((v) => ({ ...v, correct: v.correct + 1 }));
      setInputValue("");
    } else if (characterToGuess.romaji.startsWith(inputValue)) {
      return;
    } else {
      setCharacters((draft) => {
        const character = draft.find(
          ({ kana }) => kana === characterToGuess.kana
        )!;
        character.weight = character.weight / 2;
      });
      setInputValue("");
      setStats((v) => ({ ...v, incorrect: v.incorrect + 1 }));
      setIsError(true);
    }
  }, [inputValue, characterToGuess, setCharacters]);
  console.log({ characterToGuess });
  return (
    <div className="flex flex-col items-center gap-2">
      <span className={cn("text-5xl font-bold", { "text-red-500": isError })}>
        {characterToGuess?.kana || <span className="invisible">あ</span>}
      </span>
      <span>
        {stats.correct}/{stats.correct + stats.incorrect}
      </span>
      <GuessInput setValue={setInputValue} value={inputValue} />
    </div>
  );
};
