import { I_LocalInitialState } from "uselocalstate"

export enum E_Mode {
	short = "short",
	long = "long",
	pomodoro = "pomodoro"

}

export interface I_ModeState extends I_LocalInitialState{
	now: E_Mode
	round: number
}

const initialState: I_ModeState = {
	keyName: "mode",
	now: E_Mode.pomodoro,
	round: 0
}

export default initialState
