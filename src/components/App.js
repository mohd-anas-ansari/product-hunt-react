//Absolute imports
import React from "react";




//Relative imports
import Cards from "./Cards";
import HeaderBanner from "./Header";
import Sidebars from "./Sidebars";




//CSS
import "../assets/main.css";
import "../assets/sidebars.css";
import "../assets/header.css";



function App() {
	return (
		<div>
			<HeaderBanner />
      <Cards />
      <Sidebars />
		</div>
	);
}




export default App;
