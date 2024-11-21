import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm() {
	const [text, setText] = useState("");
	const characterCount = MAX_CHARACTERS - text.length;
	const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		if (characterCount > 0) {
			setText(newText);
		}
		return;
	};
	return (
		<form className="form">
			<textarea
				onChange={handleOnChange}
				id="feedback-textarea"
				placeholder="placeholder"
				spellCheck={false}
				maxLength={150}
			/>
			<label htmlFor="feedback-textarea">
				Enter your fact here, using a #hashtag for the language.
			</label>
			<div>
				<p className="u-italic">{characterCount}</p>
				<button>
					<span>Submit</span>
				</button>
			</div>
		</form>
	);
}
