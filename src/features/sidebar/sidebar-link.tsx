"use client";

import type { ComponentProps } from "react";

import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarLink = ({ children, href }: Pick<ComponentProps<typeof Link>, "children" | "href">) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<li>
			<Link
				className={cn("block rounded-lg px-4 py-2", {
					"bg-[#C7CAD1] text-[#1a1d23] font-semibold": isActive,
				})}
				href={href}
			>
				{children}
			</Link>
		</li>
	);
};
