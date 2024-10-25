export type Character = {
  kana: string;
  romaji: string;
};

export type KanaType =
  | "hiragana"
  | "hiragana-combos"
  | "katakana"
  | "katakana-combos";

export const kanaColumns: Record<KanaType, (Character | null)[][]> = {
  hiragana: [
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
    // G Column (Dakuten)
    [
      { kana: "が", romaji: "ga" },
      { kana: "ぎ", romaji: "gi" },
      { kana: "ぐ", romaji: "gu" },
      { kana: "げ", romaji: "ge" },
      { kana: "ご", romaji: "go" },
    ],
    // Z Column (Dakuten)
    [
      { kana: "ざ", romaji: "za" },
      { kana: "じ", romaji: "ji" },
      { kana: "ず", romaji: "zu" },
      { kana: "ぜ", romaji: "ze" },
      { kana: "ぞ", romaji: "zo" },
    ],
    // D Column (Dakuten)
    [
      { kana: "だ", romaji: "da" },
      { kana: "ぢ", romaji: "ji" },
      { kana: "づ", romaji: "zu" },
      { kana: "で", romaji: "de" },
      { kana: "ど", romaji: "do" },
    ],
    // B Column (Dakuten)
    [
      { kana: "ば", romaji: "ba" },
      { kana: "び", romaji: "bi" },
      { kana: "ぶ", romaji: "bu" },
      { kana: "べ", romaji: "be" },
      { kana: "ぼ", romaji: "bo" },
    ],
    // P Column (Handakuten)
    [
      { kana: "ぱ", romaji: "pa" },
      { kana: "ぴ", romaji: "pi" },
      { kana: "ぷ", romaji: "pu" },
      { kana: "ぺ", romaji: "pe" },
      { kana: "ぽ", romaji: "po" },
    ],
  ],
  "hiragana-combos": [
    // Hiragana combinations
    [
      { kana: "きゃ", romaji: "kya" },
      { kana: "きゅ", romaji: "kyu" },
      { kana: "きょ", romaji: "kyo" },
    ],
    [
      { kana: "しゃ", romaji: "sha" },
      { kana: "しゅ", romaji: "shu" },
      { kana: "しょ", romaji: "sho" },
    ],
    [
      { kana: "ちゃ", romaji: "cha" },
      { kana: "ちゅ", romaji: "chu" },
      { kana: "ちょ", romaji: "cho" },
    ],
    [
      { kana: "にゃ", romaji: "nya" },
      { kana: "にゅ", romaji: "nyu" },
      { kana: "にょ", romaji: "nyo" },
    ],
    [
      { kana: "ひゃ", romaji: "hya" },
      { kana: "ひゅ", romaji: "hyu" },
      { kana: "ひょ", romaji: "hyo" },
    ],
    [
      { kana: "みゃ", romaji: "mya" },
      { kana: "みゅ", romaji: "myu" },
      { kana: "みょ", romaji: "myo" },
    ],
    [
      { kana: "りゃ", romaji: "rya" },
      { kana: "りゅ", romaji: "ryu" },
      { kana: "りょ", romaji: "ryo" },
    ],
    // G Column (Dakuten)
    [
      { kana: "ぎゃ", romaji: "gya" },
      { kana: "ぎゅ", romaji: "gyu" },
      { kana: "ぎょ", romaji: "gyo" },
    ],
    // Z Column (Dakuten)
    [
      { kana: "じゃ", romaji: "ja" },
      { kana: "じゅ", romaji: "ju" },
      { kana: "じょ", romaji: "jo" },
    ],
    // D Column (Dakuten)
    [
      { kana: "ぢゃ", romaji: "ja" },
      { kana: "ぢゅ", romaji: "ju" },
      { kana: "ぢょ", romaji: "jo" },
    ],
    // B Column (Dakuten)
    [
      { kana: "びゃ", romaji: "bya" },
      { kana: "びゅ", romaji: "byu" },
      { kana: "びょ", romaji: "byo" },
    ],
    // P Column (Handakuten)
    [
      { kana: "ぴゃ", romaji: "pya" },
      { kana: "ぴゅ", romaji: "pyu" },
      { kana: "ぴょ", romaji: "pyo" },
    ],
  ],
  katakana: [
    // First column (Vowels)
    [
      { kana: "ア", romaji: "a" },
      { kana: "イ", romaji: "i" },
      { kana: "ウ", romaji: "u" },
      { kana: "エ", romaji: "e" },
      { kana: "オ", romaji: "o" },
    ],
    // Second column (K)
    [
      { kana: "カ", romaji: "ka" },
      { kana: "キ", romaji: "ki" },
      { kana: "ク", romaji: "ku" },
      { kana: "ケ", romaji: "ke" },
      { kana: "コ", romaji: "ko" },
    ],
    // Third column (S)
    [
      { kana: "サ", romaji: "sa" },
      { kana: "シ", romaji: "shi" },
      { kana: "ス", romaji: "su" },
      { kana: "セ", romaji: "se" },
      { kana: "ソ", romaji: "so" },
    ],
    // Fourth column (T)
    [
      { kana: "タ", romaji: "ta" },
      { kana: "チ", romaji: "chi" },
      { kana: "ツ", romaji: "tsu" },
      { kana: "テ", romaji: "te" },
      { kana: "ト", romaji: "to" },
    ],
    // Fifth column (N)
    [
      { kana: "ナ", romaji: "na" },
      { kana: "ニ", romaji: "ni" },
      { kana: "ヌ", romaji: "nu" },
      { kana: "ネ", romaji: "ne" },
      { kana: "ノ", romaji: "no" },
    ],
    // Sixth column (H)
    [
      { kana: "ハ", romaji: "ha" },
      { kana: "ヒ", romaji: "hi" },
      { kana: "フ", romaji: "fu" },
      { kana: "ヘ", romaji: "he" },
      { kana: "ホ", romaji: "ho" },
    ],
    // Seventh column (M)
    [
      { kana: "マ", romaji: "ma" },
      { kana: "ミ", romaji: "mi" },
      { kana: "ム", romaji: "mu" },
      { kana: "メ", romaji: "me" },
      { kana: "モ", romaji: "mo" },
    ],
    // Eighth column (Y)
    [
      { kana: "ヤ", romaji: "ya" },
      null,
      { kana: "ユ", romaji: "yu" },
      null,
      { kana: "ヨ", romaji: "yo" },
    ],
    // Ninth column (R)
    [
      { kana: "ラ", romaji: "ra" },
      { kana: "リ", romaji: "ri" },
      { kana: "ル", romaji: "ru" },
      { kana: "レ", romaji: "re" },
      { kana: "ロ", romaji: "ro" },
    ],
    // Tenth column (W)
    [
      { kana: "ワ", romaji: "wa" },
      null,
      null,
      null,
      { kana: "ヲ", romaji: "wo" },
    ],
    // Eleventh column (N)
    [null, null, null, null, { kana: "ン", romaji: "n" }],
    // G Column (Dakuten)
    [
      { kana: "ガ", romaji: "ga" },
      { kana: "ギ", romaji: "gi" },
      { kana: "グ", romaji: "gu" },
      { kana: "ゲ", romaji: "ge" },
      { kana: "ゴ", romaji: "go" },
    ],
    // Z Column (Dakuten)
    [
      { kana: "ザ", romaji: "za" },
      { kana: "ジ", romaji: "ji" },
      { kana: "ズ", romaji: "zu" },
      { kana: "ゼ", romaji: "ze" },
      { kana: "ゾ", romaji: "zo" },
    ],
    // D Column (Dakuten)
    [
      { kana: "ダ", romaji: "da" },
      { kana: "ヂ", romaji: "ji" },
      { kana: "ヅ", romaji: "zu" },
      { kana: "デ", romaji: "de" },
      { kana: "ド", romaji: "do" },
    ],
    // B Column (Dakuten)
    [
      { kana: "バ", romaji: "ba" },
      { kana: "ビ", romaji: "bi" },
      { kana: "ブ", romaji: "bu" },
      { kana: "ベ", romaji: "be" },
      { kana: "ボ", romaji: "bo" },
    ],
    // P Column (Handakuten)
    [
      { kana: "パ", romaji: "pa" },
      { kana: "ピ", romaji: "pi" },
      { kana: "プ", romaji: "pu" },
      { kana: "ペ", romaji: "pe" },
      { kana: "ポ", romaji: "po" },
    ],
  ],
  "katakana-combos": [
    // Katakana combinations
    [
      { kana: "キャ", romaji: "kya" },
      { kana: "キュ", romaji: "kyu" },
      { kana: "キョ", romaji: "kyo" },
    ],
    [
      { kana: "シャ", romaji: "sha" },
      { kana: "シュ", romaji: "shu" },
      { kana: "ショ", romaji: "sho" },
    ],
    [
      { kana: "チャ", romaji: "cha" },
      { kana: "チュ", romaji: "chu" },
      { kana: "チョ", romaji: "cho" },
    ],
    [
      { kana: "ニャ", romaji: "nya" },
      { kana: "ニュ", romaji: "nyu" },
      { kana: "ニョ", romaji: "nyo" },
    ],
    [
      { kana: "ヒャ", romaji: "hya" },
      { kana: "ヒュ", romaji: "hyu" },
      { kana: "ヒョ", romaji: "hyo" },
    ],
    [
      { kana: "ミャ", romaji: "mya" },
      { kana: "ミュ", romaji: "myu" },
      { kana: "ミョ", romaji: "myo" },
    ],
    [
      { kana: "リャ", romaji: "rya" },
      { kana: "リュ", romaji: "ryu" },
      { kana: "リョ", romaji: "ryo" },
    ],
    // G Column (Dakuten)
    [
      { kana: "ギャ", romaji: "gya" },
      { kana: "ギュ", romaji: "gyu" },
      { kana: "ギョ", romaji: "gyo" },
    ],
    // Z Column (Dakuten)
    [
      { kana: "ジャ", romaji: "ja" },
      { kana: "ジュ", romaji: "ju" },
      { kana: "ジョ", romaji: "jo" },
    ],
    // D Column (Dakuten)
    [
      { kana: "ヂャ", romaji: "ja" },
      { kana: "ヂュ", romaji: "ju" },
      { kana: "ヂョ", romaji: "jo" },
    ],
    // B Column (Dakuten)
    [
      { kana: "ビャ", romaji: "bya" },
      { kana: "ビュ", romaji: "byu" },
      { kana: "ビョ", romaji: "byo" },
    ],
    // P Column (Handakuten)
    [
      { kana: "ピャ", romaji: "pya" },
      { kana: "ピュ", romaji: "pyu" },
      { kana: "ピョ", romaji: "pyo" },
    ],
  ],
} as const;
