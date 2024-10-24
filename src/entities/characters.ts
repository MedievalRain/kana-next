export type Character = {
  kana: string;
  romaji: string;
};

export const hiraganaColumns: (Character | null)[][] = [
  // First column (Vowels)
  [
    { kana: "あ", romaji: "a" },
    { kana: "い", romaji: "i" },
    { kana: "う", romaji: "u" },
    { kana: "え", romaji: "e" },
    { kana: "お", romaji: "o" },
  ],
  // Second column (K)
  [
    { kana: "か", romaji: "ka" },
    { kana: "き", romaji: "ki" },
    { kana: "く", romaji: "ku" },
    { kana: "け", romaji: "ke" },
    { kana: "こ", romaji: "ko" },
  ],
  // Third column (S)
  [
    { kana: "さ", romaji: "sa" },
    { kana: "し", romaji: "shi" },
    { kana: "す", romaji: "su" },
    { kana: "せ", romaji: "se" },
    { kana: "そ", romaji: "so" },
  ],
  // Fourth column (T)
  [
    { kana: "た", romaji: "ta" },
    { kana: "ち", romaji: "chi" },
    { kana: "つ", romaji: "tsu" },
    { kana: "て", romaji: "te" },
    { kana: "と", romaji: "to" },
  ],
  // Fifth column (N)
  [
    { kana: "な", romaji: "na" },
    { kana: "に", romaji: "ni" },
    { kana: "ぬ", romaji: "nu" },
    { kana: "ね", romaji: "ne" },
    { kana: "の", romaji: "no" },
  ],
  // Sixth column (H)
  [
    { kana: "は", romaji: "ha" },
    { kana: "ひ", romaji: "hi" },
    { kana: "ふ", romaji: "fu" },
    { kana: "へ", romaji: "he" },
    { kana: "ほ", romaji: "ho" },
  ],
  // Seventh column (M)
  [
    { kana: "ま", romaji: "ma" },
    { kana: "み", romaji: "mi" },
    { kana: "む", romaji: "mu" },
    { kana: "め", romaji: "me" },
    { kana: "も", romaji: "mo" },
  ],
  // Eighth column (Y)
  [
    { kana: "や", romaji: "ya" },
    null,
    { kana: "ゆ", romaji: "yu" },
    null,
    { kana: "よ", romaji: "yo" },
  ],
  // Ninth column (R)
  [
    { kana: "ら", romaji: "ra" },
    { kana: "り", romaji: "ri" },
    { kana: "る", romaji: "ru" },
    { kana: "れ", romaji: "re" },
    { kana: "ろ", romaji: "ro" },
  ],
  // Tenth column (W)
  [
    { kana: "わ", romaji: "wa" },
    null,
    null,
    null,
    { kana: "を", romaji: "wo" },
  ],
  // Eleventh column (N)
  [null, null, null, null, { kana: "ん", romaji: "n" }],
];
