import { bodyParts, equipments } from "./enums";

interface weight {
	place: number;
	values: number[];
}

interface fullProgramItem {
	name: string;
	repetitions: Number;
}

export interface exercise {
	id: number;
	place?: number;
	enabled: boolean;
	name: string;
	bodyPart: bodyParts;
	weights?: weight[];
	equipments?: equipments;
	fullProgram?: {
		series: number;
		items: fullProgramItem[];
	};
	notes?: string;
	link?: string;
}

export const defaultWeight = (place: number) => {
	return { place: place, values: [0, 0, 0, 0] };
};

export const exercisesDemo: exercise[] = [
	//#region Biceps
	{
		id: 1,
		enabled: true,
		name: "Obojruč",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [3.4, 5.7, 6.9, 9.3]
			}
		],
		equipments: equipments.double
	},
	{
		id: 2,
		enabled: true,
		name: "Jednoruč obidve naraz",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 3,
		enabled: true,
		name: "Jednoruč jedna ostáva hore",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 4,
		enabled: true,
		name: "Nižší sklon na lavičke",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 5,
		enabled: true,
		name: "Kladivo k prsiam",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 6,
		enabled: true,
		name: "Koncentrovaný bicepsový zdvih",
		bodyPart: bodyParts.biceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 58,
		enabled: true,
		name: "TRX pritahy (TRX pred sebou)",
		bodyPart: bodyParts.biceps,
		equipments: equipments.trx
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
		weights: [
			{
				place: 0,
				values: [3.4, 4.6, 5.7, 6.9]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 9,
		enabled: true,
		name: "Tricepsový bench",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [9.1, 11.4, 13.7, 16]
			}
		],
		equipments: equipments.double
	},
	{
		id: 10,
		enabled: true,
		name: "Zospodu nad seba",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [1, 2, 2, 2]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 11,
		enabled: true,
		name: "Sťahovanie kladky na úzko v miernom predklone",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [1, 2, 3, 4]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 12,
		enabled: true,
		name: "Sťahovanie kladky s V držiakom",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [1, 2, 3, 3]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 13,
		enabled: true,
		name: "Francúzske tlaky s jednoruč",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 3.4]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 14,
		enabled: true,
		name: "Predpažovanie spoza hlavy s lanovým",
		bodyPart: bodyParts.triceps,
		weights: [
			{
				place: 0,
				values: [1, 2, 3, 3]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 15,
		enabled: true,
		name: "Tricepsové zhyby na lavičke",
		bodyPart: bodyParts.triceps
	},
	{
		id: 51,
		enabled: true,
		name: "Predpažovanie spoza hlavy",
		bodyPart: bodyParts.triceps,
		equipments: equipments.trx
	},
	{
		id: 57,
		enabled: true,
		name: "Pritahy s vystretymi rukami (TRX pred sebou)",
		bodyPart: bodyParts.triceps,
		equipments: equipments.trx
	},
	//#endregion

	//#region Ramena
	{
		id: 16,
		enabled: true,
		name: "Predpažovanie s vytočením",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 17,
		enabled: true,
		name: "Predpažovanie priame",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 18,
		enabled: true,
		name: "Tlaky obojručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [4.5, 6.8, 9.1, 11.4]
			}
		],
		equipments: equipments.double
	},
	{
		id: 19,
		enabled: true,
		name: "Príťahy obojručky k brade",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [5.7, 8, 10.3, 12.6]
			}
		],
		equipments: equipments.double
	},
	{
		id: 20,
		enabled: true,
		name: "Rozpažovanie jednoručky v predklone",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 21,
		enabled: true,
		name: "Tlaky jednoručkou nad hlavu",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [0, 0, 0, 0]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 22,
		enabled: true,
		name: "Tlaky jednoručkou nad hlavu s vytáčaním",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [0, 0, 0, 0]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 23,
		enabled: true,
		name: "Predpažovanie s obojručkou",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [0, 0, 0, 0]
			}
		],
		equipments: equipments.double
	},
	{
		id: 24,
		enabled: true,
		name: "Krčenie ramien",
		bodyPart: bodyParts.shoulders,
		weights: [
			{
				place: 0,
				values: [2.3, 3.4, 4.6, 5.7]
			}
		],
		equipments: equipments.dumbbells
	},
	//#endregion

	//#region Hrudnik
	{
		id: 25,
		enabled: true,
		name: "Bench press jednoručky",
		bodyPart: bodyParts.chest,
		weights: [
			{
				place: 0,
				values: [2.3, 3.4, 4.6, 5.7]
			}
		],
		equipments: equipments.double
	},
	{
		id: 26,
		enabled: true,
		name: "Bench press jednoručky - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 27,
		enabled: true,
		name: "Stroj - výtlaky pred seba",
		bodyPart: bodyParts.chest,
		weights: [
			{
				place: 0,
				values: [4, 5, 6, 7]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 28,
		enabled: true,
		name: "Stroj - zo strán pred seba",
		bodyPart: bodyParts.chest,
		weights: [
			{
				place: 0,
				values: [2, 3, 4, 5]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 49,
		enabled: true,
		name: "TRX press (TRX za sebou)",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 50,
		enabled: true,
		name: "Predpazovanie (TRX za sebou)",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 52,
		enabled: true,
		name: "Kliky na zemi - nohy v TRX",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 53,
		enabled: true,
		name: "Kliky na zemi - nohy viac vzadu v TRX",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 54,
		enabled: true,
		name: "Veslovanie k hrudi (TRX pred sebou)",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 56,
		enabled: true,
		name: "Veslovanie k hrudi (TRX pred sebou) - 1 ruka",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	{
		id: 55,
		enabled: true,
		name: "Veslovanie k ramenam (TRX pred sebou)",
		bodyPart: bodyParts.chest,
		equipments: equipments.trx
	},
	//#endregion

	//#region Chrbat
	{
		id: 29,
		enabled: true,
		name: "Mŕtvy ťah",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [4.5, 6.8, 9.1, 11.4]
			}
		],
		equipments: equipments.double
	},
	{
		id: 30,
		enabled: true,
		name: "Sťahovanie hornej kladky podhmatom",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [2, 3, 4, 5]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 31,
		enabled: true,
		name: "S V držiakom",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [0, 0, 0, 0]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 32,
		enabled: true,
		name: "Príťahy nadhmatom v predklone",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [4.5, 5.6, 6.8, 7.9]
			}
		],
		equipments: equipments.double
	},
	{
		id: 33,
		enabled: true,
		name: "Veslovanie",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [3, 4, 5, 6]
			}
		],
		equipments: equipments.machine
	},
	{
		id: 34,
		enabled: true,
		name: "Krčenie ramien",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [2.3, 3.4, 4.6, 5.7]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 35,
		enabled: true,
		name: "Hyperextenzie",
		bodyPart: bodyParts.back,
		weights: [
			{
				place: 0,
				values: [0, 0, 0, 0]
			}
		],
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
		weights: [
			{
				place: 0,
				values: [14.6, 16.9, 19.2, 21.5]
			}
		],
		equipments: equipments.double
	},
	{
		id: 38,
		enabled: true,
		name: "Rumunsky mrtvy tah s vystretymi nohami",
		bodyPart: bodyParts.legs,
		weights: [
			{
				place: 0,
				values: [12.3, 14.5, 16.8, 19.1]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 39,
		enabled: true,
		name: "Vypony na lytka",
		bodyPart: bodyParts.legs,
		weights: [
			{
				place: 0,
				values: [3.4, 4.6, 5.7, 6.9]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 40,
		enabled: true,
		name: "Vypady",
		bodyPart: bodyParts.legs,
		weights: [
			{
				place: 0,
				values: [1.1, 2.3, 3.4, 4.6]
			}
		],
		equipments: equipments.dumbbells
	},
	{
		id: 44,
		enabled: true,
		name: "Drep - vyskok",
		bodyPart: bodyParts.legs,
		equipments: equipments.trx
	},
	{
		id: 45,
		enabled: true,
		name: "Drepy na 1 nohe",
		bodyPart: bodyParts.legs,
		equipments: equipments.trx
	},
	{
		id: 48,
		enabled: true,
		name: "Korculiar",
		bodyPart: bodyParts.legs,
		equipments: equipments.trx
	},
	{
		id: 46,
		enabled: true,
		name: "Vypad - vyskok",
		bodyPart: bodyParts.legs,
		equipments: equipments.trx
	},
	{
		id: 47,
		enabled: true,
		name: "Vypady do stran",
		bodyPart: bodyParts.legs,
		equipments: equipments.trx
	},
	//#endregion

	//#region CoreProgram
	{
		id: 41,
		enabled: true,
		name: "FitHero",
		bodyPart: bodyParts.coreRoutine,
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
		bodyPart: bodyParts.coreRoutine,
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
		bodyPart: bodyParts.coreRoutine
	},
	{
		id: 59,
		enabled: true,
		name: "Kolena k hrudi",
		bodyPart: bodyParts.core,
		equipments: equipments.trx
	},
	{
		id: 60,
		enabled: true,
		name: "Kolena k hrudi do stran",
		bodyPart: bodyParts.core,
		equipments: equipments.trx
	},
	{
		id: 61,
		enabled: true,
		name: "Bocny plank",
		bodyPart: bodyParts.core,
		equipments: equipments.trx
	},
	{
		id: 62,
		enabled: true,
		name: "Strieska",
		bodyPart: bodyParts.core,
		equipments: equipments.trx
	},
	{
		id: 63,
		enabled: true,
		name: "Spustenie do strany",
		bodyPart: bodyParts.core,
		equipments: equipments.trx
	},
	//#endregion

	//#region Cardio,
	{
		id: 64,
		enabled: true,
		name: "Beh na mieste",
		bodyPart: bodyParts.cardio,
		equipments: equipments.trx
	},
	{
		id: 65,
		enabled: true,
		name: "Anglicaky - 1 noha zavesena",
		bodyPart: bodyParts.cardio,
		equipments: equipments.trx
	},
	{
		id: 66,
		enabled: true,
		name: "Star jumps",
		bodyPart: bodyParts.cardio,
		equipments: equipments.trx
	},
	{
		id: 67,
		enabled: true,
		name: "Vypad - skok",
		bodyPart: bodyParts.cardio,
		equipments: equipments.trx
	},
	{
		id: 68,
		enabled: true,
		name: "Drepy na stranach",
		bodyPart: bodyParts.cardio,
		equipments: equipments.trx
	}
	//#endregion
];
