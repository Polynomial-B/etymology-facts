import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemProps } from "../../lib/types";

export default function FeedbackItem({
	feedbackItem,
}: FeedbackItemProps): React.JSX.Element {
	const { upvoteCount, badgeInitials, language, text, daysAgo } =
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
				<p>{language}</p>
				<p>{text}</p>
			</div>
			<p>{daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
		</li>
	);
}
