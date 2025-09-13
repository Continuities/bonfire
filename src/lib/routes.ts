export const LOGIN_PATH = '/auth';
export const PATHS_REQUIRING_AUTH = ['/network/join'];

export const doesPathRequireAuth = (path: string) => {
	return PATHS_REQUIRING_AUTH.some((p) => path.startsWith(p));
};
