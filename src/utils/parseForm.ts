import { I_SettingsState } from "../features/settings/initial";

export const formParserCreator = (
	settings: I_SettingsState,
	setSettings:
	React.Dispatch<React.SetStateAction<I_SettingsState>>
) => {
	return (e: any) => {
	const trg = e.target
	e.preventDefault()
	e.stopPropagation()
	setSettings({
		...settings,
		timing:
		{pomodoro: trg.pomodoro.value,
		 long:trg['long break'].value,
		 short: trg['short break'].value},
		color: trg.color.value,
		font: trg.font.value
	})
	}
}
