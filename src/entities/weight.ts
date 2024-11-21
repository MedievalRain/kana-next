import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";

export type WeightedItem = {
	id: string;
	weight: number;
};

export const weightsAtom = withImmer(atomWithStorage<WeightedItem[]>("weights", []));
