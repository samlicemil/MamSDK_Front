import {
	AuthResponse,
	LoginUserInput,
	RegisterUserInput,
	GetRestaurantsParams,
	GetRestaurantsResponse,
} from '@/types/input.type';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

class Client {
	users = {
		login: async (input: LoginUserInput): Promise<AuthResponse> => {
			return await HttpClient.post<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, input);
		},

		register: (input: RegisterUserInput) =>
			HttpClient.post<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, input),

		refresh: async (refreshToken: string) => {
			return await HttpClient.post('/auth/refresh-token', { RefreshToken: refreshToken });
		},

		// refreshToken: async (): Promise<{ refreshToken: string }> => {
		//   return HttpClient.post<{ refreshToken: string }>(
		//     API_ENDPOINTS.USER_REFRESH_TOKEN,
		//     {}
		//   );
		// },
		getProfile: () => HttpClient.get<{ Claims: string[] }>('/auth/me'),
	};
	restaurants = {
		get: (params: GetRestaurantsParams) => {
			const data = HttpClient.get<GetRestaurantsResponse>(API_ENDPOINTS.RESTAURANTS.get, {
				params,
			});
			console.log('RESTAURANTLAR ---', data);
			return data;
		},
		delete: (id: number) => {
			console.log('apiye giden id --', id);
			// const data = HttpClient.delete<number>(API_ENDPOINTS.RESTAURANTS.deleteById(id));
			return HttpClient.post(API_ENDPOINTS.RESTAURANTS.delete, { Id: id });
		},
	};
}
const client = new Client();
export default client;
