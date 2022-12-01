export const TypeChart: {[k: string]: TypeData} = {
	Ordinary: {
		damageTaken: {
			Smart: 1,
			Insane: 0,
			Artistic: 0,
			Netizen: 0,
			Athletic: 1,
			Legendary: 3,
		},
	},
	Smart: {
		damageTaken: {
         Ordinary: 2,
			Insane: 1,
			Artistic: 0,
			Netizen: 0,
			Athletic: 2,
			Legendary: 0,
		},
	},
	Insane: {
		damageTaken: {
         Ordinary: 2,
			Smart: 1,
			Insane: 1,
			Artistic: 0,
			Netizen: 0,
			Athletic: 2,
			Legendary: 3,
		},
	},
	Artistic: {
		damageTaken: {
         Ordinary: 0,
			Smart: 2,
			Insane: 0,
			Netizen: 1,
			Athletic: 1,
			Legendary: 0,
		},
	},
	Netizen: {
		damageTaken: {
			Ordinary: 1,
			Smart: 0,
			Insane: 0,
			Artistic: 1,
			Athletic: 0,
			Legendary: 0,
		},
	},
	Athletic: {
		damageTaken: {
			Ordinary: 0,
			Smart: 1,
         Insane: 0,
			Artistic: 0,
			Netizen: 3,
			Legendary: 0,
		},
	},
	Legendary: {
		damageTaken: {
			Ordinary: 0,
			Smart: 0,
			Insane: 0,
			Artistic: 0,
			Netizen: 0,
			Athletic: 0,
		},
	},
};
