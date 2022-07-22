import { I_LocalInitialState } from "uselocalstate"

export enum E_Font {
	font1 = "font1",
	font2 = "font2",
	font3 = "font3"
}

export enum E_ColorScheme {
	colorScheme1 = "colorScheme1",
	colorScheme2 = "colorScheme2",
	colorScheme3 = "colorScheme3"
}

export interface I_SettingsTiming {
	pomodoro: number
	long: number
	short: number
}

export interface I_SettingsState extends I_LocalInitialState{
	timing: I_SettingsTiming
	font: E_Font
	color: E_ColorScheme
}

const initialState: I_SettingsState = {
	keyName: "settings",
	color: E_ColorScheme.colorScheme1,
	font: E_Font.font1,
	timing: {
		long: 15,
		pomodoro: 25,
		short: 5
	}
}

export default initialState
