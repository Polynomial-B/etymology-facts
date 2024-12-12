import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";
import Background from "../Background";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function Header() {
	const handleAddNewItem = useFeedbackItemsStore(
		(state) => state.handleAddNewItem
	);
	return (
		<header>
			<Background />
			<Logo />
			<PageHeading />
			<FeedbackForm handleAddNewItem={handleAddNewItem} />
		</header>
	);
}
