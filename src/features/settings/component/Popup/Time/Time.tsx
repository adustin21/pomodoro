import React, { PropsWithChildren, useState } from 'react'
import Input from '../../../../../ui/Input/Input'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	timing: {
		pomodoro: number,
		long: number,
		short: number
	}
}

function Time({timing}: I_Props) {
	const [pomodoro, setPomodoro] = useState(timing.pomodoro)
	const [long, setLong] = useState(timing.long)
	const [short, setShort] = useState(timing.short)
	return (
		<fieldset className={styles.container}>
			<legend><h4>time (minutes)</h4></legend>
			<Input
			className={styles.input}
			value={pomodoro}
			setValue={setPomodoro}
			name='pomodoro'
			/>
			<Input
			className={styles.input}
			value={short}
			setValue={setShort}
			name='short break'
			/>
			<Input
			className={styles.input}
			value={long}
			setValue={setLong}
			name='long break'
			/>
		</fieldset>
	)
}

export default Time
