import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { HeaderProps } from "../../lib/types";

export default function FeedbackForm({ handleAddNewItem }: HeaderProps) {
	const [text, setText] = useState("");
	const characterCount = MAX_CHARACTERS - text.length;
	const containsHashtag: boolean = text.includes("#");
	const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		if (characterCount > 0) {
			setText(newText);
		}
		return;
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleAddNewItem(text);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<textarea
				value={text}
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
				<button className={!containsHashtag ? "button--no-submit" : ""}>
					<span>
						{containsHashtag ? "Submit" : "Include # to Submit"}
					</span>
				</button>
			</div>
		</form>
	);
}
