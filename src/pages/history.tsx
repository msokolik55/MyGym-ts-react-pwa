import React from "react";
import { history } from "../data/interfaces";
import { categories } from "../data/bodyParts";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

type props = {
	data: history[];
	setData: React.Dispatch<React.SetStateAction<history[]>>;
};

const HistoryPage = ({ data, setData }: props) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{data !== undefined &&
				data.map((item, id) => (
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<IconButton
								onClick={() => setData(data.filter((it) => it !== item))}>
								<Delete />
							</IconButton>
							<p>
								{item.date} {categories[item.category].name}
								{item.exercises[0].fullProgram !== undefined && (
									<> ({item.exercises[0].name})</>
								)}
							</p>
						</div>
						{item.exercises[0].fullProgram === undefined && (
							<ul style={{ marginTop: 0 }}>
								{item.exercises.map((drill) => (
									<li>
										{drill.name}
										<br />
										{drill.weights !== undefined && (
											<>({drill.weights.join(" - ")})</>
										)}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
		</div>
	);
};

export default HistoryPage;
