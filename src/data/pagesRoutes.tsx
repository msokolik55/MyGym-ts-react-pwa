import {
	FitnessCenter,
	Build,
	ImportExport,
	History,
	RotateLeft
} from "@material-ui/icons";

interface iRoute {
	path: string;
	name: string;
	icon: any;
}

export const pagesRoutes = {
	home: "/",
	index: "/index",
	edit: "/edit",
	export: "/export",
	history: "/history",
	reset: "/reset"
};

export const Routes: iRoute[] = [
	{ path: pagesRoutes.home, name: "Tréning", icon: <FitnessCenter /> },
	// { path: pagesRoutes.index, name: "Tréning", icon: <FitnessCenter /> },
	{ path: pagesRoutes.edit, name: "Edit", icon: <Build /> },
	{ path: pagesRoutes.export, name: "Export", icon: <ImportExport /> },
	{ path: pagesRoutes.history, name: "História", icon: <History /> },
	{ path: pagesRoutes.reset, name: "Reset", icon: <RotateLeft /> }
];
