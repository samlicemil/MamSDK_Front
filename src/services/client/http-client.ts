import { AUTH_TOKEN_KEY } from '@/constants/index.constant';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const Axios = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 5000000,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

Axios.interceptors.request.use((config) => {
	const token = Cookies.get(AUTH_TOKEN_KEY);
	console.log('API İsteği:', config.baseURL + config.url);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// Yeni token geldiğinde kuyruktaki istekleri tetiklemek için
function onRefreshed(token: string) {
	refreshSubscribers.forEach((callback) => callback(token));
	refreshSubscribers = [];
}

// Kuyruğa istek ekleme
function subscribeTokenRefresh(cb: (token: string) => void) {
	refreshSubscribers.push(cb);
}

// Refresh token ile yeni access token almak için fonksiyon
async function refreshAccessToken(): Promise<string> {
	const response = await Axios.post('/auth/refresh-token', {}, { withCredentials: true });
	console.log('newToken', response.data.Data);
	const newToken = response.data.Data.Token;
	Cookies.set(AUTH_TOKEN_KEY, newToken, { secure: true, sameSite: 'Strict' });

	return newToken;
}


// TODO Burasi duzeiltilecek
// Axios.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const originalRequest = error.config;
// 		const status = error.response?.status;

// 		if (status === 401 && !originalRequest._retry) {
// 			if (isRefreshing) {
// 				// Token yenileme devam ederken yeni istekleri beklet
// 				return new Promise((resolve, reject) => {
// 					subscribeTokenRefresh((token) => {
// 						originalRequest.headers.Authorization = `Bearer ${token}`;
// 						resolve(Axios(originalRequest));
// 					});
// 				});
// 			}

// 			originalRequest._retry = true;
// 			isRefreshing = true;

// 			try {
// 				const newToken = await refreshAccessToken();
// 				isRefreshing = false;

// 				originalRequest.headers.Authorization = `Bearer ${newToken}`;
// 				onRefreshed(newToken);

// 				return Axios(originalRequest);
// 			} catch (refreshError) {
// 				isRefreshing = false;

// 				Cookies.remove(AUTH_TOKEN_KEY);
// 				//  queryString degisebilir ek olarak claimsleri silmede eklenebilir
// 				window.location.href = '/login?error=unauthorized';

// 				return Promise.reject(refreshError);
// 			}
// 		}

// 		if (status === 403 || error.response?.data?.message === 'auth error') {
// 			Cookies.remove(AUTH_TOKEN_KEY);
// 			window.location.href = '/login?error=forbidden';
// 		}

// 		return Promise.reject(error);
// 	},
// );

export class HttpClient {
	// static async get<T>(url: string, params?: unknown) {
	// 	const response = await Axios.get<T>(url, { params });
	// 	return response.data;
	// }

	static async get<T>(url: string, config?: AxiosRequestConfig) {
		const response = await Axios.get<T>(url, config);
		return response.data;
	}

	static async post<T>(url: string, data: unknown, options?: any) {
		const response = await Axios.post<T>(url, data, options);
		return response.data;
	}

	static async put<T>(url: string, data: unknown) {
		const response = await Axios.put<T>(url, data);
		return response.data;
	}

	static async delete<T>(url: string) {
		const response = await Axios.delete<T>(url);
		return response.data;
	}
}
