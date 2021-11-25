export const Pokedex: {[speciesid: string]: SpeciesData} = {
	shaymin: {
		inherit: true,
		num: 1,
		types: ["Grass"],
		abilities: {0: "Natural Cure", H: "Disperal"},
	},
	heatmor: {
		inherit: true,
		num: 2,
		baseStats: {hp: 78, atk: 102, def: 61, spa: 102, spd: 61, spe: 80},
		abilities: {0: "Gluttony", 1: "Flash Fire", H: "Stakeout"},		
	},
	slowclone: {
		num: 3,
		name: "Slowclone",
		types: ["Water"],
		baseStats: {hp: 120, atk: 100, def: 100, spa: 75, spd: 75, spe: 20},
		abilities: {0: "Shell Armor", 1: "Oblivious", H: "Water Veil"},
		heightm: 2,
		weightkg: 120,
		prevo: "slowpoke",
	},
	eevee: {
    	inherit: true,
		evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Mytheon"],
	},
	mytheon: {
		num: 4,
		name: "Mytheon",
		types: ["Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 95, def: 65, spa: 60, spd: 65, spe: 130},
		abilities: {0: "Pressure", H: "Tough Claws"},
		heightm: 0.9,
		weightkg: 24,
		color: "Blue",
		prevo: "Eevee",
		evoType: "trade",
		evoItem: "Dragon Scale",
		eggGroups: ["Field"],
	},
	melmetal: {
		inherit: true,
		num: 5,
		baseStats: {hp: 125, atk: 123, def: 123, spa: 80, spd: 65, spe: 84},
	},
	melmetalgmax: {
		inherit: true,
		num: 5,
		baseStats: {hp: 125, atk: 133, def: 133, spa: 80, spd: 65, spe: 114},
	},
	kokovoir: {
		fusion: ['Gardevoir', 'Tapu Koko'],
		num: 6,
		name: "Kokovoir",
		types: ["Fairy"],
		baseStats: {hp: 69, atk: 110, def: 75, spa: 110, spd: 100, spe: 120},
		abilities: {0: "E-Copy"},
		weightkg: 34.45,
		otherFormes: ["Kokovoir-Mega"],
		formeOrder: ["Kokovoir", "Kokovoir-Mega"],
	},
	kokovoirmega: {
		fusion: ['Gardevoir', 'Tapu Koko'],
		num: 6,
		name: "Kokovoir-Mega",
		baseSpecies: "Kokovoir",
		forme: "Mega",
		types: ["Fairy"],
		baseStats: {hp: 69, atk: 130, def: 75, spa: 150, spd: 120, spe: 140},
		abilities: {0: "Pixilate"},
		weightkg: 34.45,
		requiredItem: "Gardevoirite",
		battleOnly: "Kokovoir",
	},
	salaos: {
		num: 7,
		name: "Salaos",
		types: ["Dark"],
		baseStats: {hp: 75, atk: 85, def: 90, spa: 110, spd: 130, spe: 90},
		abilities: {0: "Heatproof"},
		weightkg: 59,
		eggGroups: ["Undiscovered"],
	},
	machamp: {
		inherit: true,
		num: 8,
		otherFormes: ["Machamp-Mega"],
		formeOrder: ["Machamp", "Machamp-Mega"],
	},
	machampmega: {
		num: 8,
		name: "Machamp-Mega",
		baseSpecies: "Machamp",
		forme: "Mega",
		types: ["Fighting"],
		baseStats: {hp: 90, atk: 160, def: 115, spa: 65, spd: 130, spe: 45},
		abilities: {0: "Technician"},
		heightm: 2.0,
		weightkg: 250,
		eggGroups: ["Human-Like"],
		requiredItem: "Machampite",
	},
	machampindia: {
		num: 9,
		name: "Machamp-India",
		types: ["Psychic"],
		baseStats: {hp: 80, atk: 120, def: 80, spa: 65, spd: 85, spe: 75},
		abilities: {0: "Sheer Force", 1: "No Guard", H: "Serene Grace"},
		heightm: 2.0,
		weightkg: 102.9,
		eggGroups: ["Human-Like"],
	},
	sandaconda: {
		num: 10,
		name: "Sandaconda",
		baseForme: "Coiled",
		types: ["Ground"],
		baseStats: {hp: 92, atk: 107, def: 125, spa: 65, spd: 70, spe: 51},
		abilities: {0: "Sand Spit", 1: "Shed Skin", H: "Natural Cure"},
		heightm: 3.8,
		weightkg: 65.5,
		color: "Green",
		prevo: "Silicobra",
		evoLevel: 36,
		eggGroups: ["Field", "Dragon"],
		otherFormes: ["Sandaconda-Uncoiled"],
		formeOrder: ["Sandaconda", "Sandaconda-Uncoiled"],
	},
	sandacondauncoiled: {
		num: 10,
		name: "Sandaconda-Uncoiled",
		baseSpecies: "Sandaconda",
		forme: "Uncoiled",
		types: ["Ground"],
		baseStats: {hp: 92, atk: 127, def: 71, spa: 65, spd: 70, spe: 125},
		abilities: {0: "Sand Spit", 1: "Shed Skin", H: "Natural Cure"},
		heightm: 22,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Field", "Dragon"],
		changesFrom: "Sandaconda",
	},
	cummulus: {
		num: 11,
		name: "Cummulus",
		types: ["Flying"],
		gender: "M",
		baseStats: {hp: 130, atk: 60, def: 60, spa: 90, spd: 100, spe: 100},
		abilities: {0: "Natural Cure"},
		heightm: 1.4,
		weightkg: 63,
		eggGroups: ["Undiscovered"],
	},
	silvallyrock: {
		num: 12,
		name: "Silvally-Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: {hp: 95, atk: 105, def: 95, spa: 95, spd: 95, spe: 115},
		abilities: {0: "RKS System"},
		heightm: 2.3,
		weightkg: 100.5,
	},
	pincurchin: {
		num: 13,
		name: "Pincurchin",
		types: ["Electric"],
		baseStats: {hp: 111, atk: 72, def: 75, spa: 98, spd: 108, spe: 51},
		abilities: {0: "Iron Barbs", H: "Lightning Rod"},
		weightkg: 1,
	},
	spectrier: {
		num: 14,
		name: "Spectrier",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 90, atk: 90, def: 85, spa: 90, spd: 95, spe: 130},
		abilities: {0: "Grim Neigh"},
		heightm: 2,
		weightkg: 44.5,
		eggGroups: ["Undiscovered"],
	},
	chillyte: {
		num: 15,
		name: "Chillyte",
		types: ["Ice"],
		baseStats: {hp: 95, atk: 110, def: 135, spa: 101, spd: 75, spe: 84},
		abilities: {0: "Grassy Surge", 1: "Natural Cure", H: "Slush Rush"},
		weightkg: 75,
		otherFormes: ["Chillyte-Mega"],
		formeOrder: ["Chillyte", "Chillyte-Mega"],
		eggGroups: ["Undiscovered"],
	},
	chillytemega: {
		num: 15,
		name: "Chillyte-Mega",
		baseSpecies: "Chillyte",
		forme: "Mega",
		types: ["Ice"],
		baseStats: {hp: 95, atk: 101, def: 192, spa: 134, spd: 79, spe: 99},
		abilities: {0: "Dauntless Shield"},
		weightkg: 150,
		requiredItem: "Chillyte",
		eggGroups: ["Undiscovered"],
	},
	magroach: {
		num: 16,
		name: "Magroach",
		types: ["Bug"],
		baseStats: {hp: 90, atk: 110, def: 85, spa: 85, spd: 110, spe: 90},
		abilities: {0: "Magic Guard", 1: "Illuminate", H: "Rattled"},
		heightm: 3.5,
		weightkg: 135,
	},
	exploud: {
		inherit: true,
		num: 17,
		otherFormes: ["Exploud-Meow"],
		formeOrder: ["Exploud", "Exploud-Meow"],
	},
	exploudmeow: {
		num: 17,
		name: "Exploud-Meow",
		baseSpecies: "Exploud",
		breedingVariant: "Persian",
		forme: "Meow",
		types: ["Normal"],
		baseStats: {hp: 104, atk: 91, def: 63, spa: 91, spd: 73, spe: 91},
		abilities: {0: "Soundproof", 1: "Technician", H: "Scrappy"},
		heightm: 1.2,
		weightkg: 58,
		prevo: "loudred",
		eggGroups: ["Field"],
	},
	garbodor: {
		inherit: true,
		otherFormes: ["Garbodor-Gmax"],
		formeOrder: ["Garbodor", "Garbodor-Gmax"],
	},
	garbodorgmax: {
		num: 18,
		name: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		forme: "Gmax",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 105, def: 137, spa: 60, spd: 137, spe: 55},
		abilities: {0: "Neutralizing Gas"},
		heightm: 1.9,
		weightkg: 107.3,
		eggGroups: ["Mineral"],
		requiredItem: "Garbodite",
		gen: 8,
	},
	grimmsnarl: {
		inherit: true,
		otherFormes: ["Grimmsnarl-Alola"],
		formeOrder: ["Grimmsnarl", "Grimmsnarl-Alola"],
	},
	grimmsnarlalola: {
		num: 19,
		name: "Grimmsnarl-Alola",
		baseSpecies: "Grimmsnarl",
		forme: "Alola",
		types: ["Dark", "Fighting"],
		gender: "M",
		baseStats: {hp: 95, atk: 120, def: 80, spa: 60, spd: 65, spe: 90},
		abilities: {0: "Moxie", 1: "Intimidate", H: "Mold Breaker"},
		heightm: 1.5,
		weightkg: 61,
		eggGroups: ["Fairy", "Human-Like"],
	},
	peasmaker: {
		num: 20,
		name: "Peasmaker",
		types: ["Grass", "Flying"],
		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101},
		abilities: {0: "Tangled Feet", 1: "Grassy Surge", H: "Skill Link"},
		heightm: 1.5,
		weightkg: 39.5,
		eggGroups: ["Flying"],
		otherFormes: ["Peasmaker-Mega"],
		formeOrder: ["Peasmaker", "Peasmaker-Mega"],
	},
	peasmakermega: {
		num: 20,
		name: "Peasmaker-Mega",
		baseSpecies: "Peasmaker",
		forme: "Mega",
		types: ["Grass", "Flying"],
		baseStats: {hp: 83, atk: 80, def: 80, spa: 135, spd: 80, spe: 121},
		abilities: {0: "Drought"},
		heightm: 2.2,
		weightkg: 50.5,
		eggGroups: ["Flying"],
		requiredItem: "Pidgeotite",
	},
	cofazor: {
		fusion: ['Cofagrigus', 'Scizor'],
		num: 21,
		name: "Cofazor",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 65, atk: 90, def: 125, spa: 88, spd: 95, spe: 67},
		abilities: {0: "Teaching Tech"},
		weightkg: 97.25,
		otherFormes: ["Cofazor-Mega"],
		formeOrder: ["Cofazor", "Cofazor-Mega"],
	},
	cofazormega: {
		fusion: ['Cofagrigus', 'Scizor'],
		num: 21,
		name: "Cofazor-Mega",
		baseSpecies: "Cofazor",
		forme: "Mega",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 65, atk: 110, def: 165, spa: 98, spd: 115, spe: 77},
		abilities: {0: "Technician"},
		weightkg: 100.75,
		requiredItem: "Scizorite",
		battleOnly: "Cofazor",
	},
	corsola: {
		num: 22,
		name: "Corsola",
		types: ["Rock", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 85, def: 105, spa: 145, spd: 105, spe: 45},
		abilities: {0: "Hustle", H: "Immunity"},
		heightm: 0.6,
		weightkg: 5,
		eggGroups: ["Water 1", "Water 3"],
	},
	algalisk: {
		num: 23,
		name: "Algalisk",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 85, atk: 75, def: 110, spa: 97, spd: 103, spe: 69},
		abilities: {0: "Poison Point", 1: "Poison Touch", H: "Adaptability"},
		weightkg: 130,
	},
	ringoando: {
		num: 24,
		name: "Ringo Ando", /* Puyo Puyo */
		types: ["Electric", "Water"],
		gender: "F",
		baseStats: {hp: 80, atk: 100, def: 80, spa: 100, spd: 120, spe: 60},
		abilities: {0: "Analytic", 1: "Rattled", H: "Harvest"},
		heightm: 1.5,
		weightkg: 48,
	},
	arcanine: {
		inherit: true,
		num: 25,
		types: ["Fire", "Normal"],
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified (Sylve)"},
	},
	frosmoth: {
		num: 26,
		name: "Frosmoth",
		types: ["Ice", "Bug"],
		baseStats: {hp: 70, atk: 65, def: 60, spa: 125, spd: 90, spe: 65},
		abilities: {0: "Shield Dust", H: "Ice Scales"},
		heightm: 1.3,
		weightkg: 42,
		otherFormes: ["Frosmoth-Mega"],
		formeOrder: ["Frosmoth", "Frosmoth-Mega"],
	},
	frosmothmega: {
		num: 26,
		name: "Frosmoth-Mega",
		baseSpecies: "Frosmoth",
		forme: "Mega",
		types: ["Ice", "Bug"],
		baseStats: {hp: 70, atk: 65, def: 90, spa: 155, spd: 100, spe: 95},
		abilities: {0: "Ice Scales"},
		heightm: 1.3,
		weightkg: 42,
		requiredItem: "Frosmothite",
		battleOnly: "Frosmoth",
	},
	lunatoneapple: {
		num: 27,
		name: "Lunatone-Apple",
		baseSpecies: "Lunatone",
		forme: "Apple",
		types: ["Ground", "Psychic"],
		baseStats: {hp: 105, atk: 65, def: 80, spa: 120, spd: 100, spe: 70},
		abilities: {0: "Hydration", 1: "Mirror Armor", H: "Psychic Surge"},
		weightkg: 999,
		changesFrom: "Lunatone",
	},
	bastiodactyl: {
		num: 28,
		name: "Bastiodactyl",
		types: ["Flying", "Steel"],
		baseStats: {hp: 90, atk: 85, def: 90, spa: 90, spd: 65, spe: 85},
		abilities: {0: "Rock Head", 1: "Pressure", H: "Soundproof"},
		weightkg: 104.25,
	},
	gengar: {
		inherit: true,
		num: 29,
	},
	gengarmega: {
		inherit: true,
		num: 29,
		baseStats: {hp: 60, atk: 95, def: 90, spa: 155, spd: 90, spe: 110},
	},
	ribombeeprimarina: {
		num: 30,
		name: "Ribombee-Primarina",
		types: ["Water", "Fairy"],
		baseStats: {hp: 69, atk: 62, def: 68, spa: 109, spd: 80, spe: 142},
		abilities: {0: "Torrent", H: "Liquid Voice"},
		heightm: 0.2,
		weightkg: 0.5,
	},
	beetilient: {
		num: 31,
		name: "Beetilient",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 75, atk: 110, def: 135, spa: 40, spd: 75, spe: 75},
		abilities: {0: "Shell Armor", 1: "Stamina", H: "Mirror Armor"},
		weightkg: 65.4,
	},
	cadbunny: {
		num: 32,
		name: "Cadbunny",
		types: ["Normal", "Dark"],
		baseStats: {hp: 90, atk: 50, def: 90, spa: 110, spd: 90, spe: 90},
		abilities: {0: "Pickup", H: "Regenerator"},
		//weightkg: 104.25,
	},
	peccarious: {
		num: 33,
		name: "Peccarious",
		types: ["Ground", "Grass"],
		baseStats: {hp: 80, atk: 135, def: 94, spa: 50, spd: 86, spe: 40},
		abilities: {0: "Reckless", 1: "Vigilante", H: "Grass Pelt"},
		weightkg: 25,
	},
};
