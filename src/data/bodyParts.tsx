import { bodyPart } from "./interfaces";
import { bodyParts } from "./enums";

export const getBodyPartName = (key: bodyParts) => {
	return categories.filter((categ) => categ.key === key)[0];
};

export const categories: bodyPart[] = [
	{
		key: bodyParts.biceps,
		name: "Biceps",
		count: 2
	},
	{
		key: bodyParts.triceps,
		name: "Triceps",
		count: 3
	},
	{
		key: bodyParts.shoulders,
		name: "Ramena",
		count: 3
	},
	{
		key: bodyParts.chest,
		name: "Hrudnik",
		count: 3
	},
	{
		key: bodyParts.back,
		name: "Chrbat",
		count: 3
	},
	{
		key: bodyParts.calves,
		name: "Lytka",
		count: 3
	}
];
