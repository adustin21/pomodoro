import { E_Mode } from "../features/mode/initial"
import { I_SettingsTiming } from "../features/settings/initial"
import { I_TimerState } from "../features/timer/initial"
import { calculateInitialTimeStamp } from "./calculateInitialTimeStamp"

export const resetTimer = (
	timing: I_SettingsTiming,
	nowMode: E_Mode,
	setTimer:
	React.Dispatch<React.SetStateAction<I_TimerState>> ,
	setTime:
	React.Dispatch<React.SetStateAction<Date>>
)=>{
	const timeStamp = calculateInitialTimeStamp(timing, nowMode)
	setTimer({startStamp: null, run: false})
	setTime(new Date(timeStamp))
}
