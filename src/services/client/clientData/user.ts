import { useState } from 'react';
import client from './client';
import { useAtom } from 'jotai';
import {
	authorizationAtom,
	claimsAtom,
	decodedTokenAtom,
	refreshTokenAtom,
	tokenAtom,
} from '../store/authorization-atom';
import { MUTATION_KEYS } from './query-mutaion-keys';
import { decodeToken } from './utils/decodeToken';
import { useMutation } from '@tanstack/react-query';
import { useToken } from '@/hooks/use-token';

export function useLogin() {
	const { setToken, setRefreshToken, setUserId, setUsername, setUserRole } = useToken();
	const [, setTokenAtom] = useAtom(tokenAtom);
	const [, setRefreshTokenAtom] = useAtom(refreshTokenAtom);
	const [, setAuthorized] = useAtom(authorizationAtom);
	// const [, setClaimsAtom] = useAtom(claimsAtom);
	const [, setDecodedTokenAtom] = useAtom(decodedTokenAtom);

	const [serverError, setServerError] = useState<string | null>(null);

	const { mutate, mutateAsync, isPending } = useMutation({
		mutationKey: MUTATION_KEYS.LOGIN,
		mutationFn: client.users.login,
		onMutate: (variables) => {
			console.log('Gönderilen veri:', variables);
		},
		onSuccess: (res) => {
			if (!res.Data.Token) {
				setServerError('error-credential-wrong');
				return;
			}

			// TODO !!! refresh Token backendden httpOnly cookie ile gelecek
			if (!res.Data.RefreshToken) {
				setServerError('error-credential-wrong');
				return;
			}
			setRefreshTokenAtom(res.Data.RefreshToken);
			setRefreshToken(res.Data.RefreshToken);

			const decoded = decodeToken(res.Data.Token);
			// console.log(decoded);
			if (decoded) {
				setDecodedTokenAtom(decoded);
				setUserId(decoded.userId);
				setUsername(decoded.username);
				setUserRole(decoded.role);
			}

			setToken(res.Data.Token, res.Data.Expiration); // cookie-ye

			setTokenAtom(res.Data.Token); // state-e de ekledik uygulama ici hizli erisim icin
			// setAuthCredentials(res.Data.Token);
			// setClaimsAtom(res.Data.Claims);
			setAuthorized(true);
		},
		onError: (error: Error) => {
			console.log('login error=', error.message);
		},
		onSettled: () => {
			// TODO sonradan ekleme yapilabilir
		},
	});

	return { mutate, mutateAsync, isPending, serverError, setServerError };
}

export function useRegister() {
	const { setToken } = useToken();
	const [, setAuthorized] = useAtom(authorizationAtom);
	const { mutate, isPending } = useMutation({
		mutationKey: MUTATION_KEYS.REGISTER,
		mutationFn: client.users.register,
		onSuccess: (data) => {
			if (data.Data.Token && data?.Data.Claims?.length) {
				setToken(data.Data.Token);
				setAuthorized(true);
				// closeModal();
				return;
			}
			if (!data.Data.Token) {
				// toast.error(`${t('error-credential-wrong')}`);
			}
		},
		onError: (error: Error) => {
			console.log(error.message);
		},
		onSettled: () => {
			// TODO sonradan ekleme yapilabilir
		},
	});

	return { mutate, isPending };
}

// export function useLogout() {
// 	const { removeToken, removeRefreshToken } = useToken();
// 	const [, setAuthorized] = useAtom(authorizationAtom);
// 	const [, setToken] = useAtom(tokenAtom);
// 	// const [, setClaims] = useAtom(claimsAtom);

// 	function logout() {
// 		removeToken();
// 		removeRefreshToken();
// 		setToken(null);
// 		// setClaims([]);
// 		setAuthorized(false);
// 		window.location.href = '/login';
// 	}
// 	return { logout };
// }

export function useLogout() {
	const { removeToken, removeRefreshToken, removeUserId, removeUsername, removeUserRole } =
		useToken();

	const [, setAuthorized] = useAtom(authorizationAtom);
	const [, setToken] = useAtom(tokenAtom);
	const [, setRefreshToken] = useAtom(refreshTokenAtom);
	const [, setDecodedToken] = useAtom(decodedTokenAtom);
	// const [, setClaims] = useAtom(claimsAtom);

	function logout() {
		removeToken();
		removeRefreshToken();
		removeUserId();
		removeUsername();
		removeUserRole();

		setToken(null);
		setRefreshToken(null);
		setDecodedToken(null);
		// setClaims([]);

		setAuthorized(false);

		window.location.href = '/login';
	}

	return { logout };
}
