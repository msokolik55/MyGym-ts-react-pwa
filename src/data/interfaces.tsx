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
	name: string;
	bodyPart: bodyParts;
	weights?: number[];
	equipments?: equipments;
	fullProgram?: fullProgramItem[];
	notes?: string;
}

export interface history {
	// date: Date;
	date: string;
	category: bodyParts;
	exercises: exercise[];
}
