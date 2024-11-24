import { ContainerProps } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

export default function Container({
	feedbackItems,
	isLoading,
	errorMessage,
	handleAddNewItem,
}: ContainerProps) {
	return (
		<main className="container">
			<Header handleAddNewItem={handleAddNewItem} />
			<FeedbackList
				feedbackItems={feedbackItems}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
		</main>
	);
}
