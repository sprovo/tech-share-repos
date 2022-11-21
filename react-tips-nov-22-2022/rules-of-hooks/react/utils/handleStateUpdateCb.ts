export function handleStateUpdateCb(initialState) {
	if (typeof initialState === 'function') {
		return initialState();
	} else {
		return initialState;
	}
}