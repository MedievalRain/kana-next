"use client";

import { hiraganaComboTable, hiraganaTable, KanaType, katakanaComboTable, katakanaTable } from "@/entities/characters";
import { selectedColumnsAtom } from "@/entities/characters-state";
import { useAtom } from "jotai";

import { KanaTable } from "./kana-table";

export const KanaPicker = () => {
	const [selectedColumns, setSelectedColumns] = useAtom(selectedColumnsAtom);

	const selectColumn = (columnIndex: number, value: boolean, kanaType: KanaType) => {
		setSelectedColumns((draft) => {
			draft[kanaType][columnIndex] = value;
		});
	};

	return (
		<ul className="flex flex-col gap-8">
			<li>
				<h3 className="text-xl font-semibold">Hiragana ひらがな</h3>
				<div className="mt-1.5">
					<KanaTable
						selectColumn={(columnIndex, value) => selectColumn(columnIndex, value, "hiragana")}
						selectedColumns={selectedColumns.hiragana}
						tableLayout={hiraganaTable}
					/>
				</div>
			</li>
			<li>
				<h3 className="text-xl font-semibold">Hiragana combinations ひらがな拗音</h3>
				<div className="mt-1.5">
					<KanaTable
						selectColumn={(columnIndex, value) => selectColumn(columnIndex, value, "hiragana-combos")}
						selectedColumns={selectedColumns["hiragana-combos"]}
						tableLayout={hiraganaComboTable}
					/>
				</div>
			</li>
			<li>
				<h3 className="text-xl font-semibold">Katakana カタカナ</h3>
				<div className="mt-1.5">
					<KanaTable
						selectColumn={(columnIndex, value) => selectColumn(columnIndex, value, "katakana")}
						selectedColumns={selectedColumns.katakana}
						tableLayout={katakanaTable}
					/>
				</div>
			</li>
			<li>
				<h3 className="text-xl font-semibold">Katakana combinations カタカナ拗音</h3>
				<div className="mt-1.5">
					<KanaTable
						selectColumn={(columnIndex, value) => selectColumn(columnIndex, value, "katakana-combos")}
						selectedColumns={selectedColumns["katakana-combos"]}
						tableLayout={katakanaComboTable}
					/>
				</div>
			</li>
		</ul>
	);
};
