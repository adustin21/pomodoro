import React, { ChangeEvent, MouseEventHandler, PropsWithChildren } from 'react'
import styles from './style.module.sass'

interface I_Props{
	className?: string
	name: string
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
}

function Input({value, className, name, setValue}: I_Props) {
	const controllersHandler= (e: any) => {
		const newValue = value +
		Number(e.target.getAttribute('data-num'))
		if(newValue<1||newValue>60) return ;
		setValue(newValue)
	}
	const inputHandler = (e:  any) => {
		const numInput = Number(e.target.value)
		if(numInput===NaN) return;
		if(numInput>60) return;
		if(numInput<0) return;
		setValue(numInput)
	}
	const blurHandler = () => {
		if (value>0) return;
		setValue(1)
	}
	return (
		<div
		className={`${styles.container} ${className}`}>
		<label htmlFor={name}>{name}</label>
		<div
		className={styles.inputWrapper}>
			<input
			onChange={inputHandler}
			onBlur={blurHandler}
			value={value.toString()}
			type="number"
			id={name} />
			<div
			onClick={controllersHandler}
			className={styles.controllers}>
			<div data-num={1} className={styles.up}></div>
			<div data-num={-1}className={styles.down}></div>
			</div>
		</div>
		</div>
	)
}

export default Input
