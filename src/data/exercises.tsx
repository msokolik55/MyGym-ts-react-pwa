import { exercise } from "./interfaces";
import { bodyParts, equipments } from "./enums";

export const exercisesDemo: exercise[] = [
	//#region Biceps
	{
		id: 1,
		name: "Obojruč",
		bodyPart: bodyParts.biceps,
		weights: [3.4, 4.6, 5.7, 6.9],
		equipments: equipments.double
	},
	{
		id: 2,
		name: "Jednoruč obidve naraz",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 3,
		name: "Jednoruč jedna ostáva hore",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 4,
		name: "Nižší sklon na lavičke",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 5,
		name: "Kladivo k prsiam",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 6,
		name: "Koncentrovaný bicepsový zdvih",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Triceps
	{
		id: 7,
		name: "Kľuky na bradlách",
		bodyPart: bodyParts.triceps
	},
	{
		id: 8,
		name: "Činka za chrbtom",
		bodyPart: bodyParts.triceps,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		id: 9,
		name: "Tricepsový bench",
		bodyPart: bodyParts.triceps,
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		id: 10,
		name: "Zospodu nad seba",
		bodyPart: bodyParts.triceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		id: 11,
		name: "Sťahovanie kladky na úzko v miernom predklone",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		id: 12,
		name: "Sťahovanie kladky s V držiakom",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 3],
		equipments: equipments.machine
	},
	{
		id: 13,
		name: "Francúzske tlaky s jednoruč",
		bodyPart: bodyParts.triceps,
		weights: [1.1, 2.3, 3.4, 3.4],
		equipments: equipments.dumbbells
	},
	{
		id: 14,
		name: "Predpažovanie spoza hlavy s lanovým",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		id: 15,
		name: "Tricepsové zhyby na lavičke",
		bodyPart: bodyParts.triceps
	},
	//#endregion

	//#region Ramena
	{
		id: 16,
		name: "Predpažovanie s vytočením",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 17,
		name: "Predpažovanie priame",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 18,
		name: "Tlaky obojručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [3.4, 5.7, 8, 10.3],
		equipments: equipments.double
	},
	{
		id: 19,
		name: "Príťahy obojručky k brade",
		bodyPart: bodyParts.shoulders,
		weights: [3.4, 5.7, 8, 10.3],
		equipments: equipments.double
	},
	{
		id: 20,
		name: "Rozpažovanie jednoručky v predklone",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 21,
		name: "Tlaky jednoruckou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		id: 22,
		name: "Tlaky jednoručkou nad hlavu s vytáčaním",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		id: 23,
		name: "Predpažovanie s obojručkou",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	{
		id: 24,
		name: "Krčenie ramien",
		bodyPart: bodyParts.shoulders,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Hrudnik
	{
		id: 25,
		name: "Bench press jednoručky",
		bodyPart: bodyParts.chest,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.double
	},
	{
		id: 26,
		name: "Bench press jednoručky - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 27,
		name: "Stroj - výtlaky pred seba",
		bodyPart: bodyParts.chest,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		id: 28,
		name: "Stroj - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	//#endregion

	//#region Chrbat
	{
		id: 29,
		name: "Mŕtvy ťah",
		bodyPart: bodyParts.back,
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		id: 30,
		name: "Sťahovanie hornej kladky podhmatom",
		bodyPart: bodyParts.back,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		id: 31,
		name: "S V držiakom",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		id: 32,
		name: "Príťahy nadhmatom v predklone",
		bodyPart: bodyParts.back,
		weights: [4.5, 5.6, 6.8, 7.9],
		equipments: equipments.double
	},
	{
		id: 33,
		name: "Veslovanie",
		bodyPart: bodyParts.back,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		id: 34,
		name: "Krčenie ramien",
		bodyPart: bodyParts.back,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		id: 35,
		name: "Hyperextenzie",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	//#endregion

	//#region Lytka
	{
		id: 36,
		name: "BarbarianBody",
		bodyPart: bodyParts.calves,
		fullProgram: [
			{
				name: "uni-lateral calf raises",
				repetitions: 15
			},
			{
				name: "dual inner raises",
				repetitions: 15
			},
			{
				name: "dual neutral raises",
				repetitions: 15
			},
			{
				name: "dual outer raises",
				repetitions: 15
			},
			{
				name: "dual inner raises",
				repetitions: 15
			},
			{
				name: "dual neutral raises",
				repetitions: 15
			},
			{
				name: "dual outer raises",
				repetitions: 15
			},
			{
				name: "uni-lateral bunny hops",
				repetitions: 20
			},
			{
				name: "speed calf raises",
				repetitions: 30
			},
			{
				name: "dual bunny hops",
				repetitions: 30
			}
		],
		link: "https://www.youtube.com/watch?v=uVu9vToACiQ&ab_channel=BarbarianBody"
	},
	//#endregion

	//#region Nohy
	{
		id: 37,
		name: "Drepy",
		bodyPart: bodyParts.legs,
		weights: [9.1, 11.4, 13.7, 16],
		equipments: equipments.double
	},
	{
		id: 38,
		name: "Rumunsky mrtvy tah s vystretymi nohami",
		bodyPart: bodyParts.legs,
		weights: [9.1, 11.4, 13.7, 16],
		equipments: equipments.dumbbells
	},
	{
		id: 39,
		name: "Vypony na lytka",
		bodyPart: bodyParts.legs,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		id: 40,
		name: "Vypady",
		bodyPart: bodyParts.legs,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Core
	{
		id: 41,
		name: "FitHero",
		bodyPart: bodyParts.core,
		fullProgram: [
			{
				name: "Príťahy kolien v ľahu s dvíhaním panvy",
				repetitions: 10
			},
			{
				name: "Kyvadlo v ľahu s pokrčenými kolenami",
				repetitions: 10
			},
			{
				name: "Obojstranné skracovačky s vytáčaním kolien a lakťov k sebe",
				repetitions: 10
			},
			{
				name: "Sklapovačky v sede do strán",
				repetitions: 10
			},
			{
				name: "Príťahy kolien v sede na striedačku",
				repetitions: 10
			},
			{
				name: "Plank s posunom vpred a vzad",
				repetitions: 10
			},
			{
				name: "Zdvíhanie pokrčených nôh v ľahu na bruchu",
				repetitions: 10
			},
			{
				name: "Zdvíhanie vystretých nôh v ľahu",
				repetitions: 10
			}
		],
		link: "https://www.youtube.com/watch?v=uDTfY7OCoDM&list=PLw5yG_YdlsK-hUnxaEcJL9quKuduBKwvM&index=1&ab_channel=FitHeroFitHero"
	},
	{
		id: 42,
		name: "Clutch Life",
		bodyPart: bodyParts.core,
		fullProgram: [
			{
				name: "Russian twist",
				repetitions: 20
			},
			{
				name: "Plank",
				repetitions: 20
			},
			{
				name: "Hip raise",
				repetitions: 20
			},
			{
				name: "Alternating heel touch",
				repetitions: 20
			},
			{
				name: "Seated scissor kick",
				repetitions: 20
			},
			{
				name: "Heel touch",
				repetitions: 20
			},
			{
				name: "Plank step-up",
				repetitions: 20
			},
			{
				name: "Plank walk-out",
				repetitions: 20
			},
			{
				name: "Cross crunch",
				repetitions: 20
			},
			{
				name: "Bicycle crunch",
				repetitions: 20
			}
		],
		notes: "2 serie, po 20s",
		link: "https://www.youtube.com/watch?v=dJlFmxiL11s&ab_channel=Bodybuilding.comBodybuilding.comOveren%C3%A9"
	},
	{
		id: 43,
		name: "Trening YouTube",
		bodyPart: bodyParts.core
	}
	//#endregion
];
