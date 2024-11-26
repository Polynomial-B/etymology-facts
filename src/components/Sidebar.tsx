import { SidebarProps } from "../lib/types";
import SidebarItem from "./SidebarItem";

export default function Sidebar({
	languageList,
	handleSelectLanguage,
}: SidebarProps) {
	return (
		<ul className="hashtags">
			{languageList.map((item: string, i: number) => (
				<SidebarItem
					item={item}
					index={i}
					handleSelectLanguage={handleSelectLanguage}
				/>
			))}
		</ul>
	);
}
