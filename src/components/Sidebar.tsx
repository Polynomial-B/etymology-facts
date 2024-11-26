import SidebarItem from "./SidebarItem";

export default function Sidebar({ languageList }: { languageList: string[] }) {
	return (
		<ul className="hashtags">
			{languageList.map((item: string, i: number) => (
				<SidebarItem item={item} index={i} />
			))}
		</ul>
	);
}
