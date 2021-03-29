import React from "react";
import Header from "../container/Header.jsx";

import Top from "../container/Top.jsx";
import Middle from "../container/Middle.jsx";
import Bottom from "../container/Bottom.jsx";
import Footer from "../container/Footer.jsx";


function Homepage() {
	return (
		<div>
			<Header />
			<Top />
			<Middle />
			<Bottom />
			<Footer />
		</div>
	);
}

export default Homepage;
