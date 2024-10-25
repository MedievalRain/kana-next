"use client";

import { type Character } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { prop, sortBy } from "remeda";

import { GuessInput } from "./guess-input";

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
  const index = cdfValues.findIndex((value) => value >= randomNumber) || 0;

  return sortedCharacters[index];
};

export const GuessContainer = () => {
  const [characters, setCharacters] = useAtom(kanasAtom);
  const selectedCharacters = characters.filter(
    ({ isSelected }) => isSelected === true
  );

  const characterToGuess = getWeightedCharacter(selectedCharacters);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!inputValue || !characterToGuess) {
      console.log("early return");
      return;
    }

    if (inputValue === characterToGuess.romaji) {
      console.log({ characterToGuess, inputValue });

      setCharacters((draft) => {
        const character = draft.find(
          ({ kana }) => kana === characterToGuess.kana
        )!;
        character.weight = character.weight * 1.1;
      });

      setInputValue("");
    }
  }, [inputValue, characterToGuess, setCharacters]);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-5xl font-bold">
        {" "}
        {characterToGuess?.kana || <span className="invisible">あ</span>}
      </span>
      <GuessInput setValue={setInputValue} value={inputValue} />
    </div>
  );
};
