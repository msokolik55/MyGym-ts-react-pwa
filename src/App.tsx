import React, { useEffect, useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	// Link,
	NavLink
} from "react-router-dom";
import { get, set } from "idb-keyval";

// Material-UI
import {
	Grid,
	// BottomNavigation,
	// BottomNavigationAction,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Divider,
	List,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	MenuItem,
	InputLabel,
	FormControl,
	Select
} from "@material-ui/core";
import {
	// FitnessCenter,
	// Build,
	// ImportExport,
	// History,
	Menu,
	ChevronLeft
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

// data
import { exercisesDemo } from "./data/exercises";
import { exercise, history } from "./data/interfaces";
import { dbKeys } from "./data/database";
import { pagesRoutes, Routes } from "./data/pagesRoutes";

// pages
import MainPage from "./pages";
import EditPage from "./pages/edit";
import ExportPage from "./pages/export";
import HistoryPage from "./pages/history";
import ResetPage from "./pages/reset";

const useStyles = makeStyles({
	navigation: {
		width: "100%",
		position: "fixed",
		bottom: 0,
		backgroundColor: "orange",
		zIndex: 1
	},
	content: {
		marginBottom: "56px"
		// marginTop: "56px"
	}
});

function App() {
	const [allExer, setAllExer] = useState<exercise[]>(exercisesDemo);
	const [history, setHistory] = useState<history[]>([]);

	const classes = useStyles();
	// const [value, setValue] = useState(0);
	// const handleChange = (newValue: number) => {
	// 	setValue(newValue);
	// };

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

	const [title, setTitle] = useState<string>("Tréning");
	const [drawer, setDrawer] = useState<boolean>(false);

	// TODO: refactor
	interface iPlace {
		id: number;
		name: string;
	}
	const [places, setPlaces] = useState<iPlace[]>([
		{ id: 0, name: "default 1" },
		{ id: 1, name: "default 2" }
	]);
	const [actualPlace, setActualPlace] = useState<number>(0);
	// ENDTODO

	return (
		<Grid>
			<AppBar
				position="sticky"
				style={{ backgroundColor: "orange", color: "rgb(0, 0, 0, 0.6)" }}>
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={() => setDrawer(true)}
						// sx={{
						// 	marginRight: "36px",
						// 	...(drawer && { display: "none" })
						// }}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Router>
				<SwipeableDrawer
					open={drawer}
					onOpen={() => () => setDrawer(true)}
					onClose={() => setDrawer(false)}>
					<Grid
						container
						direction="column"
						justify="space-between"
						style={{ flex: 1 }}>
						<Grid>
							<Grid
								container
								direction="row"
								alignItems="center"
								justify="space-between">
								<Typography style={{ marginLeft: "1em" }}>
									Menu
								</Typography>
								<IconButton
									onClick={() => setDrawer(false)}
									style={{ alignSelf: "end" }}>
									<ChevronLeft />
								</IconButton>
							</Grid>
							<Divider />
							<List>
								{Routes.map((prop, key) => {
									return (
										<NavLink
											key={key}
											to={prop.path}
											style={{ textDecoration: "none" }}
											onClick={() => setTitle(prop.name)}>
											<MenuItem>
												{/* <MenuItem selected={activeRoute(prop.path)}> */}
												<ListItemIcon>{prop.icon}</ListItemIcon>
												<ListItemText primary={prop.name} />
											</MenuItem>
										</NavLink>
									);
								})}
							</List>
						</Grid>
						<FormControl>
							<Divider />
							<InputLabel>Miesto</InputLabel>
							<Select
								value={actualPlace}
								onChange={(event) =>
									setActualPlace(event.target.value as number)
								}>
								{places.map((place) => (
									<MenuItem
										key={"place" + place.id.toString()}
										value={place.id}>
										{place.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</SwipeableDrawer>

				{/*
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
				</BottomNavigation> */}

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
						<Route
							exact
							path={pagesRoutes.reset}
							component={() => <ResetPage />}
						/>
						<Redirect to={pagesRoutes.home} />
					</Switch>
				</div>
			</Router>
		</Grid>
	);
}

export default App;
