export const LOGIN_PATH = '/auth';
export const PATHS_REQUIRING_AUTH = [
	{ path: '/network/join' },
	{ path: '/network', method: 'POST' },
	{ path: '/auth/update-password' }
];

export const doesPathRequireAuth = (path: string, method = 'GET') => {
	return PATHS_REQUIRING_AUTH.some(
		(p) => (p.method ?? method) === method && path.startsWith(p.path)
	);
};
