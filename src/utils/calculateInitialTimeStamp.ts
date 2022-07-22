import { E_Mode } from "../features/mode/initial"
import { I_SettingsTiming } from "../features/settings/initial"

export const calculateInitialTimeStamp = (
	(
	timing: I_SettingsTiming,
	nowMode: E_Mode
) => timing[nowMode] * 60000 + 100)
