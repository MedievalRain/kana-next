import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";

export const stageAtom = withImmer(atomWithStorage("learning-stage", 0));
