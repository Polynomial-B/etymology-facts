export default function SidebarItem({
	item,
	index,
}: {
	item: string;
	index: number;
}) {
	return (
		<li key={index + item}>
			<button># {item}</button>
		</li>
	);
}
