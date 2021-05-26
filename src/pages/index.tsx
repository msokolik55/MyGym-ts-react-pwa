import React, { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import { dbKeys } from "../data/database";

import { bodyPart, exercise, history } from "../data/interfaces";
import { equipmentss, categories } from "../data/bodyParts";

import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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

	function renderExercise(exerID: number) {
		const exer = exercises.filter((ex) => ex.id === exerID)[0];

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

	const generateCategory = (setter: React.Dispatch<React.SetStateAction<number[]>>) => {
		const randCateg = randNumber(categories);
		setCategory(categories[randCateg]);
		generateExercises(categories[randCateg], setter);
	};

	const generateExercises = (
		category: bodyPart,
		setter: React.Dispatch<React.SetStateAction<number[]>>
	) => {
		let count = 0;
		let used: number[] = [];
		let training: number[] = [];
		let choice = exercises.filter((exer) => exer.bodyPart === category.key);

		while (count < category.count && count < choice.length) {
			let i = randNumber(choice);
			if (!used.includes(i)) {
				used.push(i);
				training.push(choice[i].id);
				count++;
			}
		}

		setter(training);
	};

	const [training, setTraining] = useState<number[]>([]);
	const [category, setCategory] = useState<bodyPart | undefined>();

	useEffect(() => {
		get(dbKeys.training).then((val) => {
			if (val === undefined) setTraining([]);
			else setTraining(val);
		});
		get(dbKeys.actualCategory).then((val) => {
			if (val === undefined) setCategory(undefined);
			else setCategory(val);
		});
	}, []);
	useEffect(() => {
		set(dbKeys.training, training);
	}, [training]);
	useEffect(() => {
		set(dbKeys.actualCategory, category);
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

	const [open, setOpen] = useState(false);

	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			<div className="App">
				<Button variant="outlined" onClick={() => generateCategory(setTraining)}>
					Vygeneruj
				</Button>
				{category !== undefined && (
					<>
						{training.length > 0 && (
							<>
								<Button
									variant="outlined"
									onClick={() => {
										setOpen(true);
										setHistory([
											...history,
											{
												// date: new Date(),
												date: formatDate(),
												category: category.key,
												exercises: training.map(
													(exerID) =>
														exercises.filter(
															(exer) => exer.id === exerID
														)[0]
												)
											}
										]);
									}}>
									Odtrenovane
								</Button>
								<Snackbar
									open={open}
									autoHideDuration={2000}
									anchorOrigin={{
										horizontal: "center",
										vertical: "bottom"
									}}
									onClose={() => setOpen(false)}>
									<Alert severity="success">Pridane do historie</Alert>
								</Snackbar>
							</>
						)}
						<h2>{category.name}</h2>
					</>
				)}
				{training.map((exerID, id) => (
					<div key={id}>{renderExercise(exerID)}</div>
				))}
			</div>
		</div>
	);
};

export default MainPage;
