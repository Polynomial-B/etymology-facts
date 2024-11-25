import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";
import Background from "../Background";
import { HeaderProps } from "../../lib/types";

export default function Header({ handleAddNewItem }: HeaderProps) {
	return (
		<header>
			<Background />
			<Logo />
			<PageHeading />
			<FeedbackForm handleAddNewItem={handleAddNewItem} />
		</header>
	);
}
