import React, { PropsWithChildren } from 'react'
import IconButton from '../../../../../ui/IconButton/IconButton'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	setOpen:
	React.Dispatch<React.SetStateAction<boolean>>
}

function Header({setOpen}: I_Props) {
	return (
		<div className={styles.container}>
			<h2>Settings</h2>
			<IconButton title='close'
			className={styles.button}
			handler={()=>{setOpen(false)}} />
		</div>
	)
}

export default Header
