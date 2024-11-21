"use client";

import { allCharactersKV } from "@/entities/characters";
import {
	currentStagesAtom,
	getNextStage,
	getStagesInitialProgress,
	getUpdatedProgressWithCorrectAnswer,
	getUpdatedProgressWithWrongAnswer,
	progressAtom,
} from "@/entities/stage";
import { CharacterCard } from "@/features/character-card";
import { useAtom } from "jotai";
import { isEmpty } from "remeda";

export const Training = () => {
	const [currentStages, setCurrentStages] = useAtom(currentStagesAtom);
	const [progress, setProgress] = useAtom(progressAtom);

	if (isEmpty(progress)) {
		const nextStage = getNextStage(currentStages.at(-1));

		if (!nextStage) {
			return <div>You completed the training!</div>;
		}
		const newStages = [...currentStages, nextStage.id];
		const nextStageInitialProgress = getStagesInitialProgress(newStages);
		setProgress(nextStageInitialProgress);
		setCurrentStages(newStages);
	}

	const currentCharacter = allCharactersKV[progress[0]];

	const handleCorrectAnswer = () => setProgress(getUpdatedProgressWithCorrectAnswer(progress));
	const handleWrongAnswer = () => setProgress(getUpdatedProgressWithWrongAnswer(progress));

	return (
		<div>
			{currentCharacter && (
				<CharacterCard
					acceptedAnswers={currentCharacter.acceptedAnswers}
					backSide={currentCharacter.romaji}
					frontSide={currentCharacter.kana}
					onCorrectAnswer={handleCorrectAnswer}
					onWrongAnswer={handleWrongAnswer}
				/>
			)}
		</div>
	);
};
