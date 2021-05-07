import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

// pages
import MainPage from "./pages";
import EditPage from "./pages/edit";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Trening</Link> | <Link to="/edit">Edit</Link>
			</nav>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/edit" component={EditPage} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
