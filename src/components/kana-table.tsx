"use client";

import { type Character, KanaType } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { cn } from "@/utils/cn";
import { atom, useAtom, useSetAtom } from "jotai";
import { useMemo } from "react";
import { firstBy } from "remeda";

const KanaCell = ({
  isSelected,
  kana,
  romaji,
}: {
  isSelected?: boolean;
  kana?: string;
  romaji?: string;
}) => {
  return (
    <td
      className={cn(
        "border border-background-300 lg:p-2 text-center",
        isSelected && "bg-[#42b4ff4d]"
      )}
    >
      {kana && romaji ? (
        <div>
          <div>{kana}</div>
          <div className="text-sm text-gray-500">{romaji}</div>
        </div>
      ) : null}
    </td>
  );
};

const getColumnsCount = (characters: Character[]) =>
  firstBy(characters, [(character) => character.column, "desc"])!.column;

const mapTableCharacters = (
  characters: Character[]
): (Character | null)[][] => {
  const sortedCharacters = characters.sort((a, b) => {
    if (a.row === b.row) {
      return a.column - b.column;
    }
    return a.row - b.row;
  });

  const maxRow = firstBy(characters, [
    (character) => character.row,
    "desc",
  ])!.row;
  const maxColumn = getColumnsCount(characters);

  const table: (Character | null)[][] = Array.from({ length: maxRow + 1 }, () =>
    Array(maxColumn + 1).fill(null)
  );

  sortedCharacters.forEach((character) => {
    table[character.row][character.column] = character;
  });

  return table;
};

const mapSelectedColumns = (kanas: Character[]) => {
  const columnsCount = getColumnsCount(kanas);
  const selectedColumns: boolean[] = Array(columnsCount).fill(true);

  kanas.forEach((character) => {
    if (!character.isSelected) {
      selectedColumns[character.column] = false;
    }
  });

  return selectedColumns;
};

export const KanaTable = ({ kanaType }: { kanaType: KanaType }) => {
  const setKanas = useSetAtom(kanasAtom);
  const [tableKanas] = useAtom(
    useMemo(
      () =>
        atom((get) => get(kanasAtom).filter((kana) => kana.type === kanaType)),
      [kanaType]
    )
  );
  const mappedKanas = mapTableCharacters(tableKanas);

  const selectColumn = (index: number, isSelected: boolean) => {
    setKanas((draft) => {
      draft.forEach((character) => {
        if (character.column === index && character.type === kanaType) {
          character.isSelected = isSelected;
        }
      });
    });
  };

  const selectedColumns = mapSelectedColumns(tableKanas);
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {selectedColumns.map((isSelected, columnIndex) => {
            return (
              <th
                className="border border-background-300 bg-background-200 text-center"
                key={columnIndex}
              >
                <label className="block">
                  <input
                    checked={isSelected}
                    className="text-blue-600 lg:m-2"
                    onChange={(e) =>
                      selectColumn(columnIndex, e.target.checked)
                    }
                    type="checkbox"
                  />
                </label>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {mappedKanas.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((character, columnIndex) => {
              return (
                <KanaCell
                  isSelected={
                    character
                      ? character.isSelected
                      : selectedColumns[columnIndex]
                  }
                  kana={character?.kana}
                  key={`${rowIndex}-${columnIndex}`}
                  romaji={character?.romaji}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
