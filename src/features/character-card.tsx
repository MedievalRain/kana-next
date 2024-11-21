import type { ChangeEvent } from "react";

import { useState } from "react";

type CharacterCardProp = {
	acceptedAnswers: string[];
	backSide: string;
	frontSide: string;
	onCorrectAnswer: () => void;
	onWrongAnswer: () => void;
};

export const CharacterCard = ({ acceptedAnswers, backSide, frontSide, onCorrectAnswer, onWrongAnswer }: CharacterCardProp) => {
	const [inputValue, setInputValue] = useState("");

	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		const cleanedValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
		setInputValue(cleanedValue);
		if (acceptedAnswers.includes(cleanedValue)) {
			onCorrectAnswer();
			setInputValue("");
			return;
		}
		const isStartsFromAcceptedAnswer = acceptedAnswers.find((answer) => answer.startsWith(cleanedValue));
		if (!isStartsFromAcceptedAnswer) {
			onWrongAnswer();
			setInputValue("");
			return;
		}

		setInputValue(cleanedValue);
	};

	return (
		<div>
			<div className="flex size-[128px] flex-col items-center justify-center rounded-md bg-[#C7CAD1] p-4">
				<h2 className="text-5xl font-bold text-[#1a1d23]">{frontSide}</h2>
			</div>
			<label>
				<input
					autoComplete="off"
					className="rounded-md border border-gray-300 bg-background-200 px-2 py-1 text-center outline-none ring-0 ring-transparent transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-300  disabled:border-transparent"
					onChange={onValueChange}
					type="text"
					value={inputValue}
				/>
			</label>
		</div>
	);
};
