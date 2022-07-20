import React, { PropsWithChildren } from 'react'
import { E_Font } from '../../features/settings/initial'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{}

function Selection({}: I_Props) {
	return (
		<fieldset className={styles.container}>
			<legend><h4>Font</h4></legend>
			<input value={E_Font.font1} type="ratio"/>
			<input value={E_Font.font2} type="ratio"/>
			<input value={E_Font.font3} type="ratio"/>
		</fieldset>
	)
}

export default Selection
