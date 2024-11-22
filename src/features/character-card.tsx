import type { ChangeEvent } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type CharacterCardProp = {
	acceptedAnswers: string[];
	backSide: string;
	frontSide: string;
	isFront?: boolean;
	onCorrectAnswer: () => void;
	onWrongAnswer: () => void;
};

export const CharacterCard = ({ acceptedAnswers, backSide, frontSide, isFront, onCorrectAnswer, onWrongAnswer }: CharacterCardProp) => {
	const [inputValue, setInputValue] = useState("");
	const [disabled, setDisabled] = useState(false);
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
		<div className="flex w-[384px] flex-col gap-8">
			<AnimatePresence>
				<motion.div
					className="flex h-[512px] flex-col items-center justify-center rounded-md border border-[#111317] bg-[#C7CAD1] p-4"
					exit={{ opacity: 0 }}
				>
					<h2 className="select-none text-xl font-bold text-[#1a1d23]">{frontSide}</h2>
				</motion.div>
			</AnimatePresence>

			{isFront && (
				<input
					autoComplete="off"
					className="rounded-md border border-gray-300 bg-background-200 px-2 py-1 text-center font-semibold outline-none ring-0 ring-transparent transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-300  disabled:border-transparent"
					onChange={onValueChange}
					type="text"
					value={inputValue}
				/>
			)}
		</div>
	);
};
