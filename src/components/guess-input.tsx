"use client";

import { ChangeEvent, RefObject, useRef } from "react";

export const GuessInput = ({ ref, setValue, value }: { ref: RefObject<HTMLInputElement>; setValue: (value: string) => void; value: string }) => {
	const oldValue = useRef("");
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		const cleanedValue = typedValue.replace(/[^a-zA-Z\s]/g, "");
		if (cleanedValue === oldValue.current) {
			return;
		}
		oldValue.current = cleanedValue;
		setValue(cleanedValue);
	};

	return (
		<input
			autoComplete="off"
			className="rounded-md border border-gray-300 bg-background-200 px-2 py-1"
			onChange={onChange}
			ref={ref}
			type="text"
			value={value}
		/>
	);
};
