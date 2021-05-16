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

export interface exercise {
	name: string;
	bodyPart: bodyParts;
	weights?: number[];
	equipments?: equipments;
}