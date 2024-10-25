"use client";

import { type Character, kanas, type KanaType } from "@/entities/characters";
import { selectedColumnsAtoms } from "@/entities/columns-state";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useCallback } from "react";

export const KanaTable = ({ kanaType }: { kanaType: KanaType }) => {
  const [selectedColumns, setSelectedColumns] = useAtom(
    selectedColumnsAtoms[kanaType]
  );
  const columns = kanas[kanaType];
  const toggleColumn = useCallback(
    (index: number) => {
      setSelectedColumns((draft) => {
        draft[index] = !draft[index];
      });
    },
    [setSelectedColumns]
  );

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((_, columnIndex) => (
            <th
              className="border border-background-300 bg-background-200 text-center"
              key={columnIndex}
            >
              <label className="block">
                <input
                  checked={selectedColumns[columnIndex]}
                  className="m-2 text-blue-600"
                  onChange={() => toggleColumn(columnIndex)}
                  type="checkbox"
                />
              </label>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns[0]?.map((_, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => {
              return (
                <KanaCell
                  character={column[rowIndex]}
                  isSelected={selectedColumns[columnIndex]}
                  key={`${rowIndex}-${columnIndex}`}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const KanaCell = ({
  character,
  isSelected,
}: {
  character: Character | null;
  isSelected: boolean;
}) => {
  return (
    <td
      className={cn(
        "border border-background-300 p-2 text-center",
        isSelected && "bg-[#42b4ff4d]"
      )}
    >
      {character ? (
        <div>
          <div>{character.kana}</div>
          <div className="text-sm text-gray-500">{character.romaji}</div>
        </div>
      ) : null}
    </td>
  );
};
