export const ACTIONS = {
	engBike: {
		time: 5,
		name: "Stationary Bicycle",
		items: {
			id: "power",
			count: 2
		},
		icon: require("@/assets/art/engineering/bicycle.png"),
		xp: 1.8,
		requiredLevel: 1
	},
	engOil: {
		time: 5,
		name: "Oil Barrel",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/burning_anim.gif"),
		xp: 3,
		requiredLevel: 4,
		requiredItems: {
			oil: 1
		}
	},
	engTreadmill: {
		time: 5,
		name: "Treadmill",
		items: {
			id: "power",
			count: 3
		},
		icon: require("@/assets/art/engineering/treadmill.png"),
		xp: 5,
		requiredLevel: 10,
	},
	engIncinerator: {
		time: 5,
		name: "Incinerator",
		items: {
			id: "power",
			count: 4
		},
		icon: require("@/assets/art/engineering/incinerator_anim.gif"),
		xp: 8,
		requiredLevel: 15,
		requiredItems: {
			burnJunk: 1
		}

	},
	engGen: {
		time: 5,
		name: "Portable Generator",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/generator_anim.gif"),
		xp: 10,
		requiredLevel: 20,
		requiredItems: {
			power: 5
		}
	},
	engPotato: {
		time: 5,
		name: "Potato Battery",
		items: {
			id: "power",
			count: 6
		},
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		xp: 13,
		requiredLevel: 25,
		requiredItems: {
			potatobattery: 8
		}
	},
	engSlime: {
		time: 5,
		name: "Charged Slime",
		items: {
			id: "power",
			count: 7
		},
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		xp: 15,
		requiredLevel: 30,
		requiredItems: {
			slimeYellow: 1
		}
	},
	engSolars: {
		time: 5,
		name: "Solars",
		items: {
			id: "power",
			count: 8
		},
		icon: require("@/assets/art/engineering/solars.png"),
		xp: 18,
		requiredLevel: 35,
		requiredItems: {
			wire: 1
		}
	},
	engSMES: {
		time: 5,
		title: "Prepare For Sale",
		name: "Stored Power",
		items: {
			id: "money",
			count: 50
		},
		icon: require("@/assets/art/engineering/smes_anim.gif"),
		xp: 20,
		requiredLevel: 40,
		requiredItems: {
			power: 10
		}
	},
	engUnholy: {
		time: 5,
		name: "Unholy Matter",
		items: {
			id: "power",
			count: 9
		},
		icon: require("@/assets/art/engineering/eng_shitpost.png"),
		xp: 18,
		requiredLevel: 42,
		requiredItems: {
			salt: 1
		}
	},
	engBattery: {
		time: 5,
		name: "Battery Array",
		items: {
			id: "power",
			count: 10
		},
		icon: require("@/assets/art/engineering/battery.png"),
		xp: 18,
		requiredLevel: 42,
		requiredItems: {
			ammoE3: 1
		}
	},
	engSingularity: {
		time: 600,
		name: "Gravitational Singularity",
		items: {
			id: "power",
			count: 50000
		},
		icon: require("@/assets/art/engineering/big.gif"),
		xp: -50000,
		requiredLevel: 50,
		requiredItems: {
			power: 500
		}
	},
	// engMeleesmall: {
	// 	time: 1,
	// 	item: "mechWeaponClaw",
	// 	icon: require("@/assets/art/engineering/meleesmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 2
	// },
	// engMeleebig: {
	// 	time: 1,
	// 	item: "mechWeaponDrill",
	// 	icon: require("@/assets/art/engineering/meleebig.png"),
	// 	xp: 5,
	// 	requiredLevel: 3
	// },
	// engGunsmall: {
	// 	time: 1,
	// 	item: "mechGunRifle",
	// 	icon: require("@/assets/art/engineering/gunsmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 4
	// These ammos will all probably be removed from here, but this one is causing issues
	// engAmmosmall: {
	// 	time: 1,
	// 	item: "rifleAmmo",
	// 	icon: require("@/assets/art/engineering/ammosmall.png"),
	// 	xp: 5,
	// 	requiredLevel: 5
	// },
	// engGunbig: {
	// 	time: 1,
	// 	item: "mechGunCanno",
	// 	icon: require("@/assets/art/engineering/gunbig.png"),
	// 	xp: 5,
	// 	requiredLevel: 6
	// },
	// engAmmobig: {
	// 	time: 1,
	// 	item: "cannonAmmo",
	// 	icon: require("@/assets/art/engineering/ammobig.png"),
	// 	xp: 5,
	// 	requiredLevel: 7
	// },
	// engGunenergy: {
	// 	time: 1,
	// 	item: "mechGunEnergyRifle",
	// 	icon: require("@/assets/art/engineering/gunenergy.png"),
	// 	xp: 5,
	// 	requiredLevel: 8
	// },
}

export const JOB = {
	id: "engineering",
	name: "Engineering",
	icon: require("@/assets/art/engineering/icon.png"),
	color: "#FFDB00"
}
