import { cn } from "@/utils/cn";
import { type AnimationControls, motion } from "framer-motion";

export const CharactersGuess = ({
	animationControls,
	isError,
	kana,
}: {
	animationControls: AnimationControls;
	isError: boolean;
	kana?: string;
}) => {
	if (kana) {
		return (
			<div className="flex gap-2">
				<motion.span
					animate={animationControls}
					className={cn("text-5xl font-bold", { "text-red-500": isError })}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}
				>
					{kana}
				</motion.span>
			</div>
		);
	}

	return <span className="text-lg leading-[3rem]">Choose columns to grind</span>;
};
