import React from "react";
import { history } from "../data/interfaces";
import { categories } from "../data/bodyParts";

import { Card, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

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

	return (
		<div className={classes.flexReverse}>
			{data !== undefined &&
				data.map((item) => (
					<Card className={classes.flexColumn}>
						<div className={classes.flexRow}>
							<IconButton
								onClick={() => setData(data.filter((it) => it !== item))}>
								<Delete />
							</IconButton>
							<p>
								{item.date} {categories[item.category].name}
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
																weig.place === drill.place
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
	);
};

export default HistoryPage;
