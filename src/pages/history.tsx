import React from "react";
import { history } from "../data/interfaces";
import { categories } from "../data/bodyParts";

type props = {
	data: history[];
	setData: React.Dispatch<React.SetStateAction<history[]>>;
};

const HistoryPage = ({ data, setData }: props) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{data !== undefined &&
				data.map((item, id) => (
					<p>
						<button onClick={() => setData(data.filter((it) => it !== item))}>
							Odstran
						</button>
						{item.date} {categories[item.category].name}
					</p>
				))}
		</div>
	);
};

export default HistoryPage;
