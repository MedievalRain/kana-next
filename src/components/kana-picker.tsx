"use client";

import { kanas, type KanaType } from "@/entities/characters";
import { selectedColumnsAtom } from "@/entities/columns-state";
import { useAtom } from "jotai";
import { useCallback } from "react";

import { KanaTable } from "./kana-table";

export const KanaPicker = () => {
  const [selectedColumns, setSelectedColumns] = useAtom(selectedColumnsAtom);

  const toggleSelectedColumn = useCallback(
    (index: number, kanaType: KanaType) => {
      setSelectedColumns((draft) => {
        if (draft[kanaType] && draft[kanaType][index] !== undefined) {
          draft[kanaType][index] = !draft[kanaType][index];
        }
      });
      console.log({ index, kanaType });
    },
    [setSelectedColumns]
  );

  return (
    <ul className="flex flex-col gap-8">
      <li>
        <h3 className="text-xl font-semibold">Hiragana ひらがな</h3>
        <div className="mt-1">
          <KanaTable
            columns={kanas.hiragana}
            selectedColumns={selectedColumns.hiragana}
            toggleColumn={(index) => toggleSelectedColumn(index, "hiragana")}
          />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">
          Hiragana combinations ひらがな
        </h3>
        <div className="mt-1">
          <KanaTable
            columns={kanas["hiragana-combos"]}
            selectedColumns={selectedColumns["hiragana-combos"]}
            toggleColumn={(index) =>
              toggleSelectedColumn(index, "hiragana-combos")
            }
          />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">Katakana カタカナ</h3>
        <div className="mt-1">
          <KanaTable
            columns={kanas.katakana}
            selectedColumns={selectedColumns.katakana}
            toggleColumn={(index) => toggleSelectedColumn(index, "katakana")}
          />
        </div>
      </li>
      <li>
        <h3 className="text-xl font-semibold">
          Katakana combinations カタカナ
        </h3>
        <div className="mt-1">
          <KanaTable
            columns={kanas["katakana-combos"]}
            selectedColumns={selectedColumns["katakana-combos"]}
            toggleColumn={(index) =>
              toggleSelectedColumn(index, "katakana-combos")
            }
          />
        </div>
      </li>
    </ul>
  );
};
