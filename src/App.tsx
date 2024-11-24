import { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/Sidebar";
import { exampleFeedbackItems } from "./lib/constants";
import { FeedbackItemType } from "./lib/types";

function App() {
	const [feedbackItems, setFeedbackItems] =
		useState<FeedbackItemType[]>(exampleFeedbackItems);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

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
	const handleAddNewItem = (text: string) => {
		if (text.includes("#")) {
			const language = text
				.split(" ")
				.find((word: string) => word.startsWith("#"))
				?.substring(1);
			if (!language) return;
			const newItem: FeedbackItemType = {
				id: new Date().getTime(), // not ideal, but we'll go with it for now...
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
		<div className="app">
			<Footer />
			<Container
				feedbackItems={feedbackItems}
				isLoading={isLoading}
				errorMessage={errorMessage}
				handleAddNewItem={handleAddNewItem}
			/>
			<Sidebar />
		</div>
	);
}

export default App;
