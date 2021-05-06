import React, { useState } from "react";
import "./App.css";

import { exercises } from "./exercises";
import { bodyPart, equipment, exercise } from "./interfaces";
import { bodyParts, equipments } from "./enums";

// enum sortTypes {
// 	bodyPart,
// 	equipments
// }

function App() {
	// const idbKeyval = require("idb-keyval");
	const categories: bodyPart[] = [
		{
			key: bodyParts.biceps,
			name: "Biceps",
			count: 2
		},
		{
			key: bodyParts.triceps,
			name: "Triceps",
			count: 3
		},
		{
			key: bodyParts.shoulders,
			name: "Ramena",
			count: 3
		},
		{
			key: bodyParts.chest,
			name: "Hrudnik",
			count: 3
		},
		{
			key: bodyParts.back,
			name: "Chrbat",
			count: 3
		},
		{
			key: bodyParts.calves,
			name: "Lytka",
			count: 3
		}
	];

	const equipmentss: equipment[] = [
		{
			key: equipments.none,
			name: "Ziadne"
		},
		{
			key: equipments.dumbbells,
			name: "Jednorucky"
		},
		{
			key: equipments.double,
			name: "Obojrucka"
		}
	];

	const randNumber = (arr: any[]) => {
		return Math.floor(Math.random() * arr.length);
	};

	function renderExercise(exer: exercise) {
		return (
			<div>
				<h4>{exer.name}</h4>
				<p>
					Kategoria:{" "}
					{categories
						.filter((categ) => categ.key === exer.bodyPart)
						.map((categ) => categ.name)}
				</p>
				{exer.weights !== undefined && <p>Vahy: {exer.weights.join(" - ")}</p>}
				{exer.equipments !== undefined && (
					<p>
						Pomocky:{" "}
						{equipmentss
							.filter((equip) => equip.key === exer.equipments)
							.map((equip) => equip.name)}
					</p>
				)}
			</div>
		);
	}

	const generateCategory = (
		setter: React.Dispatch<React.SetStateAction<exercise[]>>
	) => {
		const randCateg = randNumber(categories);
		generateExercises(categories[randCateg], setter);
	};

	const generateExercises = (
		category: bodyPart,
		setter: React.Dispatch<React.SetStateAction<exercise[]>>
	) => {
		let count = 0;
		let used: number[] = [];
		let training: exercise[] = [];
		let choice = exercises.filter((exer) => exer.bodyPart === category.key);

		while (count < category.count && count < choice.length) {
			let i = randNumber(choice);
			if (!used.includes(i)) {
				used.push(i);
				training.push(choice[i]);
				count++;
			}
		}

		setter(training);
	};

	// const [sortBy, setSortBy] = useState<sortTypes>(sortTypes.bodyPart);
	const [training, setTraining] = useState<exercise[]>([]);

	return (
		<div className="App">
			{/* <button onClick={() => setSortBy(sortTypes.bodyPart)}>Partie</button>
			<button onClick={() => setSortBy(sortTypes.equipments)}>Naradie</button> */}
			<button onClick={() => generateCategory(setTraining)}>Vygeneruj</button>
			{training.map((exer, id) => (
				<div key={id}>{renderExercise(exer)}</div>
			))}

			{/* {sortBy === sortTypes.bodyPart &&
				categories.map((category) => (
					<div>
						{exercises.filter((exer) => exer.bodyPart === category.key)
							.length > 0 && (
							<div>
								<h1>{category.name + ": "}</h1>
								{exercises
									.filter((exer) => exer.bodyPart === category.key)
									.map((exer) => renderExercise(exer))}
							</div>
						)}
					</div>
				))}
			{sortBy === sortTypes.equipments &&
				equipmentss.map((equip) => (
					<div>
						<h1>{equip.name + ": "}</h1>
						{exercises
							.filter((exer) => exer.equipments === equip.key)
							.map((exer) => renderExercise(exer))}
					</div>
				))} */}
		</div>
	);
}

export default App;
