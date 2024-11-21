import type { Metadata } from "next";

import "./globals.css";

import type { PropsWithChildren } from "react";

import { cn } from "@/shared/utils/cn";
import { MainLayout } from "@/widgets/main-layout";
import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	description: "Learn Hiragana and Katakana",
	title: "Kana Next",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className={cn(nunito.className, "antialiased selection:bg-[#42b4ff4d] text-[#C7CAD1]")}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
