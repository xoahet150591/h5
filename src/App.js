import React, { useEffect } from "react";
import Home from "pages/home/index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.scss";

function App() {
	useEffect(() => {
        Aos.init()
    } ,[])
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
