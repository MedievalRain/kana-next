import { allCharactersKV } from "@/entities/characters";
import { cn } from "@/utils/cn";

export const transpose = <T,>(array: T[][]): T[][] => {
	return array[0].map((_, columnIndex) => array.map((row) => row[columnIndex]));
};

const KanaCell = ({ isSelected, kana, romaji }: { isSelected?: boolean; kana?: string; romaji?: string }) => {
	return (
		<td className={cn("border border-background-300 text-center", isSelected && "bg-[#42b4ff4d]")}>
			{kana && romaji ? (
				<div className="flex flex-col">
					<span>{kana}</span>
					<span className="text-xs text-gray-500 sm:text-sm">{romaji}</span>
				</div>
			) : (
				<div className="h-[calc(1.5rem+1.25rem)]" />
			)}
		</td>
	);
};

export const KanaTable = ({
	selectColumn,
	selectedColumns,
	tableLayout,
}: {
	selectColumn: (columnIndex: number, value: boolean) => void;
	selectedColumns: boolean[];
	tableLayout: (null | string)[][];
}) => {
	const mobileTableLayout = transpose(tableLayout);

	return (
		<>
			<table className="hidden w-full min-w-full table-fixed border-collapse border border-gray-300 sm:table">
				<thead>
					<tr>
						{selectedColumns.map((isSelected, columnIndex) => {
							const isEmptyColumn = tableLayout.every((row) => row[columnIndex] === null);
							return (
								<th className="border border-background-300 bg-background-200 text-center" key={columnIndex}>
									{!isEmptyColumn && (
										<label className="block">
											<input
												checked={isSelected}
												className="text-blue-600 lg:m-2"
												onChange={(e) => selectColumn(columnIndex, e.target.checked)}
												type="checkbox"
											/>
										</label>
									)}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{tableLayout.map((row, rowIndex) => {
						return (
							<tr key={rowIndex}>
								{row.map((kana, columnIndex) => {
									const character = kana ? allCharactersKV[kana] : undefined;
									return (
										<KanaCell
											isSelected={selectedColumns[columnIndex] === true}
											kana={character?.kana}
											key={columnIndex}
											romaji={character?.romaji}
										/>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<table className="table w-full min-w-full table-fixed border-collapse border border-gray-300 sm:hidden">
				<tbody>
					{mobileTableLayout.map((row, columnIndex) => {
						const isEmptyColumn = tableLayout.every((row) => row[columnIndex] === null);
						const isSelected = selectedColumns[columnIndex] === true;
						if (isEmptyColumn) {
							return null;
						}
						return (
							<tr key={columnIndex}>
								<th className="border border-background-300 bg-background-200 text-center" key={columnIndex}>
									<label className="block">
										<input
											checked={isSelected}
											className="text-blue-600 lg:m-2"
											onChange={(e) => selectColumn(columnIndex, e.target.checked)}
											type="checkbox"
										/>
									</label>
								</th>
								{row.map((kana, rowIndex) => {
									const character = kana ? allCharactersKV[kana] : undefined;
									return (
										<KanaCell isSelected={selectedColumns[columnIndex] === true} kana={character?.kana} key={rowIndex} romaji={character?.romaji} />
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};
