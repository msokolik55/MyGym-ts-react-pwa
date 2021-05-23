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
import { dbKeys } from "./data/database";
import { pagesRoutes } from "./data/pagesRoutes";

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

	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (newValue: number) => {
		setValue(newValue);
	};

	useEffect(() => {
		get(dbKeys.exercises).then((val) => {
			if (val === undefined) setAllExer(exercisesDemo);
			else setAllExer(val);
		});

		get(dbKeys.history).then((val) => {
			if (val === undefined) setHistory([]);
			else setHistory(val);
		});
	}, []);

	useEffect(() => {
		set(dbKeys.exercises, allExer);
	}, [allExer]);

	useEffect(() => {
		set(dbKeys.history, history);
	}, [history]);

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
						to={pagesRoutes.home}
						label="Tréning"
						icon={<FitnessCenter />}
					/>
					<BottomNavigationAction
						component={Link}
						to={pagesRoutes.edit}
						label="Edit"
						icon={<Build />}
					/>
					<BottomNavigationAction
						component={Link}
						to={pagesRoutes.export}
						label="Export"
						icon={<ImportExport />}
					/>
					<BottomNavigationAction
						component={Link}
						to={pagesRoutes.history}
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
							path={pagesRoutes.home}
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
							path={pagesRoutes.edit}
							component={() => (
								<EditPage exercises={allExer} setExercises={setAllExer} />
							)}
						/>
						<Route
							exact
							path={pagesRoutes.export}
							component={() => <ExportPage exercises={allExer} />}
						/>
						<Route
							exact
							path={pagesRoutes.history}
							component={() => (
								<HistoryPage data={history} setData={setHistory} />
							)}
						/>
						<Redirect to={pagesRoutes.home} />
					</Switch>
				</div>
			</Router>
		</Grid>
	);
}

export default App;
