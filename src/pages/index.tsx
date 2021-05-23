import React, { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import { tables } from "../data/database";

import { bodyPart, exercise, history } from "../data/interfaces";
import { equipmentss, categories } from "../data/bodyParts";

type props = {
	exercises: exercise[];
	history: history[];
	setHistory: React.Dispatch<React.SetStateAction<history[]>>;
};

const MainPage = ({ exercises, history, setHistory }: props) => {
	const randNumber = (arr: any[]) => {
		return Math.floor(Math.random() * arr.length);
	};

	function renderHyperlink(link: string) {
		return (
			<>
				(
				<a href={link} target="_blank" rel="noreferrer">
					odkaz
				</a>
				)
			</>
		);
	}

	function renderExercise(exer: exercise) {
		return (
			<>
				<h4>
					{exer.name}
					{exer.link !== undefined && <> {renderHyperlink(exer.link)}</>}
				</h4>
				{exer.notes !== undefined && <p>{exer.notes}</p>}

				{exer.fullProgram === undefined && exer.weights !== undefined && (
					<p>Vahy: {exer.weights.join(" - ")}</p>
				)}

				{exer.fullProgram === undefined && exer.equipments !== undefined && (
					<p>
						Pomocky:{" "}
						{equipmentss
							.filter((equip) => equip.key === exer.equipments)
							.map((equip) => equip.name)}
					</p>
				)}

				{exer.fullProgram !== undefined && (
					<table
						style={{
							marginLeft: "auto",
							marginRight: "auto",
							borderSpacing: 10
						}}>
						{exer.fullProgram.map((item) => (
							<tr>
								<td>{item.name}</td>
								<td>{item.repetitions}</td>
							</tr>
						))}
					</table>
				)}
			</>
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

	const [training, setTraining] = useState<exercise[]>([]);
	const [category, setCategory] = useState<bodyPart | undefined>();

	useEffect(() => {
		get(tables.training).then((val) => {
			if (val === undefined) setTraining([]);
			else setTraining(val);
		});
		get(tables.actualCategory).then((val) => {
			if (val === undefined) setCategory(undefined);
			else setCategory(val);
		});
	}, []);
	useEffect(() => {
		set(tables.training, training);
	}, [training]);
	useEffect(() => {
		set(tables.actualCategory, category);
	}, [category]);

	const formatTwoDigits = (num: number) => {
		const str = num.toString();
		return str.length === 1 ? "0" + str : str;
	};

	const formatDate = () => {
		const date = new Date();
		let result =
			formatTwoDigits(date.getDate()) +
			"." +
			formatTwoDigits(date.getMonth() + 1) +
			"." +
			date.getFullYear().toString() +
			" " +
			formatTwoDigits(date.getHours()) +
			":" +
			formatTwoDigits(date.getMinutes());
		return result;
	};

	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<div className="App">
				<button onClick={() => generateCategory(setTraining)}>Vygeneruj</button>
				{category !== undefined && (
					<>
						{training.length > 0 && (
							<button
								onClick={() => {
									setHistory([
										...history,
										{
											// date: new Date(),
											date: formatDate(),
											category: category.key,
											exercises: training
										}
									]);
									alert("Pridane do historie");
								}}>
								Odtrenovane
							</button>
						)}
						<h2>{category.name}</h2>
					</>
				)}
				{training.map((exer, id) => (
					<div key={id}>{renderExercise(exer)}</div>
				))}
			</div>
		</div>
	);
};

export default MainPage;
