import React, { PropsWithChildren, useId } from 'react'
import { E_Font } from '../../../initial'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	font: E_Font
}

function Font({font}: I_Props) {
	const id = useId()
	const inputs =
	[E_Font.font1,E_Font.font2,E_Font.font3].map((nowFont, i) =>(
		<React.Fragment key={id+i}>
			<input
			defaultChecked={font===nowFont}
			name='font' value={nowFont} type="radio" id={id+i}/>
			<label htmlFor={id+i} className={nowFont}>Aa</label>
		</React.Fragment>
	))
	return (
		<fieldset className={styles.container}>
			<legend><h4>Font</h4></legend>
			{inputs}
		</fieldset>
	)
}

export default Font
