export const MUTATION_KEYS = {
	LOGIN: ['login'],
	REGISTER: ['register'],
	USERS: {
		base: ['users'],
		create: ['userCreate'],
		update: ['userUpdate'],
		delete: ['userDelete'],
	},
	RESTAURANTS: {
		delete: ['delete'],
	},
};

export const QUERY_KEYS = {
	RESTAURANTS: {
		list: ['restaurants'],
	},
};
