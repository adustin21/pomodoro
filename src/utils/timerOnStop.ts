import { E_Mode, I_ModeState } from "../features/mode/initial"

export const timerOnStop = (
	mode: I_ModeState,
	setMode:
	React.Dispatch<React.SetStateAction<I_ModeState>>
) => {
	const alarm = new Audio('/assets/alarm.mp3')
	alarm.play()
	if  (mode.now === E_Mode.pomodoro){
		if (mode.round >= 3)
			setMode({...mode, now: E_Mode.long, round: 0})
		else
			setMode({...mode, now: E_Mode.short, round: mode.round + 1})
	}else{
		setMode({...mode, now: E_Mode.pomodoro})
	}
}
