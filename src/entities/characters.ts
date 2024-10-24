export type Character = {
  character: string;
  romaji: {
    acceptedValues: string[];
    renderedValue: string;
  };
};

export const hiragana: Character[] = [
  { character: "あ", romaji: { acceptedValues: ["a"], renderedValue: "a" } },
  { character: "い", romaji: { acceptedValues: ["i"], renderedValue: "i" } },
  { character: "う", romaji: { acceptedValues: ["u"], renderedValue: "u" } },
  { character: "え", romaji: { acceptedValues: ["e"], renderedValue: "e" } },
  { character: "お", romaji: { acceptedValues: ["o"], renderedValue: "o" } },
  { character: "か", romaji: { acceptedValues: ["ka"], renderedValue: "ka" } },
  { character: "き", romaji: { acceptedValues: ["ki"], renderedValue: "ki" } },
  { character: "く", romaji: { acceptedValues: ["ku"], renderedValue: "ku" } },
  { character: "け", romaji: { acceptedValues: ["ke"], renderedValue: "ke" } },
  { character: "こ", romaji: { acceptedValues: ["ko"], renderedValue: "ko" } },
  { character: "さ", romaji: { acceptedValues: ["sa"], renderedValue: "sa" } },
  {
    character: "し",
    romaji: { acceptedValues: ["shi"], renderedValue: "shi" },
  },
  { character: "す", romaji: { acceptedValues: ["su"], renderedValue: "su" } },
  { character: "せ", romaji: { acceptedValues: ["se"], renderedValue: "se" } },
  { character: "そ", romaji: { acceptedValues: ["so"], renderedValue: "so" } },
  { character: "た", romaji: { acceptedValues: ["ta"], renderedValue: "ta" } },
  {
    character: "ち",
    romaji: { acceptedValues: ["chi"], renderedValue: "chi" },
  },
  {
    character: "つ",
    romaji: { acceptedValues: ["tsu"], renderedValue: "tsu" },
  },
  { character: "て", romaji: { acceptedValues: ["te"], renderedValue: "te" } },
  { character: "と", romaji: { acceptedValues: ["to"], renderedValue: "to" } },
  { character: "な", romaji: { acceptedValues: ["na"], renderedValue: "na" } },
  { character: "に", romaji: { acceptedValues: ["ni"], renderedValue: "ni" } },
  { character: "ぬ", romaji: { acceptedValues: ["nu"], renderedValue: "nu" } },
  { character: "ね", romaji: { acceptedValues: ["ne"], renderedValue: "ne" } },
  { character: "の", romaji: { acceptedValues: ["no"], renderedValue: "no" } },
  { character: "は", romaji: { acceptedValues: ["ha"], renderedValue: "ha" } },
  { character: "ひ", romaji: { acceptedValues: ["hi"], renderedValue: "hi" } },
  { character: "ふ", romaji: { acceptedValues: ["fu"], renderedValue: "fu" } },
  { character: "へ", romaji: { acceptedValues: ["he"], renderedValue: "he" } },
  { character: "ほ", romaji: { acceptedValues: ["ho"], renderedValue: "ho" } },
  { character: "ま", romaji: { acceptedValues: ["ma"], renderedValue: "ma" } },
  { character: "み", romaji: { acceptedValues: ["mi"], renderedValue: "mi" } },
  { character: "む", romaji: { acceptedValues: ["mu"], renderedValue: "mu" } },
  { character: "め", romaji: { acceptedValues: ["me"], renderedValue: "me" } },
  { character: "も", romaji: { acceptedValues: ["mo"], renderedValue: "mo" } },
  { character: "や", romaji: { acceptedValues: ["ya"], renderedValue: "ya" } },
  { character: "ゆ", romaji: { acceptedValues: ["yu"], renderedValue: "yu" } },
  { character: "よ", romaji: { acceptedValues: ["yo"], renderedValue: "yo" } },
  { character: "ら", romaji: { acceptedValues: ["ra"], renderedValue: "ra" } },
  { character: "り", romaji: { acceptedValues: ["ri"], renderedValue: "ri" } },
  { character: "る", romaji: { acceptedValues: ["ru"], renderedValue: "ru" } },
  { character: "れ", romaji: { acceptedValues: ["re"], renderedValue: "re" } },
  { character: "ろ", romaji: { acceptedValues: ["ro"], renderedValue: "ro" } },
  { character: "わ", romaji: { acceptedValues: ["wa"], renderedValue: "wa" } },
  {
    character: "を",
    romaji: { acceptedValues: ["wo", "o"], renderedValue: "o" },
  },
  { character: "ん", romaji: { acceptedValues: ["n"], renderedValue: "n" } },
];
