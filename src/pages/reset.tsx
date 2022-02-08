import React, { useState } from "react";
import { del } from "idb-keyval";
import { dbKeys } from "../data/database";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Snackbar,
	SnackbarOrigin
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const ResetPage = () => {
	const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState<boolean>(false);
	const [openSnackbarFail, setOpenSnackbarFail] = useState<boolean>(false);
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const snackbarPosition: SnackbarOrigin = {
		horizontal: "center",
		vertical: "bottom"
	};

	return (
		<>
			<Button variant="outlined" onClick={() => setOpenDialog(true)}>
				Vymazať dáta cvičení
			</Button>

			<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
				<DialogTitle>Odstranenie cviceni</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Naozaj si prajete zmazat vsetky ulozene cvicenia? Dany krok sa
						neda vratit.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpenDialog(false);
							setOpenSnackbarFail(true);
						}}>
						Nie
					</Button>
					<Button
						onClick={() => {
							del(dbKeys.exercises).then(() =>
								setOpenSnackbarSuccess(true)
							);
							setOpenDialog(false);
						}}
						autoFocus>
						Ano
					</Button>
				</DialogActions>
			</Dialog>

			<Snackbar
				open={openSnackbarSuccess}
				autoHideDuration={2000}
				anchorOrigin={snackbarPosition}
				onClose={() => setOpenSnackbarSuccess(false)}>
				<Alert severity="success">Mazanie uspesne</Alert>
			</Snackbar>

			<Snackbar
				open={openSnackbarFail}
				autoHideDuration={2000}
				anchorOrigin={snackbarPosition}
				onClose={() => setOpenSnackbarFail(false)}>
				<Alert severity="info">Mazanie zrusene</Alert>
			</Snackbar>
		</>
	);
};

export default ResetPage;
