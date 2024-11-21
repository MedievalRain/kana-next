import type { PropsWithChildren } from "react";

import { Sidebar } from "@/features/sidebar/sidebar";

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="min-h-screen gap-2 bg-[#111317] p-2 lg:flex">
			<Sidebar />
			<main className="grow bg-[#1a1d23] p-4 lg:rounded-md">{children}</main>
		</div>
	);
};
