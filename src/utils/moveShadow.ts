import { E_Mode } from "../features/mode/initial";

export const moveShadow = (nowMode: E_Mode): number => {
	switch (nowMode) {
		case E_Mode.pomodoro:
			return 0
		case E_Mode.short:
			return 1
		case E_Mode.long:
			return 2
		default:
			return 0
	}
}
