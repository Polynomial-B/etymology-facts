import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../lib/types";

export default function FeedbackItem({
	feedbackItem,
}: FeedbackItemProps): React.JSX.Element {
	const { upvoteCount, badgeInitials, companyName, text, daysAgo } =
		feedbackItem;
	return (
		<li className="feedback">
			<button>
				<TriangleUpIcon />
				<span>{upvoteCount}</span>
			</button>
			<div>
				<p>{badgeInitials}</p>
			</div>
			<div>
				<p>{companyName}</p>
				<p>{text}</p>
			</div>
			<p>{daysAgo === 0 ? "New" : daysAgo}</p>
		</li>
	);
}
