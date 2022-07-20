import React, { PropsWithChildren, useId } from 'react'
import { E_ColorScheme, E_Font } from '../../../initial'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	color: E_ColorScheme
}

function Color({color}: I_Props) {
	const id = useId()
	const inputs =
	[E_ColorScheme.colorScheme1,E_ColorScheme.colorScheme2,E_ColorScheme.colorScheme3]
	.map((nowColor, i) =>(
		<React.Fragment key={id+i}>
			<input
			defaultChecked={color===nowColor}
			name='color' value={nowColor} type="radio" id={id+i}/>
			<label htmlFor={id+i} className={nowColor}></label>
		</React.Fragment>
	))
	return (
		<fieldset className={styles.container}>
			<legend><h4>Color</h4></legend>
			{inputs}
		</fieldset>
	)
}

export default Color
