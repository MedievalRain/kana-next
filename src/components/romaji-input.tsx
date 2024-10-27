"use client";

import type { ChangeEvent } from "react";

export const RomajiInput = ({ disabled, setValue, value }: { disabled: boolean; setValue: (value: string) => void; value: string }) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const typedValue = e.target.value;
		const cleanedValue = typedValue.replace(/[^a-zA-Z\s]/g, "");

		setValue(cleanedValue);
	};

	return (
		<input
			autoComplete="off"
			className="rounded-md border border-gray-300 bg-background-200 px-2  py-1 text-center outline-none ring-0 ring-transparent transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-300  disabled:border-transparent"
			disabled={disabled}
			onChange={onChange}
			type="text"
			value={value}
		/>
	);
};
