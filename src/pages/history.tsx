import React, { useState } from "react";
import { bodyPart, history } from "../data/interfaces";
import { categories } from "../data/bodyParts";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import {
	Card,
	Divider,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Select
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import skLocale from "date-fns/locale/sk";

type props = {
	data: history[];
	setData: React.Dispatch<React.SetStateAction<history[]>>;
};

const useStyles = makeStyles({
	flexRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		margin: "1em 2em 0 2em"
	},
	flexReverse: {
		display: "flex",
		flexDirection: "column-reverse"
	}
});

const HistoryPage = ({ data, setData }: props) => {
	const classes = useStyles();

	const [selectedPart, setSelectedPart] = useState<number | undefined>(undefined);
	const getTrainingsCount = (cat: bodyPart | undefined) => {
		return data
			.filter((item) => cat === undefined || item.category === cat.key)
			.filter((item) => betweenDates(item)).length;
	};

	const betweenDates = (item: history) => {
		return (
			(dateFrom === null || new Date(item.date) >= dateFrom) &&
			(dateTo === null || new Date(item.date) <= dateTo)
		);
	};

	const [dateFrom, setDateFrom] = useState<Date | null>(null);
	const [dateTo, setDateTo] = useState<Date | null>(null);

	const formatTwoDigits = (num: number) => {
		const str = num.toString();
		return str.length === 1 ? "0" + str : str;
	};

	const formatDate = (date: Date) => {
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

	const resetTime = (date: Date, begin: boolean) => {
		date.setHours(begin ? 0 : 23);
		date.setMinutes(begin ? 0 : 59);
		date.setSeconds(begin ? 0 : 59);
		date.setMilliseconds(begin ? 0 : 999);
		return date;
	};

	return (
		<>
			<Grid className={classes.flexRow}>
				<FormControl style={{ marginLeft: "2em", minWidth: "5em" }}>
					<InputLabel>Oblasť</InputLabel>
					<Select
						value={selectedPart}
						onChange={(event) => {
							setSelectedPart(event.target.value as number);
						}}>
						<MenuItem key="all" value={undefined}>
							<em>Vsetky</em>
						</MenuItem>
						{categories.map((cat) => (
							<MenuItem
								key={cat.key}
								value={cat.key}
								disabled={
									data !== undefined && getTrainingsCount(cat) === 0
								}>
								{cat.name} ({data !== undefined && getTrainingsCount(cat)}
								)
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<LocalizationProvider dateAdapter={AdapterDateFns} locale={skLocale}>
					<div style={{ maxWidth: "9em" }}>
						<DatePicker
							label="Od"
							value={dateFrom}
							onChange={(newValue) => {
								if (newValue !== null)
									newValue = resetTime(newValue, true);

								if (
									newValue === null ||
									dateTo === null ||
									(dateTo !== null && newValue <= dateTo)
								)
									setDateFrom(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</div>
					{" - "}
					<div style={{ maxWidth: "9em" }}>
						<DatePicker
							label="Do"
							value={dateTo}
							onChange={(newValue) => {
								if (newValue !== null)
									newValue = resetTime(newValue, false);

								if (
									newValue === null ||
									dateFrom === null ||
									(dateFrom !== null && newValue >= dateFrom)
								)
									setDateTo(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</div>
				</LocalizationProvider>
			</Grid>

			<Divider />
			<div className={classes.flexReverse}>
				{data !== undefined &&
					data
						.filter(
							(item) =>
								selectedPart === undefined ||
								item.category === selectedPart
						)
						.filter((item) => betweenDates(item))
						.map((item) => (
							<Card className={classes.flexColumn}>
								<div className={classes.flexRow}>
									<IconButton
										onClick={() =>
											setData(data.filter((it) => it !== item))
										}>
										<Delete />
									</IconButton>
									<p>
										{formatDate(new Date(item.date))}{" "}
										{categories[item.category].name}
										{item.exercises[0].fullProgram !== undefined && (
											<>
												{" "}
												({item.exercises[0].name},{" serie: "}
												{item.exercises[0].fullProgram.series})
											</>
										)}
									</p>
								</div>
								{item.exercises[0].fullProgram === undefined && (
									<ul style={{ marginTop: 0 }}>
										{item.exercises.map((drill) => (
											<li>
												{drill.name}
												<br />
												{drill.weights !== undefined &&
													drill.place !== undefined && (
														<>
															{drill.weights
																.filter(
																	(weig) =>
																		weig.place ===
																		drill.place
																)[0]
																.values.join(" - ")}
														</>
													)}
											</li>
										))}
									</ul>
								)}
							</Card>
						))}
			</div>
		</>
	);
};

export default HistoryPage;
