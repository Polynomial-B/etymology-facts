export default function Footer() {
	return (
		<footer className="footer">
			<small>
				<p>
					&copy;{" "}
					<a
						target="_blank"
						href="https://github.com/Polynomial-B"
						style={{
							color: "inherit",
							textDecoration: "underline",
						}}
					>
						github.com/Polynomial-B
					</a>{" "}
					{new Date().getFullYear()}
				</p>
			</small>
		</footer>
	);
}
