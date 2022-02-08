import { equipments, bodyParts } from "./enums";
import { exercise } from "./exercises";

export interface equipment {
	key: equipments;
	name: string;
}

export interface bodyPart {
	key: bodyParts;
	name: string;
	count: Number;
}

export interface history {
	// date: Date;
	date: string;
	category: bodyParts;
	exercises: exercise[];
}
