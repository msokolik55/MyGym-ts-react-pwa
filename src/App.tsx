import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { get, set } from "idb-keyval";

// Material-UI
import { Grid, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { FitnessCenter, Build, ImportExport, History } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

// data
import { exercisesDemo } from "./data/exercises";

// pages
import MainPage from "./pages";
import EditPage from "./pages/edit";
import ExportPage from "./pages/export";

const useStyles = makeStyles({
	root: {
		backgroundColor: "orange"
	}
});

function App() {
	const [allExer, setAllExer] = useState(exercisesDemo);

	useEffect(() => {
		get("exercises").then((val) => {
			if (val === undefined) setAllExer(exercisesDemo);
			else setAllExer(val);
		});
	}, []);
	useEffect(() => {
		set("exercises", allExer);
	}, [allExer]);

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (newValue: number) => {
		setValue(newValue);
	};

	return (
		<Grid>
			<Router>
				<BottomNavigation
					className={classes.root}
					value={value}
					onChange={(event, newValue) => handleChange(newValue)}
					showLabels>
					<BottomNavigationAction
						component={Link}
						to="/"
						label="Trening"
						icon={<FitnessCenter />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/edit"
						label="Edit"
						icon={<Build />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/export"
						label="Export"
						icon={<ImportExport />}
					/>
					<BottomNavigationAction
						component={Link}
						to="/history"
						label="History"
						icon={<History />}
					/>
				</BottomNavigation>

				{/* <nav>
				<Link to="/">Trening</Link> | <Link to="/edit">Edit</Link> |{" "}
				<Link to="/export">Export</Link>
				</nav> */}
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
					<Route
						exact
						path="/export"
						component={() => <ExportPage exercises={allExer} />}
					/>
					<Redirect to="/" />
				</Switch>
			</Router>
		</Grid>
	);
}

export default App;
