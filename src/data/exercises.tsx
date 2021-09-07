import { exercise } from "./interfaces";
import { bodyParts, equipments } from "./enums";

export const exercisesDemo: exercise[] = [
	//#region Biceps
	{
		id: 1,
		enabled: true,
		name: "Obojruč",
		bodyPart: bodyParts.biceps,
		weights: [3.4, 5.7, 6.9, 9.3],
		equipments: equipments.double
	},
	{
		id: 2,
		enabled: true,
		name: "Jednoruč obidve naraz",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 3,
		enabled: true,
		name: "Jednoruč jedna ostáva hore",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 4,
		enabled: true,
		name: "Nižší sklon na lavičke",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 5,
		enabled: true,
		name: "Kladivo k prsiam",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 6,
		enabled: true,
		name: "Koncentrovaný bicepsový zdvih",
		bodyPart: bodyParts.biceps,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Triceps
	{
		id: 7,
		enabled: true,
		name: "Kľuky na bradlách",
		bodyPart: bodyParts.triceps
	},
	{
		id: 8,
		enabled: true,
		name: "Činka za chrbtom",
		bodyPart: bodyParts.triceps,
		weights: [3.4, 4.6, 5.7, 6.9],
		equipments: equipments.dumbbells
	},
	{
		id: 9,
		enabled: true,
		name: "Tricepsový bench",
		bodyPart: bodyParts.triceps,
		weights: [9.1, 11.4, 13.7, 16],
		equipments: equipments.double
	},
	{
		id: 10,
		enabled: true,
		name: "Zospodu nad seba",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 2, 2],
		equipments: equipments.machine
	},
	{
		id: 11,
		enabled: true,
		name: "Sťahovanie kladky na úzko v miernom predklone",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		id: 12,
		enabled: true,
		name: "Sťahovanie kladky s V držiakom",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 3],
		equipments: equipments.machine
	},
	{
		id: 13,
		enabled: true,
		name: "Francúzske tlaky s jednoruč",
		bodyPart: bodyParts.triceps,
		weights: [1.1, 2.3, 3.4, 3.4],
		equipments: equipments.dumbbells
	},
	{
		id: 14,
		enabled: true,
		name: "Predpažovanie spoza hlavy s lanovým",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 3],
		equipments: equipments.machine
	},
	{
		id: 15,
		enabled: true,
		name: "Tricepsové zhyby na lavičke",
		bodyPart: bodyParts.triceps
	},
	//#endregion

	//#region Ramena
	{
		id: 16,
		enabled: true,
		name: "Predpažovanie s vytočením",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 17,
		enabled: true,
		name: "Predpažovanie priame",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 18,
		enabled: true,
		name: "Tlaky obojručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		id: 19,
		enabled: true,
		name: "Príťahy obojručky k brade",
		bodyPart: bodyParts.shoulders,
		weights: [5.7, 8, 10.3, 12.6],
		equipments: equipments.double
	},
	{
		id: 20,
		enabled: true,
		name: "Rozpažovanie jednoručky v predklone",
		bodyPart: bodyParts.shoulders,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 21,
		enabled: true,
		name: "Tlaky jednoručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		id: 22,
		enabled: true,
		name: "Tlaky jednoručkou nad hlavu s vytáčaním",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		id: 23,
		enabled: true,
		name: "Predpažovanie s obojručkou",
		bodyPart: bodyParts.shoulders,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	{
		id: 24,
		enabled: true,
		name: "Krčenie ramien",
		bodyPart: bodyParts.shoulders,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Hrudnik
	{
		id: 25,
		enabled: true,
		name: "Bench press jednoručky",
		bodyPart: bodyParts.chest,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.double
	},
	{
		id: 26,
		enabled: true,
		name: "Bench press jednoručky - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	{
		id: 27,
		enabled: true,
		name: "Stroj - výtlaky pred seba",
		bodyPart: bodyParts.chest,
		weights: [4, 5, 6, 7],
		equipments: equipments.machine
	},
	{
		id: 28,
		enabled: true,
		name: "Stroj - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	//#endregion

	//#region Chrbat
	{
		id: 29,
		enabled: true,
		name: "Mŕtvy ťah",
		bodyPart: bodyParts.back,
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		id: 30,
		enabled: true,
		name: "Sťahovanie hornej kladky podhmatom",
		bodyPart: bodyParts.back,
		weights: [2, 3, 4, 5],
		equipments: equipments.machine
	},
	{
		id: 31,
		enabled: true,
		name: "S V držiakom",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		id: 32,
		enabled: true,
		name: "Príťahy nadhmatom v predklone",
		bodyPart: bodyParts.back,
		weights: [4.5, 5.6, 6.8, 7.9],
		equipments: equipments.double
	},
	{
		id: 33,
		enabled: true,
		name: "Veslovanie",
		bodyPart: bodyParts.back,
		weights: [3, 4, 5, 6],
		equipments: equipments.machine
	},
	{
		id: 34,
		enabled: true,
		name: "Krčenie ramien",
		bodyPart: bodyParts.back,
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		id: 35,
		enabled: true,
		name: "Hyperextenzie",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	//#endregion

	//#region Lytka
	{
		id: 36,
		enabled: true,
		name: "BarbarianBody",
		bodyPart: bodyParts.calves,
		fullProgram: {
			series: 2,
			items: [
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
			]
		},
		link: "https://www.youtube.com/watch?v=uVu9vToACiQ&ab_channel=BarbarianBody"
	},
	//#endregion

	//#region Nohy
	{
		id: 37,
		enabled: true,
		name: "Drepy",
		bodyPart: bodyParts.legs,
		weights: [14.6, 16.9, 19.2, 21.5],
		equipments: equipments.double
	},
	{
		id: 38,
		enabled: true,
		name: "Rumunsky mrtvy tah s vystretymi nohami",
		bodyPart: bodyParts.legs,
		weights: [12.3, 14.5, 16.8, 19.1],
		equipments: equipments.dumbbells
	},
	{
		id: 39,
		enabled: true,
		name: "Vypony na lytka",
		bodyPart: bodyParts.legs,
		weights: [3.4, 4.6, 5.7, 6.9],
		equipments: equipments.dumbbells
	},
	{
		id: 40,
		enabled: true,
		name: "Vypady",
		bodyPart: bodyParts.legs,
		weights: [1.1, 2.3, 3.4, 4.6],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Core
	{
		id: 41,
		enabled: true,
		name: "FitHero",
		bodyPart: bodyParts.core,
		fullProgram: {
			series: 2,
			items: [
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
			]
		},
		link: "https://www.youtube.com/watch?v=uDTfY7OCoDM&list=PLw5yG_YdlsK-hUnxaEcJL9quKuduBKwvM&index=1&ab_channel=FitHeroFitHero"
	},
	{
		id: 42,
		enabled: true,
		name: "Clutch Life",
		bodyPart: bodyParts.core,
		fullProgram: {
			series: 2,
			items: [
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
			]
		},
		notes: "po 20s",
		link: "https://www.youtube.com/watch?v=dJlFmxiL11s&ab_channel=Bodybuilding.comBodybuilding.comOveren%C3%A9"
	},
	{
		id: 43,
		enabled: true,
		name: "Trening YouTube",
		bodyPart: bodyParts.core
	}
	//#endregion
];
