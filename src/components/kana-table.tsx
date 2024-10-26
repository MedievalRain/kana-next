"use client";

import { type Character, KanaType } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { cn } from "@/utils/cn";
import { atom, useAtom, useSetAtom } from "jotai";
import { Fragment, useMemo } from "react";
import { firstBy } from "remeda";

const KanaCell = ({ kana, romaji }: { kana?: string; romaji?: string }) => {
  return (
    <td className={cn("border border-background-300 text-center ")}>
      {kana && romaji ? (
        <>
          <div>{kana}</div>
          <div className="text-sm text-gray-500">{romaji}</div>
        </>
      ) : null}
    </td>
  );
};

const getColumnsCount = (characters: Character[]) =>
  firstBy(characters, [(character) => character.column, "desc"])!.column;
const getRowsCount = (characters: Character[]) =>
  firstBy(characters, [(character) => character.row, "desc"])!.row;

const mapTableCharacters = (
  characters: Character[]
): (Character | null)[][] => {
  const sortedCharacters = characters.sort((a, b) => {
    if (a.row === b.row) {
      return a.column - b.column;
    }
    return a.row - b.row;
  });

  const maxRow = getRowsCount(characters);
  const maxColumn = getColumnsCount(characters);

  const table: (Character | null)[][] = Array.from({ length: maxRow + 1 }, () =>
    Array(maxColumn + 1).fill(null)
  );

  sortedCharacters.forEach((character) => {
    table[character.row][character.column] = character;
  });

  return table;
};

const mapSelectedRows = (kanas: Character[]) => {
  const rowsCount = getRowsCount(kanas);
  const selectedRows: boolean[] = Array(rowsCount).fill(true);

  kanas.forEach((character) => {
    if (!character.isSelected) {
      selectedRows[character.row] = false;
    }
  });

  return selectedRows;
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

  const selectRow = (index: number, isSelected: boolean) => {
    console.log({ index, isSelected });
    setKanas((draft) => {
      draft.forEach((character) => {
        if (character.row === index && character.type === kanaType) {
          character.isSelected = isSelected;
        }
      });
    });
  };

  const selectedRows = mapSelectedRows(tableKanas);
  console.log({ kanaType, selectedRows, tableKanas });
  return (
    <table className="w-full min-w-full table-fixed border-collapse border border-gray-300">
      <tbody>
        {mappedKanas.map((row, rowIndex) => {
          return (
            <tr
              className={cn({
                "bg-[#42b4ff4d]": selectedRows[rowIndex] === true,
              })}
              key={rowIndex}
            >
              {row.map((character, columnIndex) => {
                return (
                  <Fragment key={`cell-${rowIndex}-${columnIndex}`}>
                    {columnIndex === 0 && (
                      <th
                        className={cn(
                          "border border-background-300 bg-background-200 text-center",
                          {
                            "bg-[#42b4ff4d]": selectedRows[rowIndex] === true,
                          }
                        )}
                      >
                        <label className="block">
                          <input
                            checked={selectedRows[rowIndex] === true}
                            className="text-blue-600 lg:m-2"
                            onChange={(e) =>
                              selectRow(rowIndex, e.target.checked)
                            }
                            type="checkbox"
                          />
                        </label>
                      </th>
                    )}
                    <KanaCell
                      kana={character?.kana}
                      romaji={character?.romaji}
                    />
                  </Fragment>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
