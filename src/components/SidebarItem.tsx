export default function SidebarItem({
	item,
	index,
	handleSelectLanguage,
}: {
	item: string;
	index: number;
	handleSelectLanguage: (language: string) => void;
}) {
	return (
		<li key={index}>
			<button onClick={() => handleSelectLanguage(item)}># {item}</button>
		</li>
	);
}
