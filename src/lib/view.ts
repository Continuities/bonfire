export const marginStyle = (m: View.MarginProps): string => {
	const list = [];
	if (m.margin !== undefined) {
		list.push(`margin: ${m.margin}rem;`);
	}
	if (m.mx !== undefined) {
		list.push(`margin-left: ${m.mx}rem; margin-right: ${m.mx}rem;`);
	}
	if (m.my !== undefined) {
		list.push(`margin-top: ${m.my}rem; margin-bottom: ${m.my}rem;`);
	}
	if (m.mt !== undefined) {
		list.push(`margin-top: ${m.mt}rem;`);
	}
	if (m.mr !== undefined) {
		list.push(`margin-right: ${m.mr}rem;`);
	}
	if (m.mb !== undefined) {
		list.push(`margin-bottom: ${m.mb}rem;`);
	}
	if (m.ml !== undefined) {
		list.push(`margin-left: ${m.ml}rem;`);
	}
	return list.join(' ');
};
