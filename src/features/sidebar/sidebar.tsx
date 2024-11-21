import { SidebarLink } from "./sidebar-link";

export const Sidebar = () => {
	return (
		<nav className="shrink rounded-md bg-[#1a1d23] p-4 xl:min-w-56">
			<ul className="flex flex-col gap-4">
				<SidebarLink href="/training">Kana Training</SidebarLink>
				<SidebarLink href="/exam">Full Exam</SidebarLink>
			</ul>
		</nav>
	);
};
