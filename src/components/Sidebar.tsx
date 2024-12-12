import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
	const languageList = useFeedbackItemsStore(
		(state) => state.getLanguageList
	);
	const handleSelectLanguage = useFeedbackItemsStore(
		(state) => state.handleSelectLanguage
	);
	return (
		<ul className="hashtags">
			{languageList().map((item: string, i: number) => (
				<SidebarItem
					key={i + item}
					item={item}
					index={i}
					handleSelectLanguage={handleSelectLanguage}
				/>
			))}
		</ul>
	);
}
