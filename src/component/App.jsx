import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Materials from "./Materials";
import Equipment from "./Equipment";
import Labour from "./Labour";
import Feedback from "./Feedback";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/materials" exact component={() => <Materials />} />
					<Route path="/equipment" exact component={() => <Equipment />} />
					<Route path="/labour" exact component={() => <Labour />} />
					<Route path="/feedback" exact component={() => <Feedback />} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
