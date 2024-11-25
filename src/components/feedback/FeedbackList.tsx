import FeedbackItem from "./FeedbackItem";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { ContainerProps } from "../../lib/types";

export default function FeedbackList({
	feedbackItems,
	isLoading,
	errorMessage,
}: ContainerProps): React.JSX.Element {
	return (
		<ol className="feedback-list">
			{isLoading && <Loading />}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				feedbackItems.map((feedbackItem) => {
					return (
						<FeedbackItem
							key={feedbackItem.id}
							feedbackItem={feedbackItem}
						/>
					);
				})
			)}
		</ol>
	);
}
