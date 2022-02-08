import React, { useState } from "react";
import { exercise } from "../data/exercises";

import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

type props = {
	exercises: exercise[];
};

const ExportPage = ({ exercises }: props) => {
	let text = JSON.stringify(exercises, null, 4);
	const [open, setOpen] = useState(false);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Button
				variant="outlined"
				onClick={() =>
					navigator.clipboard.writeText(text).then(() => setOpen(true))
				}>
				Copy
			</Button>
			<div
				contentEditable={true}
				style={{
					borderStyle: "solid",
					minHeight: "2em",
					borderWidth: 1
				}}></div>

			<Snackbar
				open={open}
				autoHideDuration={2000}
				anchorOrigin={{
					horizontal: "center",
					vertical: "bottom"
				}}
				onClose={() => setOpen(false)}>
				<Alert severity="success">Skopirovane do schranky</Alert>
			</Snackbar>
		</div>
	);
};

export default ExportPage;
