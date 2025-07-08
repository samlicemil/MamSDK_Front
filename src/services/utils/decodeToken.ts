import type { DecodedToken } from '@/types';
import { jwtDecode } from 'jwt-decode';

export function decodeToken(token: string): DecodedToken | null {
	try {
		const decoded: any = jwtDecode(token);

		const userId =
			decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
		const email = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
		const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
		const username = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

		return { userId, email, role, username };
	} catch (error) {
		console.log(error);
		return null;
	}
}
