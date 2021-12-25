import React, { useEffect, useState } from "react";
import { get, set } from "idb-keyval";
// import axios from "axios";

const TestPage = () => {
	const [imagePreviews, setImagePreviews] = useState<[string, string, string]>([
		"",
		"",
		""
	]);

	const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
		if (e.target.files !== null) {
			e.target.files[0].arrayBuffer().then((val) => {
				imagePreviews[idx] = Buffer.from(val).toString("base64");
				setImagePreviews(imagePreviews);
			});
		}
	};

	const fileUploadedHandler = () => {
		set("file", imagePreviews);
	};

	useEffect(() => {
		get("file").then((val) => {
			if (val === undefined) setImagePreviews(["", "", ""]);
			else setImagePreviews(val);
		});
	}, []);

	return (
		<div>
			<button onClick={() => fileUploadedHandler()}>Upload</button>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ display: "flex", flexDirection: "row" }}>
					{imagePreviews.map((_, idx) => (
						<div style={{ flex: 1 }}>
							<input
								type="file"
								accept="image/*"
								onChange={(e) => fileSelectedHandler(e, idx)}
							/>
						</div>
					))}
				</div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					{imagePreviews.map((image) => (
						<div style={{ flex: 1 }}>
							<img
								alt="some text"
								src={"data:image/jpeg;base64," + image}
								width="100%"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TestPage;
