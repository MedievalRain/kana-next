import { atomWithStorage } from "jotai/utils";
import { withImmer } from "jotai-immer";

import { allCharacters, KanaType } from "./characters";

type CharacterState = {
	isSelected: boolean;
	kana: string;
	weight: number;
};
const defaultLearningState: CharacterState[] = allCharacters.map(({ kana }) => ({ isSelected: false, kana, weight: 1 }));

const storageLearningStateAtom = atomWithStorage("learningState", defaultLearningState);
export const learningStateAtom = withImmer(storageLearningStateAtom);

const defaultSelectedColumns: Record<KanaType, boolean[]> = {
	hiragana: Array(16).fill(false),
	"hiragana-combos": Array(16).fill(false),
	katakana: Array(16).fill(false),
	"katakana-combos": Array(16).fill(false),
};
const storageSelectedColumnsAtom = atomWithStorage("selectedColumns", defaultSelectedColumns);
export const selectedColumnsAtom = withImmer(storageSelectedColumnsAtom);
