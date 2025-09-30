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
	if (city) {
		filter.city = city;
	}
	const stateCode = search.get('stateCode');
	if (stateCode) {
		filter.stateCode = stateCode;
	}
	const countryCode = search.get('countryCode');
	if (countryCode) {
		filter.countryCode = countryCode;
	}
	return filter;
};
