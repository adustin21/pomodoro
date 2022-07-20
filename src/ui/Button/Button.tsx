import React, { PropsWithChildren } from 'react'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	type?: 'button' | 'reset' | 'submit'
	className?: string
	handler: React.MouseEventHandler<HTMLButtonElement>
}

function Button({className, handler, children, type}: I_Props) {
	return (
		<button
		type={type?type:'submit'}
		onClick={handler}
		className={`${styles.container}
		${className?className:""}`}>

			{children}
		</button>
	)
}

export default Button
