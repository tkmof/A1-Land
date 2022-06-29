export const Moves: {[k: string]: ModdedMoveData} = {
	//------------------------------------------
	//MOVES EDITED FOR COMPATIBILITY
	//Hazard/screen removal, etc 
	//------------------------------------------
	//For new hazard/screen compatibility:
	gmaxwindrage: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Wind Rage",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Corviknight",
		self: {
			onHit(source) {
				let success = false;
				const removeTarget = [
					'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb',
					'sunblessing', 'rainblessing', 'crystalveil',
				];
				const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge'];
				for (const targetCondition of removeTarget) {
					if (source.side.foe.removeSideCondition(targetCondition)) {
						if (!removeAll.includes(targetCondition)) continue;
						this.add('-sideend', source.side.foe, this.dex.getEffect(targetCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				for (const sideCondition of removeAll) {
					if (source.side.removeSideCondition(sideCondition)) {
						this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: G-Max Wind Rage', '[of] ' + source);
						success = true;
					}
				}
				this.field.clearTerrain();
				return success;
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Flying",
		contestType: "Cool",
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
				'sunblessing', 'rainblessing', 'crystalveil',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	courtchange: {
		num: 756,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Court Change",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onHitField(target, source) {
			const sourceSide = source.side;
			const targetSide = source.side.foe;
			const sideConditions = [
				'mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 
				'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 
				'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire',
				'sunblessing', 'rainblessing', 'crystalveil',
			];
			let success = false;
			for (const id of sideConditions) {
				const effectName = this.dex.getEffect(id).name;
				if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
					[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [
						targetSide.sideConditions[id], sourceSide.sideConditions[id],
					];
					this.add('-sideend', sourceSide, effectName, '[silent]');
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
					targetSide.sideConditions[id] = sourceSide.sideConditions[id];
					delete sourceSide.sideConditions[id];
					this.add('-sideend', sourceSide, effectName, '[silent]');
				} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
					sourceSide.sideConditions[id] = targetSide.sideConditions[id];
					delete targetSide.sideConditions[id];
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else {
					continue;
				}
				let sourceLayers = sourceSide.sideConditions[id] ? (sourceSide.sideConditions[id].layers || 1) : 0;
				let targetLayers = targetSide.sideConditions[id] ? (targetSide.sideConditions[id].layers || 1) : 0;
				for (; sourceLayers > 0; sourceLayers--) {
					this.add('-sidestart', sourceSide, effectName, '[silent]');
				}
				for (; targetLayers > 0; targetLayers--) {
					this.add('-sidestart', targetSide, effectName, '[silent]');
				}
				success = true;
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	brickbreak: {
		num: 280,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Fighting')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
				pokemon.side.removeSideCondition('sunblessing');
				pokemon.side.removeSideCondition('rainblessing');
				pokemon.side.removeSideCondition('crystalveil');
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	psychicfangs: {
		num: 706,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Psychic Fangs",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Psychic')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
				pokemon.side.removeSideCondition('sunblessing');
				pokemon.side.removeSideCondition('rainblessing');
				pokemon.side.removeSideCondition('crystalveil');
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	//For new ability compatibility:
	gearup: {
		num: 674,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Gear Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		onHitSide(side, source, move) {
			const targets = [];
			for (const pokemon of side.active) {
				if (pokemon.hasAbility(['plus', 'minus', 'eleki', 'drago'])) {
					targets.push(pokemon);
				}
			}
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({atk: 1, spa: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Steel",
		zMove: {boost: {spa: 1}},
		contestType: "Clever",
	},
	magneticflux: {
		num: 602,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Magnetic Flux",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, distance: 1, authentic: 1},
		onHitSide(side, source, move) {
			const targets = [];
			for (const pokemon of side.active) {
				if (pokemon.hasAbility(['plus', 'minus', 'eleki', 'drago'])) {
					targets.push(pokemon);
				}
			}
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({def: 1, spd: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Electric",
		zMove: {boost: {spd: 1}},
		contestType: "Clever",
	},
	
	//------------------------------------------
	//EDITED MOVES
	//------------------------------------------
	gmaxsmite: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			const damagedByTarget = pokemon.attackedBy.some(
				p => p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "Power is equal to the base move's Max Move power. If this move is successful, each Pokemon on the opposing side becomes confused, even if they have a substitute.",
		shortDesc: "Base move affects power. Foes: confused.",
		name: "G-Max Smite",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Hatterene",
		self: {
			onHit(source) {
				for (const pokemon of source.side.foe.active) {
					const damagedByTarget = source.attackedBy.some(
						p => p.source === pokemon && p.damage > 0 && p.thisTurn
					);
					if (damagedByTarget) {
						this.debug('Boosted for getting hit by ' + source);
						pokemon.trySetStatus('par', source);
					}
				}
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Cool",
	},
	
	snipeshot: {
		num: 745,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.",
		shortDesc: "High critical hit ratio. Cannot be redirected.",
		name: "Snipe Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, pokemon, target) {
			const atk = pokemon.getStat('atk', false, true);
			const spa = pokemon.getStat('spa', false, true);
			const def = target.getStat('def', false, true);
			const spd = target.getStat('spd', false, true);
			const physical = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * atk) / def) / 50);
			const special = Math.floor(Math.floor(Math.floor(Math.floor(2 * pokemon.level / 5 + 2) * 90 * spa) / spd) / 50);
			if (physical > special || (physical === special && this.random(2) === 0)) {
				move.category = 'Physical';
				move.flags.contact = 1;
			}
		},
		onHit(target, source, move) {
			this.hint(move.category + " Snipe Shot");
		},
		onAfterSubDamage(damage, target, source, move) {
			this.hint(move.category + " Snipe Shot");
		},
		tracksTarget: true,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	
	freezingglare: {
		num: 821,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Freezing Glare",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move){
			const atk = target.getStat('atk', false, true);
			const spa = target.getStat('spa', false, true);
			if (atk && atk >= spa) {
				this.boost({atk: -1}, target);
			} else if (spa) {
				this.boost({spa: -1}, target);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	
	fierywrath: {
		num: 822,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Fiery Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move){
			if (target !== source && move.category !== 'Status' && target.getMoveHitData(move).typeMod < 0) {
				this.boost({spa: 1}, source);
			}
			
		},
		onAfterSubDamage(damage, target, source, move) {
			this.boost({spa: 1}, source);
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
	},
	
	glaciallance: {
		num: 824,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Glacial Lance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
	},
	
	astralbarrage: {
		num: 825,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Astral Barrage",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ghost",
	},
	spectralthief: {
		inherit: true, 
		basePower: 60, 
	}, 
	
	//------------------------------------------
	//NEW MOVES
	//------------------------------------------
	
	snowfill: {
		num: 0.1,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Snowfill",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('hail')) {
				factor = 0.667;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Ice",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Cute",
		shortDesc: "User restores 1/2 its max HP; 2/3 in Hail.",
	},
	
	spectraltrick: {
		num: 0.2,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Spectral Trick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, authentic: 1},
		swapsBoosts: true,
		// Boost swapping implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
		shortDesc: "User trades stat changes with the target, then attacks.", 
	},
	
	snowsap: {
		num: 0.3,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Snow Sap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
		onHit(target, source) {
			if (target.boosts.spa === -6) return false;
			const spa = target.getStat('spa', false, true);
			const success = this.boost({spa: -1}, target, source, null, false, true);
			return !!(this.heal(spa, source, target) || success);
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
	
	magicfrost: {
		num: 0.4,
		accuracy: 90,
		basePower: 0,
		category: "Status",
		name: "Magic Frost",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		volatileStatus: 'magicfrost',
		condition: {
			onStart(target) {
				this.add('-start', target, 'move: Magic Frost');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.effectData.source.side.active[pokemon.volatiles['magicfrost'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryImmunity(target) {
			return !target.hasType('Ice');
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	
	mosspunch: {
		num: 0.5,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Moss Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		volatileStatus: 'leechseed',
		secondary: null,
		target: "normal",
		type: "Grass", 
		contestType: "Cool",
	},
	
	sunblessing: {
		num: 0.6,
		accuracy: 0,
		basePower:0 ,
		category: "Status",
		name: "Sun Blessing",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'sunblessing',
		onTryHitSide() {
			if (!this.field.isWeather('sunnyday')) return false;
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					if ((target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') ||
							(target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special')) {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates && ["Fire", "Water", "Grass"].includes(move.type)) {
						this.debug('Sun Blessing weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Sun Blessing');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd(side) {
				this.add('-sideend', side, 'move: Sun Blessing');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fire",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	rainblessing: {
		num: 0.7,
		accuracy: 0,
		basePower: 0,
		category: "Status",
		name: "Rain Blessing",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'rainblessing',
		onTryHitSide() {
			if (!this.field.isWeather('raindance')) return false;
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					if (target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special') {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates && this.getCategory(move) === 'Special') {
						this.debug('Rain Blessing weaken');
						if (target.side.active.length > 1) return this.chainModify(0.5);
						return this.chainModify(0.25);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Rain Blessing');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd(side) {
				this.add('-sideend', side, 'move: Rain Blessing');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Water",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	crystalveil: {
		num: 0.8,
		accuracy: 0,
		basePower: 0,
		category: "Status",
		name: "Crystal Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		sideCondition: 'crystalveil',
		onTryHitSide() {
			if (!this.field.isWeather('sandstorm')) return false;
		},
		condition: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source?.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					if (target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates && this.getCategory(move) === 'Physical') {
						this.debug('Crystal Veil weaken');
						if (target.side.active.length > 1) return this.chainModify(0.5);
						return this.chainModify(0.25);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Crystal Veil');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd(side) {
				this.add('-sideend', side, 'move: Crystal Veil');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMove: {boost: {def: 1}},
		contestType: "Beautiful",
	},
	
	dustydance: {
		num: 0.9,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Dusty Dance",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		weather: 'sandstorm',
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	waterywaltz: {
		num: 0.01,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Watery Waltz",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		weather: 'raindance',
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	sunnysalutation: {
		num: 0.02,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Sunny Salutation",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		weather: 'sunnyday',
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	snowysamba: {
		num: 0.03,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Snowy Samba",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		weather: 'hail',
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cute",
	},
	
	lightningdance: {
		num: 0.04,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lightning Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onModifyMove(move, pokemon) {
			if ((this.field.isTerrain('electricterrain') || move.isZ) && pokemon.isGrounded()) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMove: {effect: 'electricterrain'},
		//zMove: {boost: {spe: 1}},
		contestType: "Cool",
	},
	verdantdance: {
		num: 0.05,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Verdant Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1, heal: 1},
		heal: [1, 3],
		onModifyMove(move, pokemon) {
			if ((this.field.isTerrain('grassyterrain') || move.isZ) && pokemon.isGrounded()) move.boosts = {atk: 1, def: 1};
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMove: {effect: 'grassyterrain'},
		//zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	fairydance: {
		num: 0.06,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Fairy Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onModifyMove(move, pokemon) {
			if ((this.field.isTerrain('mistyterrain') || move.isZ) && pokemon.isGrounded()) {
				move.heal = [1, 3];
				move.flags.heal = 1;
			}
		},
		boosts: {def: 1, spd: 1},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMove: {effect: 'mistyterrain'},
		//zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	mysticaldance: {
		num: 0.07,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Mystical Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onTryHit(pokemon, move) {
			if (this.field.isTerrain('psychicterrain') && pokemon.isGrounded()) {
				this.boost({spa: 2, spe: 1}, pokemon);
			} else if (move.isZ && pokemon.isGrounded()) {
				move.boosts = {spa: 2, spe: 1};
			}
			else return false;
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMove: {effect: 'psychicterrain'},
		//zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	
	windstormwaltz: {
		num: 0.08,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Windstorm Waltz",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		sideCondition: 'tailwind',
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Beautiful",
	},
	auroradance: {
		num: 0.09,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Aurora Dance",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		self: {
			onHit(source) {
				if (this.field.isWeather('hail')) {
					source.side.addSideCondition('auroraveil');
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Beautiful",
	},
	
	vinetether: {
		num: 0.001,
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		name: "Vine Tether",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'vinetether',
		condition: {
			duration: 5,
			durationCallback(target, source) {
				if (source?.hasItem('gripclaw')) return 8;
				return this.random(5, 7);
			},
			onStart(pokemon, source) {
				this.add('-activate', pokemon, 'move: ' + this.effectData.sourceEffect, '[of] ' + source);
				this.effectData.boundDivisor = source.hasItem('bindingband') ? 8 : 10;
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				const target = this.effectData.source.side.active[pokemon.volatiles['vinetether'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				const damage = this.damage(pokemon.baseMaxhp / this.effectData.boundDivisor, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
			onTrapPokemon(pokemon) {
				if (this.effectData.source?.isActive) pokemon.tryTrap();
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, this.effectData.sourceEffect, '[vinetether]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	
	chainlightning: {
		num: 0.002,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Chain Lightning",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('electricterrain') && source.isGrounded()) {
				move.target = 'allAdjacentFoes';
				move.boosts = {def: -1, spd: -1};
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	magestrike: {
		num: 0.003,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Mage Strike",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			onHit(source) {
				if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
					this.boost({atk: 1, def: 1}, source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Tough",
	},
	
	
}
