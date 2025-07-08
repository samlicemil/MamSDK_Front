export const API_ENDPOINTS = {
	AUTH: {
		LOGIN: '/Auth/login',
		REGISTER: '/Auth/register',
		REFRESH: '/Auth/refresh-token',
	},
	USERS: {
		base: '/users/',
		search: '/users/search',
		create: '/users/create',
		delete: (id: string) => `/users/delete/${id}`,
		getById: (id: string) => `/users/${id}`,
	},
	USERCLAIMS: {
		getByUserId: (id: string) => `/user-claims/users/${id}`,
	},
	RESTAURANTS: {
		get: '/Restaurants/getall',
		// deleteById: (id: number) => `/Restaurants/delete/${id}`,
		delete: '/Restaurants/softdelete',
	},
};
