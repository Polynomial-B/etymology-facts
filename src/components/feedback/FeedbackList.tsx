import FeedbackItem from "./FeedbackItem";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackContext } from "../../lib/hooks";

export default function FeedbackList(): React.JSX.Element {
	const { filteredFeedbackItems, isLoading, errorMessage } =
		useFeedbackContext();

	return (
		<ol className="feedback-list">
			{isLoading && <Loading />}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				filteredFeedbackItems.map((feedbackItem) => {
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
