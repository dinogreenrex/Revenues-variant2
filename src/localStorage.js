export const loadState = (model) => {
	try {
		const serializedState = localStorage.getItem(`${model}`);
		if (serializedState === null){
			localStorage.setItem(`${model}`, JSON.stringify([]));
			return localStorage.getItem(`${model}`);
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export const saveState = (model,state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(`${model}`,serializedState)
	} catch (err) {
		//How to Implement Errors...
	}
}