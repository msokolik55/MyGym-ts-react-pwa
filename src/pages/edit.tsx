import React, { useState, useRef } from "react";
import { exercise } from "../data/interfaces";
import { categories } from "../data/bodyParts";

import { Button, ListItem, ListItemText, ListItemProps } from "@material-ui/core";
import { ArrowUpward, Link } from "@material-ui/icons";

type props = {
	exercises: exercise[];
	setExercises: React.Dispatch<React.SetStateAction<exercise[]>>;
};

const EditValues = (
	exer: exercise,
	allExercises: exercise[],
	setAllExercises: React.Dispatch<React.SetStateAction<exercise[]>>
) => {
	const [currExercise, setCurrExercise] = useState(exer);

	const inp1 = useRef<HTMLInputElement>(null);
	const inp2 = useRef<HTMLInputElement>(null);
	const inp3 = useRef<HTMLInputElement>(null);
	const inp4 = useRef<HTMLInputElement>(null);
	const chbox = useRef<HTMLInputElement>(null);
	// const inpSeries = useRef<HTMLInputElement>(null);
	const buttEdit = useRef<HTMLButtonElement>(null);
	const buttSave = useRef<HTMLButtonElement>(null);

	//#region Changing via setState

	const changeEnabled = () => {
		setCurrExercise({
			...currExercise,
			enabled: !currExercise.enabled
		});
	};

	const changeWeights = () => {
		let val1 = inp1.current !== null ? Number(inp1.current.value) : Number(0);
		let val2 = inp2.current !== null ? Number(inp2.current.value) : Number(0);
		let val3 = inp3.current !== null ? Number(inp3.current.value) : Number(0);
		let val4 = inp4.current !== null ? Number(inp4.current.value) : Number(0);
		if (currExercise.weights !== undefined)
			if (inp1 !== null)
				setCurrExercise({
					...currExercise,
					weights: [val1, val2, val3, val4]
				});
	};

	//#endregion

	const handleSave = () => {
		setAllExercises(
			allExercises.map((ex) => {
				return ex === exer ? currExercise : ex;
			})
		);
	};

	const enableFields = (value: boolean) => {
		if (chbox.current !== null) chbox.current.disabled = !value;
		if (inp1.current !== null) inp1.current.disabled = !value;
		if (inp2.current !== null) inp2.current.disabled = !value;
		if (inp3.current !== null) inp3.current.disabled = !value;
		if (inp4.current !== null) inp4.current.disabled = !value;
	};

	return (
		<div style={{ marginBottom: "1em" }}>
			<div>
				<input
					type="checkbox"
					checked={currExercise.enabled}
					onChange={() => changeEnabled()}
					ref={chbox}
					disabled
				/>
				<i>{currExercise.name}</i>
			</div>
			{currExercise.weights !== undefined &&
				currExercise.fullProgram === undefined && (
					<>
						Vahy:{" "}
						<input
							style={{ width: "3em" }}
							type="number"
							value={currExercise.weights[0]}
							min="0"
							ref={inp1}
							onChange={() => changeWeights()}
							disabled
						/>
						<input
							style={{ width: "3em" }}
							type="number"
							min="0"
							ref={inp2}
							value={currExercise.weights[1]}
							onChange={() => changeWeights()}
							disabled
						/>
						<input
							style={{ width: "3em" }}
							type="number"
							min="0"
							ref={inp3}
							value={currExercise.weights[2]}
							onChange={() => changeWeights()}
							disabled
						/>
						<input
							style={{ width: "3em" }}
							type="number"
							min="0"
							ref={inp4}
							value={currExercise.weights[3]}
							onChange={() => changeWeights()}
							disabled
						/>
						<Button
							ref={buttEdit}
							onClick={() => {
								if (buttSave.current)
									buttSave.current.style.display = "inline";
								if (buttEdit.current)
									buttEdit.current.style.display = "none";
								enableFields(true);
							}}>
							Zmen
						</Button>
						<Button
							ref={buttSave}
							style={{ display: "none" }}
							onClick={() => {
								enableFields(false);
								handleSave();
								if (buttEdit.current)
									buttEdit.current.style.display = "inline";
								if (buttSave.current)
									buttSave.current.style.display = "none";
							}}>
							Uloz
						</Button>
					</>
				)}
		</div>
	);
};

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
	return <ListItem button component="a" {...props} />;
}

const EditPage = ({ exercises, setExercises }: props) => {
	// const [selectedCategory, setSelectedCategory] = useState(categories[0]);

	return (
		<div style={{ display: "flex" }}>
			{/* <select
				onChange={(e) =>
					setSelectedCategory(
						categories.filter(
							(categ) => categ.key === Number(e.target.value)
						)[0]
					)
				}>
				{categories.map((cat) => (
					<option value={cat.key}>{cat.name}</option>
				))}
			</select> */}

			<div style={{ position: "fixed", top: 10 }}>
				<div id="root"></div>
				{categories.map((cat) => (
					<ListItemLink href={`#${cat.key.toString()}`}>
						<ListItemText primary={cat.name} />
					</ListItemLink>
					// <a href={`#${cat.key.toString()}`}>
					// 	{cat.name}
					// 	<br />
					// </a>
				))}
			</div>

			<div style={{ marginLeft: 100 }}>
				{categories.map((cat, idx) => (
					<div>
						<h3>
							{cat.name}
							<a
								id={cat.key.toString()}
								href={`#${cat.key.toString()}`}
								style={{ visibility: "hidden" }}>
								<Link />
							</a>
						</h3>
						{exercises
							.filter((exer) => exer.bodyPart === cat.key)
							.map((exer) => EditValues(exer, exercises, setExercises))}
					</div>
				))}
			</div>

			<div
				style={{
					position: "fixed",
					bottom: 66,
					right: 10,
					backgroundColor: "orange",
					borderRadius: 10
				}}>
				<a href="#root" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
					<ArrowUpward />
				</a>
			</div>
		</div>
	);
};

export default EditPage;
