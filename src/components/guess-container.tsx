"use client";

import { type Character } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { useAtom } from "jotai";
import { prop, sortBy } from "remeda";

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

  return <span className="text-4xl font-bold">{characterToGuess?.kana}</span>;
};
