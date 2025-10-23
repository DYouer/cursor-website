import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/pricing' element={<Pricing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
