import React, { useState, useRef, RefObject } from "react";
import { exercise } from "../data/interfaces";
import { categories } from "../data/bodyParts";

import {
	Grid,
	IconButton,
	ListItem,
	ListItemText,
	ListItemProps,
	SwipeableDrawer
} from "@material-ui/core";
import { ArrowUpward, Link, Edit, Save, Menu } from "@material-ui/icons";

//#region Type

type props = {
	exercises: exercise[];
	setExercises: React.Dispatch<React.SetStateAction<exercise[]>>;
};

//#endregion

//#region Components

const InputWeight = (
	value: number,
	refInp: RefObject<HTMLInputElement>,
	saving: () => void
) => {
	return (
		<input
			style={{ width: "3em" }}
			type="number"
			value={value}
			min="0"
			ref={refInp}
			onChange={saving}
			disabled
		/>
	);
};

const EditValues = (
	exer: exercise,
	allExercises: exercise[],
	setAllExercises: React.Dispatch<React.SetStateAction<exercise[]>>
) => {
	const [currExercise, setCurrExercise] = useState(exer);

	//#region Refs

	const chbox = useRef<HTMLInputElement>(null);

	const inp1 = useRef<HTMLInputElement>(null);
	const inp2 = useRef<HTMLInputElement>(null);
	const inp3 = useRef<HTMLInputElement>(null);
	const inp4 = useRef<HTMLInputElement>(null);
	const inputs = [inp1, inp2, inp3, inp4];

	// const inpSeries = useRef<HTMLInputElement>(null);
	const buttEdit = useRef<HTMLButtonElement>(null);
	const buttSave = useRef<HTMLButtonElement>(null);

	//#endregion

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

	const switchButtons = (
		buttToDisplay: RefObject<HTMLButtonElement>,
		buttToHide: RefObject<HTMLButtonElement>
	) => {
		if (buttToDisplay.current) buttToDisplay.current.style.display = "inline";
		if (buttToHide.current) buttToHide.current.style.display = "none";
	};

	return (
		<Grid container alignItems="center" style={{ marginBottom: "1em" }}>
			<Grid item>
				<IconButton
					ref={buttEdit}
					onClick={() => {
						enableFields(true);
						switchButtons(buttSave, buttEdit);
					}}>
					<Edit />
				</IconButton>
				<IconButton
					ref={buttSave}
					style={{ display: "none" }}
					onClick={() => {
						enableFields(false);
						handleSave();
						switchButtons(buttEdit, buttSave);
					}}>
					<Save />
				</IconButton>
			</Grid>

			<Grid item>
				<Grid container direction="column">
					<Grid style={{ marginBottom: ".4em" }}>
						<input
							type="checkbox"
							checked={currExercise.enabled}
							onChange={() => changeEnabled()}
							ref={chbox}
							disabled
						/>
						<i>{currExercise.name}</i>
					</Grid>

					{currExercise.weights !== undefined && (
						<Grid>
							Vahy:{" "}
							{inputs.map((inp, idx) => {
								if (currExercise.weights !== undefined)
									return InputWeight(
										currExercise.weights[idx],
										inp,
										() => changeWeights()
									);
								return undefined;
							})}
						</Grid>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
};

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
	return <ListItem button component="a" {...props} />;
}

//#endregion

const EditPage = ({ exercises, setExercises }: props) => {
	// const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	const [drawer, setDrawer] = useState(false);

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

			<SwipeableDrawer
				anchor="right"
				open={drawer}
				onOpen={() => setDrawer(true)}
				onClose={() => setDrawer(false)}>
				{categories.map((cat, idx) => (
					<ListItemLink key={"category-" + idx} href={`#${cat.key.toString()}`}>
						<ListItemText primary={cat.name} />
					</ListItemLink>
				))}
			</SwipeableDrawer>

			<div style={{ marginLeft: "1em" }}>
				{categories.map((cat) => (
					<>
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
					</>
				))}
			</div>

			<IconButton
				style={{
					position: "fixed",
					top: 0,
					right: 0
				}}
				onClick={() => setDrawer(true)}>
				<Menu />
			</IconButton>
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
