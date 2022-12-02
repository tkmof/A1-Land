export const Moves: {[moveid: string]: MoveData} = {
	standardpunch: {
		num: 1,
		accuracy: 100,
		basePower: 0,
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 20) {
				move.basePower = 80;
			} else if (i < 40) {
				move.basePower = 85;
			} else if (i < 60) {
				move.basePower = 90;
			} else if (i < 80) {
				move.basePower = 95;
			} else {
				move.basePower = 100;
			}
		},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		category: "Physical",
		name: "Standard Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ordinary",
		contestType: "Clever",
	},
	standardshriek: {
		num: 1,
		accuracy: 100,
		basePower: 0,
		onModifyMove(move, pokemon) {
			const i = this.random(100);
			if (i < 20) {
				move.basePower = 80;
			} else if (i < 40) {
				move.basePower = 85;
			} else if (i < 60) {
				move.basePower = 90;
			} else if (i < 80) {
				move.basePower = 95;
			} else {
				move.basePower = 100;
			}
		},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		category: "Special",
		name: "Standard Punch",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1},
		secondary: null,
		target: "normal",
		type: "Ordinary",
		contestType: "Clever",
	},
};
