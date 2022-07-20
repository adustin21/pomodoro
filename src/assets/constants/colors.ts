import { E_ColorScheme } from "../../features/settings/initial"

export const COLORS = {
	red: 		"#F87070",
	cyan:		"#70F3F8",
	purple:		"#D881F8",
	blue:		"#D7E0FF",
	portGore:	"#1E213F",
	white:		"#fff",
	grey:		"#eff1fa",
	mirage:		"#161932",
}

export const COLOR_SCHEME_CODES = {
	[E_ColorScheme.colorScheme1]: COLORS.red,
	[E_ColorScheme.colorScheme2]: COLORS.cyan,
	[E_ColorScheme.colorScheme3]: COLORS.purple
}
