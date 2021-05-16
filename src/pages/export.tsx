import React from "react";
import { bodyPart, exercise } from "../data/interfaces";
import { categories } from "../data/bodyParts";
import { bodyParts, equipments } from "../data/enums";

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

	const exerciseToString = (exer: exercise, cat: bodyPart) => {
		let text = "\t{\n";
		text += '\t\tname: "' + exer.name + '",\n';
		text += "\t\tbodyPart: bodyParts." + bodyParts[cat.key] + ",\n";

		if (exer.weights !== undefined)
			text += "\t\tweights: [" + exer.weights?.join(", ") + "],\n";

		if (exer.equipments !== undefined)
			text += "\t\tequipments: equipments." + equipments[exer.equipments] + "\n";
		text += "\t},\n";

		return text;
	};

	let text = exportToString();

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<button
				onClick={() =>
					navigator.clipboard
						.writeText(text)
						.then(() => alert("Skopirovane do schranky"))
				}>
				Copy
			</button>
			<div
				contentEditable={true}
				style={{
					borderStyle: "solid",
					minHeight: "2em",
					borderWidth: 1
				}}></div>
		</div>
	);
};

export default ExportPage;
