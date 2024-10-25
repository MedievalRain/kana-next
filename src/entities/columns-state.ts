import { atomWithImmer } from "jotai-immer";

import { kanas, type KanaType } from "./characters";

const initialSelectedColumns = Object.fromEntries(
  (Object.keys(kanas) as KanaType[]).map((key) => [
    key,
    new Array(kanas[key].length).fill(false),
  ])
) as Record<KanaType, boolean[]>;

export const selectedColumnsAtom = atomWithImmer<Record<KanaType, boolean[]>>(
  initialSelectedColumns
);
