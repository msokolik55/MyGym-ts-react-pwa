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
		weights: [1.1, 2.3, 3.4, 4.6],
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
		weights: [4.5, 6.8, 9.1, 11.4],
		equipments: equipments.double
	},
	{
		name: "Zospodu nad seba",
		bodyPart: bodyParts.triceps,
		weights: [0, 0, 0, 0],
		equipments: equipments.machine
	},
	{
		name: "Sťahovanie kladky na úzko v miernom predklone",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		name: "Sťahovanie kladky s V držiakom",
		bodyPart: bodyParts.triceps,
		weights: [1, 2, 3, 3],
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
		weights: [1, 2, 3, 4],
		equipments: equipments.machine
	},
	{
		name: "Tricepsové zhyby na lavičke",
		bodyPart: bodyParts.triceps
	},
	//#endregion

	//#region Ramena
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
		weights: [3.4, 5.7, 8, 10.3],
		equipments: equipments.double
	},
	{
		name: "Príťahy obojručky k brade",
		bodyPart: bodyParts.shoulders,
		weights: [3.4, 5.7, 8, 10.3],
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

	//#region Hrudnik
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

	//#region Chrbat
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
		weights: [2.3, 3.4, 4.6, 5.7],
		equipments: equipments.dumbbells
	},
	{
		name: "Hyperextenzie",
		bodyPart: bodyParts.back,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	//#endregion

	//#region Lytka
	{
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
		name: "Drepy",
		bodyPart: bodyParts.legs,
		weights: [0, 0, 0, 0],
		equipments: equipments.double
	},
	{
		name: "Rumunsky mrtvy tah s vystretymi nohami",
		bodyPart: bodyParts.legs,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Vypony na lytka",
		bodyPart: bodyParts.legs,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	{
		name: "Vypady",
		bodyPart: bodyParts.legs,
		weights: [0, 0, 0, 0],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Core
	{
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
		name: "Trening YouTube",
		bodyPart: bodyParts.core
	}
	//#endregion
];
