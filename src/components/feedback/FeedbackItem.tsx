import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../../lib/types";
import { useState } from "react";

export default function FeedbackItem({
	feedbackItem,
}: FeedbackItemProps): React.JSX.Element {
	const [open, setOpen] = useState<boolean>(false);
	const [like, setLike] = useState(feedbackItem.upvoteCount);
	const { badgeInitials, language, text, daysAgo } = feedbackItem;

	const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setLike((prev) => ++prev);
		e.currentTarget.disabled = true;
		e.stopPropagation();
	};
	return (
		<li
			className={`feedback ${open ? "feedback--expand" : ""}`}
			onClick={() => setOpen((prev) => !prev)}
		>
			<button onClick={(e) => handleLike(e)}>
				<TriangleUpIcon />
				<span>{like}</span>
			</button>
			<div>
				<p>{badgeInitials}</p>
			</div>
			<div>
				<p>{language}</p>
				<p>{text}</p>
			</div>
			<p>{daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
		</li>
	);
}
