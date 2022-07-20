import React, { PropsWithChildren } from 'react'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{}

function Logo({}: I_Props) {
	return (
		<div className={styles.container}>
			<h1>pomodoro</h1>
		</div>
	)
}

export default Logo
