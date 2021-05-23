import React, { useState, useRef } from "react";
import { exercise } from "../data/interfaces";
import { categories } from "../data/bodyParts";

import { ArrowUpward, Link } from "@material-ui/icons";

type props = {
	exercises: exercise[];
	setExercises: React.Dispatch<React.SetStateAction<exercise[]>>;
};

const EditWeights = (
	exer: exercise,
	allExercises: exercise[],
	setAllExercises: React.Dispatch<React.SetStateAction<exercise[]>>
) => {
	const [currExercise, setCurrExercise] = useState(exer);

	const inp1 = useRef<HTMLInputElement>(null);
	const inp2 = useRef<HTMLInputElement>(null);
	const inp3 = useRef<HTMLInputElement>(null);
	const inp4 = useRef<HTMLInputElement>(null);
	const buttEdit = useRef<HTMLButtonElement>(null);
	const buttSave = useRef<HTMLButtonElement>(null);

	const handleChange = () => {
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

	const getWeights = () => {
		let val1 = inp1.current !== null ? Number(inp1.current.value) : Number(0);
		let val2 = inp2.current !== null ? Number(inp2.current.value) : Number(0);
		let val3 = inp3.current !== null ? Number(inp3.current.value) : Number(0);
		let val4 = inp4.current !== null ? Number(inp4.current.value) : Number(0);
		return [val1, val2, val3, val4];
	};

	const handleSave = () => {
		setAllExercises(
			allExercises.map((ex) => {
				if (ex === exer) {
					return { ...exer, weights: getWeights() };
				}
				return ex;
			})
		);
	};

	const enableFields = (value: boolean) => {
		if (inp1.current !== null) inp1.current.disabled = !value;
		if (inp2.current !== null) inp2.current.disabled = !value;
		if (inp3.current !== null) inp3.current.disabled = !value;
		if (inp4.current !== null) inp4.current.disabled = !value;
	};

	return (
		<div style={{ marginBottom: "1em" }}>
			<i>{currExercise.name}</i>
			{currExercise.weights !== undefined && (
				<div>
					<input
						style={{ width: "3em" }}
						type="number"
						ref={inp1}
						value={currExercise.weights[0]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
						style={{ width: "3em" }}
						type="number"
						ref={inp2}
						value={currExercise.weights[1]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
						style={{ width: "3em" }}
						type="number"
						ref={inp3}
						value={currExercise.weights[2]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
						style={{ width: "3em" }}
						type="number"
						ref={inp4}
						value={currExercise.weights[3]}
						onChange={() => handleChange()}
						disabled
					/>
					<button
						ref={buttEdit}
						onClick={() => {
							if (buttSave.current)
								buttSave.current.style.display = "inline";
							if (buttEdit.current) buttEdit.current.style.display = "none";
							enableFields(true);
						}}>
						Zmen
					</button>
					<button
						ref={buttSave}
						style={{ display: "none" }}
						onClick={() => {
							enableFields(false);
							handleSave();
							if (buttEdit.current)
								buttEdit.current.style.display = "inline";
							if (buttSave.current) buttSave.current.style.display = "none";
						}}>
						Uloz
					</button>
				</div>
			)}
		</div>
	);
};

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

			<div style={{ margin: "1em" }}>
				<a id="root" href="/#">
					{categories.map((cat) => (
						<a href={`#${cat.key.toString()}`}>
							{cat.name}
							<br />
						</a>
					))}
				</a>
			</div>

			<div>
				{categories.map((cat) => (
					<div>
						<h3>
							<a
								id={cat.key.toString()}
								href={`#${cat.key.toString()}`}
								style={{ color: "blue" }}>
								<Link />
							</a>
							{cat.name} (
							<a href="#root" style={{ color: "blue" }}>
								<ArrowUpward />
							</a>
							)
						</h3>
						{exercises
							.filter((exer) => exer.bodyPart === cat.key)
							.map((exer) => EditWeights(exer, exercises, setExercises))}
					</div>
				))}
			</div>
		</div>
	);
};

export default EditPage;
