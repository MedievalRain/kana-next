"use client";

import { type Character, KanaType } from "@/entities/characters";
import { kanasAtom } from "@/entities/characters-state";
import { cn } from "@/utils/cn";
import { atom, useAtom, useSetAtom } from "jotai";
import { useMemo } from "react";

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
        "border border-background-300 p-2 text-center",
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

const mapTableCharacters = (
  characters: Character[]
): (Character | null)[][] => {
  const sortedCharacters = characters.sort((a, b) => {
    if (a.row === b.row) {
      return a.column - b.column;
    }
    return a.row - b.row;
  });

  const maxRow = Math.max(...characters.map((char) => char.row));
  const maxColumn = Math.max(...characters.map((char) => char.column));

  const table: (Character | null)[][] = Array.from({ length: maxRow + 1 }, () =>
    Array(maxColumn + 1).fill(null)
  );

  sortedCharacters.forEach((character) => {
    table[character.row][character.column] = character;
  });

  return table;
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

  const selectColumn = (index: number) => {
    setKanas((draft) => {
      draft.forEach((character) => {
        if (character.column === index) {
          character.isSelected = !character.isSelected;
        }
      });
    });
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {mappedKanas[0].map((_, columnIndex) => {
            return (
              <th
                className="border border-background-300 bg-background-200 text-center"
                key={columnIndex}
              >
                <label className="block">
                  <input
                    checked={tableKanas.every(
                      (character) =>
                        character.column !== columnIndex ||
                        character?.isSelected === true
                    )}
                    className="m-2 text-blue-600"
                    onChange={() => selectColumn(columnIndex)}
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
            {row.map((character, columnIndex) => (
              <KanaCell
                isSelected={character?.isSelected}
                kana={character?.kana}
                key={`${rowIndex}-${columnIndex}`}
                romaji={character?.romaji}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
