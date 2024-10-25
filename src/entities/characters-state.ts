import { atomWithStorage } from "jotai/utils";
import { withImmer } from "jotai-immer";

import { kanas } from "./characters";

const storageKanasAtom = atomWithStorage("kanas", kanas);
export const kanasAtom = withImmer(storageKanasAtom);
