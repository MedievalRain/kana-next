import { atomWithImmer } from "jotai-immer";

import { type Character, kanaColumns, type KanaType } from "./characters";

const initialSelectedColumns = Object.fromEntries(
  (Object.keys(kanaColumns) as KanaType[]).map((key) => [
    key,
    new Array(kanaColumns[key].length).fill(false),
  ])
) as Record<KanaType, boolean[]>;

export const selectedColumnsAtom = atomWithImmer<Record<KanaType, boolean[]>>(
  initialSelectedColumns
);
