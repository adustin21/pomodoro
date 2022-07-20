import React, { PropsWithChildren } from 'react'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	className?: string,
	title: string,
	handler:
	React.MouseEventHandler<HTMLButtonElement>
}

function IconButton({className,handler,title}: I_Props) {
	return (
		<button
		title={title}
		onClick={handler}
		className={`${styles.container} ${className}`}>
		</button>
	)
}

export default IconButton
