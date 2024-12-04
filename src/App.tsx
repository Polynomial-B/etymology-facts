import FeedbackContextProvider from "./components/contexts/FeedbackContextProvider";
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
