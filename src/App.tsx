import FeedbackContextProvider from "./contexts/FeedbackContextProvider";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="app">
			<Footer />
			<FeedbackContextProvider>
				<Container />
				<Sidebar />
			</FeedbackContextProvider>
		</div>
	);
}

export default App;
