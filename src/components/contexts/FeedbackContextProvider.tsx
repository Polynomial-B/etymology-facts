import { createContext, useEffect, useMemo, useState } from "react";
import { FeedbackContextType, FeedbackItemType } from "../../lib/types";
import { exampleFeedbackItems } from "../../lib/constants";

export const FeedbackContext = createContext<FeedbackContextType | null>(null);

export default function FeedbackContextProvider({ children }: React.ReactNode) {
	const [feedbackItems, setFeedbackItems] =
		useState<FeedbackItemType[]>(exampleFeedbackItems);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState<string>("");

	const filteredFeedbackItems = useMemo(
		() =>
			selectedLanguage
				? feedbackItems.filter(
						(feedbackItem) =>
							feedbackItem.language === selectedLanguage
				  )
				: feedbackItems,
		[feedbackItems, selectedLanguage]
	);

	const handleSelectLanguage = (language: string) => {
		setSelectedLanguage(language);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/comments"
				);

				if (!response.ok) {
					throw new Error();
				}
				const data = await response.json();
			} catch (err) {
				setErrorMessage("There was a problem: " + err);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const languageList = useMemo(
		() =>
			feedbackItems
				.map((item) => item.language)
				.filter((language, index, array) => {
					return array.indexOf(language) === index;
				}),
		[feedbackItems]
	);

	const handleAddNewItem = (text: string) => {
		if (text.includes("#") && text.length >= 3) {
			const language = text
				.split(" ")
				.find((word: string) => word.startsWith("#"))
				?.substring(1);
			if (!language) return;
			const newItem: FeedbackItemType = {
				id: new Date().getTime(),
				language: language,
				badgeInitials: language.substring(0, 1).toUpperCase(),
				daysAgo: 0,
				text: text,
				upvoteCount: 0,
			};
			setFeedbackItems([...feedbackItems, newItem]);
		} else return;
	};

	return (
		<FeedbackContext.Provider
			value={{
				// feedbackItems,
				isLoading,
				errorMessage,
				languageList,
				handleAddNewItem,
				filteredFeedbackItems,
				handleSelectLanguage,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
}
