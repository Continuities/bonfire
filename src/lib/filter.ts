export const CommunityFilter = (search: URLSearchParams): Filter.CommunityFilter => {
	const filter: Filter.CommunityFilter = {};
	const uses_tool = search.get('uses_tool');
	if (uses_tool) {
		filter.uses_tool = uses_tool;
	}
	const with_valor = search.get('with_valor');
	if (with_valor) {
		filter.with_valor = with_valor;
	}
	const limit = search.get('limit');
	if (limit) {
		filter.limit = parseInt(limit);
	}
	const city = search.get('city');
	const stateCode = search.get('stateCode');
	const countryCode = search.get('countryCode');
	if (city || stateCode || countryCode) {
		filter.location = {
			city,
			stateCode,
			countryCode: countryCode || ''
		};
	}
	return filter;
};

export const CommunityFilterURL = (filter: Filter.CommunityFilter, base?: string) => {
	const url = new URL('/network', base);
	if (filter.uses_tool) {
		url.searchParams.append('uses_tool', filter.uses_tool);
	}
	if (filter.with_valor) {
		url.searchParams.append('with_valor', filter.with_valor);
	}
	if (filter.limit) {
		url.searchParams.append('limit', String(filter.limit));
	}
	if (filter.location) {
		if (filter.location.city) {
			url.searchParams.append('city', filter.location.city);
		}
		if (filter.location.stateCode) {
			url.searchParams.append('stateCode', filter.location.stateCode);
		}
		if (filter.location.countryCode) {
			url.searchParams.append('countryCode', filter.location.countryCode);
		}
	}
	return url;
};
