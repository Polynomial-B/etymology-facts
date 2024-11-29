import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../../lib/types";
import { useState } from "react";

export default function FeedbackItem({
	feedbackItem,
}: FeedbackItemProps): React.JSX.Element {
	const [open, setOpen] = useState<boolean>(false);
	const [like, setLike] = useState(feedbackItem.upvoteCount);
	const { upvoteCount, badgeInitials, language, text, daysAgo } =
		feedbackItem;

	return (
		<li className={`feedback ${open ? "feedback--expand" : ""}`}>
			<button onClick={() => setLike((prev) => ++prev)}>
				<TriangleUpIcon />
				<span>{like}</span>
			</button>
			<div>
				<p>{badgeInitials}</p>
			</div>
			<div onClick={() => setOpen((prev) => !prev)}>
				<p>{language}</p>
				<p>{text}</p>
			</div>
			<p>{daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
		</li>
	);
}
