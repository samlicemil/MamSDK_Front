import { decodeToken } from './decodeToken';

let setDecodedTokenExternally: ((decoded: any) => void) | null = null;

export function setDecodedTokenSetter(fn: (decoded: any) => void) {
	setDecodedTokenExternally = fn;
}

export function updateDecodedToken(token: string) {
	if (!setDecodedTokenExternally) return;
	const decoded = decodeToken(token);
	if (decoded) setDecodedTokenExternally(decoded);
}
