import { atomWithImmer } from "jotai-immer";

import { kanas } from "./characters";

// Creating separate atoms for each KanaType to optimize re-renders
export const selectedHiraganaColumnsAtom = atomWithImmer<boolean[]>(
  new Array(kanas.hiragana.length).fill(false)
);

export const selectedHiraganaCombosColumnsAtom = atomWithImmer<boolean[]>(
  new Array(kanas["hiragana-combos"].length).fill(false)
);

export const selectedKatakanaColumnsAtom = atomWithImmer<boolean[]>(
  new Array(kanas.katakana.length).fill(false)
);

export const selectedKatakanaCombosColumnsAtom = atomWithImmer<boolean[]>(
  new Array(kanas["katakana-combos"].length).fill(false)
);

export const selectedColumnsAtoms = {
  hiragana: selectedHiraganaColumnsAtom,
  "hiragana-combos": selectedHiraganaCombosColumnsAtom,
  katakana: selectedKatakanaColumnsAtom,
  "katakana-combos": selectedKatakanaCombosColumnsAtom,
} as const;
