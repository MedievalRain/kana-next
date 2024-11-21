import type { PropsWithChildren } from "react";

import { Sidebar } from "@/features/sidebar/sidebar";

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-screen gap-4 bg-[#111317] p-4 lg:flex">
			<Sidebar />
			<main className="grow bg-[#1a1d23] p-4 lg:rounded-md">{children}</main>
		</div>
	);
};
