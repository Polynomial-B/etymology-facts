import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";
import Background from "../Background";
import { useFeedbackContext } from "../../lib/hooks";

export default function Header() {
	const { handleAddNewItem } = useFeedbackContext();
	return (
		<header>
			<Background />
			<Logo />
			<PageHeading />
			<FeedbackForm handleAddNewItem={handleAddNewItem} />
		</header>
	);
}
