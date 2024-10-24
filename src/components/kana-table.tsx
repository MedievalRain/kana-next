"use client";

import { type Character } from "@/entities/characters";
import { cn } from "@/utils/cn";
import { useState } from "react";

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

export const KanaTable = ({ columns }: { columns: (Character | null)[][] }) => {
  const [selectedColumns, setSelectedColumns] = useState<boolean[]>(
    new Array(columns.length).fill(false)
  );

  const toggleColumn = (index: number) => {
    setSelectedColumns((prevSelected) => {
      const updated = [...prevSelected];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {columns.map((_, columnIndex) => (
            <th
              className="border border-background-300 bg-background-200 p-2 text-center"
              key={columnIndex}
            >
              <label className="block">
                <input
                  checked={selectedColumns[columnIndex]}
                  className="text-blue-600"
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
