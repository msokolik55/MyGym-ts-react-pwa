import React, { useState, useEffect } from "react";
import { get, set } from "idb-keyval";

import { bodyPart, exercise } from "../data/interfaces";
import { equipmentss } from "../data/bodyParts";

import { categories } from "../data/bodyParts";

// enum sortTypes {
// 	bodyPart,
// 	equipments
// }

type props = {
	exercises: exercise[];
};

const MainPage = ({ exercises }: props) => {
	const randNumber = (arr: any[]) => {
		return Math.floor(Math.random() * arr.length);
	};

	function renderExercise(exer: exercise) {
		return (
			<div>
				<h4>{exer.name}</h4>
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
		setCategory(categories[randCateg]);
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
	const [category, setCategory] = useState<bodyPart | undefined>();

	useEffect(() => {
		get("training").then((val) => {
			if (val === undefined) setTraining([]);
			else setTraining(val);
		});
		get("category").then((val) => {
			if (val === undefined) setCategory(categories[0]);
			else setCategory(val);
		});
	}, []);
	useEffect(() => {
		set("training", training);
	}, [training]);
	useEffect(() => {
		set("category", category);
	}, [category]);

	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			{/* <button onClick={() => setSortBy(sortTypes.bodyPart)}>Partie</button>
			<button onClick={() => setSortBy(sortTypes.equipments)}>Naradie</button> */}

			<div style={{ flex: 1 }}>
				<ul style={{ textAlign: "left" }}>
					Kombinacie:
					<li>ramena + biceps + triceps</li>
					<li>hrudnik + chrbat</li>
					<li>nohy</li>
				</ul>
			</div>

			<div className="App" style={{ flex: 5 }}>
				<button onClick={() => generateCategory(setTraining)}>Vygeneruj</button>
				{category !== undefined && <h2>{category.name}</h2>}
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
		</div>
	);
};

export default MainPage;
