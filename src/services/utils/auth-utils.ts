import Cookie from "js-cookie";
import {
  AUTH_CRED,
  PERMISSIONS,
  STAFF,
  STORE_OWNER,
  SUPER_ADMIN,
  TOKEN,
} from "./constants";
// import jwt_decode from "jwt-decode";

export const allowedRoles = [SUPER_ADMIN, STAFF];
export const adminAndOwnerOnly = [SUPER_ADMIN, STORE_OWNER];
export const adminOwnerAndStaffOnly = [SUPER_ADMIN, STORE_OWNER, STAFF];
export const adminOnly = [SUPER_ADMIN];
export const ownerOnly = [STORE_OWNER];

// ihtiyac olmayabilir
// export function setAuthCredentials(Token: string) {
//   // Cookie.set(AUTH_CRED, JSON.stringify({ Token, Claims }));
//   Cookie.set(AUTH_CRED, JSON.stringify({ Token }));
// }

export function getAuthCredentials(): {
  Token: string | null;
  Claims: string[] | null;
} {
  const authCred = Cookie.get(AUTH_CRED);
  if (authCred) {
    return JSON.parse(authCred);
  }
  return { Token: null, Claims: null };
}

// kullanimi
// const { permissions } = getAuthCredentials();

// if (hasAccess(["admin"], permissions))
export function hasAccess(
  _allowedRoles: string[],
  _userClaims: string[] | undefined | null
) {
  if (_userClaims) {
    return Boolean(_allowedRoles?.find((aRole) => _userClaims.includes(aRole)));
  }
  return false;
}
export function isAuthenticated(_cookies: any) {
  return (
    !!_cookies[TOKEN] &&
    Array.isArray(_cookies[PERMISSIONS]) &&
    !!_cookies[PERMISSIONS].length
  );
}
