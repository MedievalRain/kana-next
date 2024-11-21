import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";
import { isEmpty, shuffle } from "remeda";

import type { Character, hiragana, katakana } from "./characters";

export type Stage<T extends Character[]> = Readonly<{
	id: string;
	kanas: T[number]["kana"][];
}>;

export const hiraganaStages = [
	{ id: "hiragana-vowels", kanas: ["あ", "い", "う", "え", "お"] },
	{ id: "hiragana-k-group", kanas: ["か", "き", "く", "け", "こ"] },
	{ id: "hiragana-s-group", kanas: ["さ", "し", "す", "せ", "そ"] },
	{ id: "hiragana-t-group", kanas: ["た", "ち", "つ", "て", "と"] },
	{ id: "hiragana-n-group", kanas: ["な", "に", "ぬ", "ね", "の"] },
	{ id: "hiragana-h-group", kanas: ["は", "ひ", "ふ", "へ", "ほ"] },
	{ id: "hiragana-m-group", kanas: ["ま", "み", "む", "め", "も"] },
	{ id: "hiragana-y-group", kanas: ["や", "ゆ", "よ"] },
	{ id: "hiragana-r-group", kanas: ["ら", "り", "る", "れ", "ろ"] },
	{ id: "hiragana-w-group", kanas: ["わ", "を"] },
	{ id: "hiragana-n", kanas: ["ん"] },
	{ id: "hiragana-g-group", kanas: ["が", "ぎ", "ぐ", "げ", "ご"] },
	{ id: "hiragana-z-group", kanas: ["ざ", "じ", "ず", "ぜ", "ぞ"] },
	{ id: "hiragana-d-group", kanas: ["だ", "ぢ", "づ", "で", "ど"] },
	{ id: "hiragana-b-group", kanas: ["ば", "び", "ぶ", "べ", "ぼ"] },
	{ id: "hiragana-p-group", kanas: ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"] },
	{
		id: "hiragana-combos",
		kanas: [
			"きゃ",
			"きゅ",
			"きょ",
			"しゃ",
			"しゅ",
			"しょ",
			"ちゃ",
			"ちゅ",
			"ちょ",
			"にゃ",
			"にゅ",
			"にょ",
			"ひゃ",
			"ひゅ",
			"ひょ",
			"みゃ",
			"みゅ",
			"みょ",
			"りゃ",
			"りゅ",
			"りょ",
			"ぎゃ",
			"ぎゅ",
			"ぎょ",
			"じゃ",
			"じゅ",
			"じょ",
			"びゃ",
			"びゅ",
			"びょ",
			"ぴゃ",
			"ぴゅ",
			"ぴょ",
		],
	},
] as const satisfies Stage<typeof hiragana>[];

export const katakanaStages = [
	{ id: "katakana-vowels", kanas: ["ア", "イ", "ウ", "エ", "オ"] },
	{ id: "katakana-k-group", kanas: ["カ", "キ", "ク", "ケ", "コ"] },
	{ id: "katakana-s-group", kanas: ["サ", "シ", "ス", "セ", "ソ"] },
	{ id: "katakana-t-group", kanas: ["タ", "チ", "ツ", "テ", "ト"] },
	{ id: "katakana-n-group", kanas: ["ナ", "ニ", "ヌ", "ネ", "ノ"] },
	{ id: "katakana-h-group", kanas: ["ハ", "ヒ", "フ", "ヘ", "ホ"] },
	{ id: "katakana-m-group", kanas: ["マ", "ミ", "ム", "メ", "モ"] },
	{ id: "katakana-y-group", kanas: ["ヤ", "ユ", "ヨ"] },
	{ id: "katakana-r-group", kanas: ["ラ", "リ", "ル", "レ", "ロ"] },
	{ id: "katakana-w-group", kanas: ["ワ", "ヲ"] },
	{ id: "katakana-n", kanas: ["ン"] },
	{ id: "katakana-g-group", kanas: ["ガ", "ギ", "グ", "ゲ", "ゴ"] },
	{ id: "katakana-z-group", kanas: ["ザ", "ジ", "ズ", "ゼ", "ゾ"] },
	{ id: "katakana-d-group", kanas: ["ダ", "ヂ", "ヅ", "デ", "ド"] },
	{ id: "katakana-b-group", kanas: ["バ", "ビ", "ブ", "ベ", "ボ"] },
	{ id: "katakana-p-group", kanas: ["パ", "ピ", "プ", "ペ", "ポ"] },
	{
		id: "katakana-combos",
		kanas: [
			"キャ",
			"キュ",
			"キョ",
			"シャ",
			"シュ",
			"ショ",
			"チャ",
			"チュ",
			"チョ",
			"ニャ",
			"ニュ",
			"ニョ",
			"ヒャ",
			"ヒュ",
			"ヒョ",
			"ミャ",
			"ミュ",
			"ミョ",
			"リャ",
			"リュ",
			"リョ",
			"ギャ",
			"ギュ",
			"ギョ",
			"ジャ",
			"ジュ",
			"ジョ",
			"ビャ",
			"ビュ",
			"ビョ",
			"ピャ",
			"ピュ",
			"ピョ",
		],
	},
] as const satisfies Stage<typeof katakana>[];

export const stages = [...hiraganaStages, ...katakanaStages] as const;

type StageId = (typeof stages)[number]["id"];

export const getStageInitialProgress = (stageId: StageId, repeats = 5): string[] => {
	const stage = stages.find(({ id }) => id === stageId)!;
	return shuffle(stage.kanas.flatMap((kana) => Array(repeats).fill(kana)));
};

export const getUpdatedProgressWithWrongAnswer = (progress: string[]) => {
	if (isEmpty(progress)) return progress;
	const [first, ...rest] = progress;
	return [...rest, first];
};

export const getUpdatedProgressWithCorrectAnswer = (progress: string[]) => progress.slice(1);

export const stageAtom = atomWithStorage<StageId>("learning-stage", "hiragana-vowels");

export const progressAtom = withImmer(atomWithStorage("stage-progress", getStageInitialProgress("hiragana-vowels")));
