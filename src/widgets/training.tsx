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

	const characters = progress.slice(0, 10);
	return (
		<div className="flex justify-center">
			<ul className="relative">
				{characters.map((kana, index) => {
					const character = allCharactersKV[kana];
					if (!character) {
						return null;
					}
					return (
						<li className={"absolute"} key={index} style={{ top: index * 1.5 }}>
							<CharacterCard
								acceptedAnswers={character.acceptedAnswers}
								backSide={character.romaji}
								frontSide={character.kana}
								isFront={index === 0}
								onCorrectAnswer={handleCorrectAnswer}
								onWrongAnswer={handleWrongAnswer}
							/>
						</li>
					);
				})}
			</ul>
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
