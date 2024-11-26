export default function SidebarItem({
	item,
	handleSelectLanguage,
}: {
	item: string;
	index: number;
	handleSelectLanguage: (language: string) => void;
}) {
	return (
		<li>
			<button onClick={() => handleSelectLanguage(item)}># {item}</button>
		</li>
	);
}
