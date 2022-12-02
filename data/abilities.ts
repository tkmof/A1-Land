export const Abilities: {[abilityid: string]: AbilityData} = {
	choicewords: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Choice Words boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				this.debug('Choice Words boost');
				return this.chainModify(1.25);
			}
		},
		name: "Choice Words",
		num: 1,
	},
};
