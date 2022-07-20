import React, { MouseEventHandler, PropsWithChildren, useState } from 'react'
import { I_SettingsState } from "../../initial";
import styles from './style.module.sass'
import Time from './Time/Time';
import Font from './Font/Font';
import Color from './Color/Color';
import Button from '../../../../ui/Button/Button';
import { formParserCreator } from '../../../../utils/parseForm';
import Header from './Header/Header';

interface I_Props extends PropsWithChildren{
	settings: I_SettingsState,
	setSettings:
	React.Dispatch<React.SetStateAction<I_SettingsState>>,
	open: boolean,
	setOpen:
	React.Dispatch<React.SetStateAction<boolean>>
}

function Popup({setSettings,settings,open,setOpen}: I_Props) {
	const parseForm = formParserCreator(settings, setSettings)
	return (
		<div
		style={{display: open?"":"none"}}
		onClick={e=>setOpen(false)}
		className={styles.container}>
			<form
			onClick={e=>e.stopPropagation()}
			onSubmit={parseForm}>
				<Header setOpen={setOpen}/>
				<hr/>
				<Time timing={settings.timing}/>
				<Font font={settings.font}/>
				<Color color={settings.color}/>
				<Button
				className={`${styles.button} ${settings.color}`}
				handler={()=>{}}>Apply</Button>
			</form>
		</div>
	)
}

export default Popup
