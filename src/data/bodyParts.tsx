import { bodyPart, equipment } from "./interfaces";
import { bodyParts, equipments } from "./enums";

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
		count: 1
	},
	{
		key: bodyParts.legs,
		name: "Nohy",
		count: 3
	},
	{
		key: bodyParts.core,
		name: "Core",
		count: 1
	}
];

export const equipmentss: equipment[] = [
	{
		key: equipments.none,
		name: "Ziadne"
	},
	{
		key: equipments.dumbbells,
		name: "Jednorucky"
	},
	{
		key: equipments.double,
		name: "Obojrucka"
	},
	{
		key: equipments.machine,
		name: "Stroj"
	}
];
