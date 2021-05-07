import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

import { exercisesDemo } from "./exercises";

// pages
import MainPage from "./pages";
import EditPage from "./pages/edit";

function App() {
	const [allExer, setAllExer] = useState(exercisesDemo);

	return (
		<Router>
			<nav>
				<Link to="/">Trening</Link> | <Link to="/edit">Edit</Link>
			</nav>
			<Switch>
				<Route
					exact
					path="/"
					component={() => <MainPage exercises={allExer} />}
				/>
				<Route
					exact
					path="/edit"
					component={() => (
						<EditPage exercises={allExer} setExercises={setAllExer} />
					)}
				/>
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
