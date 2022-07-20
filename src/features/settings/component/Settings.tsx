import React, { PropsWithChildren, useState } from 'react'
import IconButton from '../../../ui/IconButton/IconButton'
import { I_SettingsState } from '../initial'
import Popup from './Popup/Popup'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	settings: I_SettingsState,
	setSetting:
	React.Dispatch<React.SetStateAction<I_SettingsState>>
}

function Settings({setSetting,settings}: I_Props) {
	const [open, setOpen] = useState(false)
	return (
		<React.Fragment>
			<Popup
			settings={settings}
			setSettings={setSetting}
			open={open}
			setOpen={setOpen}/>
			<IconButton
			handler={()=>{setOpen(true)}}
			title="settings"
			className={styles.settings_toggler}/>
		</React.Fragment>
	)
}

export default Settings
