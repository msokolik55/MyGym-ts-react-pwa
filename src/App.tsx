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
import { history } from "./data/interfaces";

// pages
import MainPage from "./pages";
import EditPage from "./pages/edit";
import ExportPage from "./pages/export";
import HistoryPage from "./pages/history";

const useStyles = makeStyles({
	navigation: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		backgroundColor: "orange"
	},
	content: {
		marginBottom: "56px"
	}
});

function App() {
	const [allExer, setAllExer] = useState(exercisesDemo);
	const [history, setHistory] = useState<history[]>([]);

	useEffect(() => {
		get("exercises").then((val) => {
			if (val === undefined) setAllExer(exercisesDemo);
			else setAllExer(val);
		});
		get("history").then((val) => {
			if (val === undefined) setHistory([]);
			else setHistory(val);
		});
	}, []);

	useEffect(() => {
		set("exercises", allExer);
	}, [allExer]);

	useEffect(() => {
		set("history", history);
	}, [history]);

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (newValue: number) => {
		setValue(newValue);
	};

	return (
		<Grid>
			<Router>
				<BottomNavigation
					className={classes.navigation}
					value={value}
					onChange={(event, newValue) => handleChange(newValue)}
					showLabels>
					<BottomNavigationAction
						component={Link}
						to="/"
						label="Tréning"
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
						label="História"
						icon={<History />}
					/>
				</BottomNavigation>

				{/* <nav>
				<Link to="/">Trening</Link> | <Link to="/edit">Edit</Link> |{" "}
				<Link to="/export">Export</Link>
				</nav> */}
				<div className={classes.content}>
					<Switch>
						<Route
							exact
							path="/"
							component={() => (
								<MainPage
									exercises={allExer}
									history={history}
									setHistory={setHistory}
								/>
							)}
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
						<Route
							exact
							path="/history"
							component={() => (
								<HistoryPage data={history} setData={setHistory} />
							)}
						/>
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		</Grid>
	);
}

export default App;
