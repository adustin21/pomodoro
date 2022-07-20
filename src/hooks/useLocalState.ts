import React, { useState } from "react";

export interface I_LocalInitialState {
	keyName: string
}

export const useLocalState =
<S extends I_LocalInitialState>(initialState: S): [S, React.Dispatch<React.SetStateAction<S>>] => {
	const savedState = localStorage.getItem(initialState.keyName)
	const [state, setState] = useState<S>(savedState?JSON.parse(savedState):initialState)
	const writeAndSet: React.Dispatch<React.SetStateAction<S>> =
	(newState) => {
		const stringState = JSON.stringify(newState)
		localStorage.setItem(initialState.keyName, stringState)
		setState(newState)
	}
	return [state, writeAndSet]
}
