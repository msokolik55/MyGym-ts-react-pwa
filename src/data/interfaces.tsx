import { equipments, bodyParts } from "./enums";

export interface equipment {
	key: equipments;
	name: string;
}

export interface bodyPart {
	key: bodyParts;
	name: string;
	count: Number;
}

export interface fullProgramItem {
	name: string;
	repetitions: Number;
}

export interface exercise {
	id: number;
	enabled: boolean;
	name: string;
	bodyPart: bodyParts;
	weights?: number[];
	equipments?: equipments;
	fullProgram?: {
		series: number;
		items: fullProgramItem[];
	};
	notes?: string;
	link?: string;
}

export interface history {
	// date: Date;
	date: string;
	category: bodyParts;
	exercises: exercise[];
}
