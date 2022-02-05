import React from "react";
import { del } from "idb-keyval";
import { dbKeys } from "../data/database";
import { Button } from "@material-ui/core";

const ResetPage = () => {
	return (
		<>
			{/* TODO: popup confirm window; popup about completed */}
			<Button variant="outlined" onClick={() => del(dbKeys.exercises)}>
				Vymazať dáta cvičení
			</Button>
			{/* ENDTODO */}
		</>
	);
};

export default ResetPage;
