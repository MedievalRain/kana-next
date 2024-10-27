"use client";

import { cn } from "@/utils/cn";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const CharactersGuess = ({ isError, kana }: { isError: number; kana?: string }) => {
	const [displayKana, setDisplayKana] = useState(kana);
	const animationControls = useAnimation();

	useEffect(() => {
		if (isError === 0) {
			return;
		}

		animationControls.start({
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
			x: [0, -5, 5, -5, 5, -5, 5, -5, 5, 0],
		});
	}, [animationControls, isError]);

	useEffect(() => {
		const animateKanaUpdate = async () => {
			await animationControls.start({
				opacity: 0,
				scale: 0.8,
				transition: {
					duration: 0.1,
					ease: "easeInOut",
				},
				x: -50,
			});
			setDisplayKana(kana);
			animationControls.set({
				x: 50,
			});
			await animationControls.start({
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.1,
					ease: "easeInOut",
				},
				x: 1,
			});
		};

		const animateFromSameValue = async () => {
			animationControls.set({
				opacity: 0,
				x: 50,
			});
			await animationControls.start({
				opacity: 1,
				scale: 1,
				transition: {
					duration: 0.1,
					ease: "easeInOut",
				},
				x: 1,
			});
		};

		if (kana === displayKana) {
			animateFromSameValue();
			return;
		}

		if (!displayKana && kana) {
			setDisplayKana(kana);
		} else {
			animateKanaUpdate();
		}
	}, [animationControls, displayKana, kana]);

	if (kana) {
		return (
			<div className="flex h-12 gap-2">
				<motion.span
					animate={animationControls}
					className={cn("text-5xl font-bold", { "text-red-500": isError })}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}
				>
					{displayKana}
				</motion.span>
			</div>
		);
	}

	return <span className="text-lg leading-[3rem]">Choose columns to grind</span>;
};
