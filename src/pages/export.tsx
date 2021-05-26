import React, { useState } from "react";
import { bodyPart, exercise } from "../data/interfaces";
import { categories } from "../data/bodyParts";
import { bodyParts, equipments } from "../data/enums";

import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

type props = {
	exercises: exercise[];
};

const ExportPage = ({ exercises }: props) => {
	const exportToString = () => {
		let text = "[\n";

		categories.forEach((cat) => {
			text += "\t//#region " + cat.name + "\n";

			exercises
				.filter((exer) => exer.bodyPart === cat.key)
				.map((exer) => (text += exerciseToString(exer, cat)));

			text += "\t//#endregion\n\n";
		});

		text += "]";
		return text;
	};

	const exportFullProgramToString = (exer: exercise) => {
		if (exer.fullProgram === undefined) {
			return "";
		}

		let text = "\t\tfullProgram: [\n";
		exer.fullProgram.forEach((item) => {
			text += "\t\t\t{\n";
			text += '\t\t\t\tname: "' + item.name + '"\n';
			text += '\t\t\t\trepetitions: "' + item.repetitions + '"\n';
			text += "\t\t\t},\n";
		});
		text += "\t\t],\n";
		return text;
	};

	const exerciseToString = (exer: exercise, cat: bodyPart) => {
		let text = "\t{\n";
		text += '\t\tname: "' + exer.name + '",\n';
		text += "\t\tbodyPart: bodyParts." + bodyParts[cat.key] + ",\n";

		if (exer.weights !== undefined)
			text += "\t\tweights: [" + exer.weights?.join(", ") + "],\n";

		if (exer.equipments !== undefined)
			text += "\t\tequipments: equipments." + equipments[exer.equipments] + ",\n";

		text += exportFullProgramToString(exer);

		if (exer.notes !== undefined) text += '\t\tnotes: "' + exer.notes + '",\n';
		if (exer.link !== undefined) text += '\t\tlink: "' + exer.link + '",\n';

		text += "\t},\n";
		return text;
	};

	let text = exportToString();
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
