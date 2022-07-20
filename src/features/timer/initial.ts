export interface I_TimerState {
	startStamp: number | null,
	run: boolean
}

const initialState: I_TimerState = {
	startStamp: null,
	run: false
}

export default initialState
