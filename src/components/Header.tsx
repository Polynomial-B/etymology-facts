import Logo from "./Logo";
import PageHeading from "./PageHeading";
import FeedbackForm from "./FeedbackForm";
import Background from "./Background";

export default function Header() {
	return (
		<header>
			<Background />
			<Logo />
			<PageHeading />
			<FeedbackForm />
		</header>
	);
}
