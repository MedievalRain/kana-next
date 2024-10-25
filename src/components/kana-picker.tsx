import { KanaTable } from "./kana-table";

export const KanaPicker = () => {
  return (
    <ul className="flex flex-col gap-8">
      <li>
        <h3 className="text-xl font-semibold">Hiragana ひらがな</h3>
        <div className="mt-1">
          <KanaTable kanaType="hiragana" />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">
          Hiragana combinations ひらがな拗音
        </h3>
        <div className="mt-1">
          <KanaTable kanaType="hiragana-combos" />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">Katakana カタカナ</h3>
        <div className="mt-1">
          <KanaTable kanaType="katakana" />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">
          Katakana combinations カタカナ拗音
        </h3>
        <div className="mt-1">
          <KanaTable kanaType="katakana-combos" />
        </div>
      </li>
    </ul>
  );
};
