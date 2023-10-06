import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import HowItWorks from "../components/HowItWorks";
import NavBar from "../components/NavBar";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import WaitList from "../components/WaitList";

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<Partners />
			<Features />
			<HowItWorks />
			<Gallery />
			<Pricing />
			<WaitList />
			<Footer />
		</>
	);
}

export default App;
