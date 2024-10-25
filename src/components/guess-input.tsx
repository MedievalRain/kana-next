"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const GuessInput = ({
  setValue,
  value,
}: {
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const typedValue = e.target.value;
    const cleanedValue = typedValue.replace(/[^a-zA-Z\s]/g, "");
    setValue(cleanedValue);
  };

  return (
    <input
      autoComplete="off"
      className="rounded-md border border-gray-300 bg-background-200 px-2 py-1"
      onChange={onChange}
      type="text"
      value={value}
    />
  );
};
