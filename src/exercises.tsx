import { exercise } from "./interfaces";
import { bodyParts, equipments } from "./enums";

export const exercisesDemo: exercise[] = [
	//#region Biceps
	{
		name: "Obojruč",
		bodyPart: bodyParts.biceps,
		weights: [3.4, 4.6, 5.7, 6.9],
		equipments: equipments.double
	},
	{
		name: "Jednoruč obidve naraz",
		bodyPart: bodyParts.biceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Jednoruč jedna ostáva hore",
		bodyPart: bodyParts.biceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Nižší sklon na lavičke",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		name: "Kladivo k prsiam",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		name: "Koncentrovaný bicepsový zdvih",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Triceps
	{
		name: "Kľuky na bradlách",
		bodyPart: bodyParts.triceps
	},
	{
		name: "Činka za chrbtom",
		bodyPart: bodyParts.triceps,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		name: "Tricepsový bench",
		bodyPart: bodyParts.triceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	{
		name: "Zospodu nad seba",
		bodyPart: bodyParts.triceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		name: "Sťahovanie kladky na úzko v miernom predklone",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		name: "Sťahovanie kladky s V držiakom",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		name: "Francúzske tlaky s jednoruč",
		bodyPart: bodyParts.triceps,
		weights: [1.1, 2.3, 3.4, 3.4],
		equipments: equipments.dumbbells
	},
	{
		name: "Predpažovanie spoza hlavy s lanovým",
		bodyPart: bodyParts.triceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		name: "Tricepsové zhyby na lavičke",
		bodyPart: bodyParts.triceps
	},
	//#endregion

	//#region Shoulders
	{
		name: "Predpažovanie s vytočením",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		name: "Predpažovanie priame",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		name: "Tlaky obojručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [3.4, 5.7, 8.0, 10.3],
		equipments: equipments.double
	},
	{
		name: "Príťahy obojručky k brade",
		bodyPart: bodyParts.shoulders,
		weights: [3.4, 5.7, 8.0, 10.3],
		equipments: equipments.double
	},
	{
		name: "Rozpažovanie jednoručky v predklone",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Tlaky jednoruckou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Tlaky jednoručkou nad hlavu s vytáčaním",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Predpažovanie s obojručkou",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	{
		name: "Krčenie ramien",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Chest
	{
		name: "Bench press jednoručky",
		bodyPart: bodyParts.chest,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.double
	},
	{
		name: "Bench press jednoručky - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		name: "Stroj - výtlaky pred seba",
		bodyPart: bodyParts.chest,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		name: "Stroj - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	//#endregion

	//#region Back
	{
		name: "Mŕtvy ťah",
		bodyPart: bodyParts.back,
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		name: "Sťahovanie hornej kladky podhmatom",
		bodyPart: bodyParts.back,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		name: "S V držiakom",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		name: "Príťahy nadhmatom v predklone",
		bodyPart: bodyParts.back,
		weights: [4.5, 5.6, 6.8, 7.9],
		equipments: equipments.double
	},
	{
		name: "Veslovanie",
		bodyPart: bodyParts.back,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		name: "Krčenie ramien",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Hyperextenzie",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	}
	//#endregion

	//#region Calves
	//#endregion
];
