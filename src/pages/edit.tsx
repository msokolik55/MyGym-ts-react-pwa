import React, { useState, useRef } from "react";
import { exercise } from "../data/interfaces";
import { getBodyPartName } from "../data/bodyParts";

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
			{"[" + getBodyPartName(currExercise.bodyPart).name + "] "}
			<i>{currExercise.name}</i>
			{currExercise.weights !== undefined && (
				<div>
					<input
						type="number"
						ref={inp1}
						value={currExercise.weights[0]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
						type="number"
						ref={inp2}
						value={currExercise.weights[1]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
						type="number"
						ref={inp3}
						value={currExercise.weights[2]}
						onChange={() => handleChange()}
						disabled
					/>
					<input
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
	return (
		<div>{exercises.map((exer) => EditWeights(exer, exercises, setExercises))}</div>
	);
};

export default EditPage;
