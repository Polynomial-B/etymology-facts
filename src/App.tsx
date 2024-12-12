import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="app">
			<Footer />
			<Container />
			<Sidebar />
		</div>
	);
}

export default App;
