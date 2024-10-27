"use client";

import { ChangeEvent, RefObject } from "react";

export const GuessInput = ({ ref, setValue, value }: { ref: RefObject<HTMLInputElement>; setValue: (value: string) => void; value: string }) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		const cleanedValue = typedValue.replace(/[^a-zA-Z\s]/g, "");

		setValue(cleanedValue);
	};

	return (
		<input
			autoComplete="off"
			className="rounded-md border border-gray-300  bg-background-200 px-2 py-1 outline-none ring-0 ring-transparent transition-all duration-200 focus:border-transparent focus:ring-2  focus:ring-gray-300"
			onChange={onChange}
			ref={ref}
			type="text"
			value={value}
		/>
	);
};
