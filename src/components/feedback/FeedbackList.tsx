import FeedbackItem from "./FeedbackItem";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import { FeedbackItemType } from "../../lib/types";

export default function FeedbackList(): React.JSX.Element {
	const filteredFeedbackItems = useFeedbackItemsStore((state) =>
		state.getFilteredFeedbackItems()
	);
	const isLoading = useFeedbackItemsStore((state) => state.isLoading);
	const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);

	return (
		<ol className="feedback-list">
			{isLoading && <Loading />}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				filteredFeedbackItems.map((feedbackItem: FeedbackItemType) => {
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
