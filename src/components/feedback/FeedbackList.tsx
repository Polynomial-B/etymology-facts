import FeedbackItem from "./FeedbackItem";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import { FeedbackItemType } from "../../lib/types";
import { useMemo } from "react";

export default function FeedbackList(): React.JSX.Element {
	const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
	const selectedLanguage = useFeedbackItemsStore(
		(state) => state.selectedLanguage
	);
	const isLoading = useFeedbackItemsStore((state) => state.isLoading);
	const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);

	const filteredFeedbackItems = useMemo(() => {
		return selectedLanguage
			? feedbackItems.filter((item) => item.language === selectedLanguage)
			: feedbackItems;
	}, [feedbackItems, selectedLanguage]);

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
