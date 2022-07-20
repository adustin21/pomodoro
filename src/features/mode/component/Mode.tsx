import React, { PropsWithChildren } from 'react'
import { moveShadow } from '../../../utils/moveShadow'
import { E_Mode, I_ModeState} from '../initial'
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	color: string
	mode: I_ModeState
	setMode:
	React.Dispatch<React.SetStateAction<I_ModeState>>
}

function Mode({mode,setMode,color}: I_Props) {
	const clickHandler = (e:any)=>{
		setMode({...mode, now: e.target.name})
	}
	const shadowPosition = moveShadow(mode.now)
	const shadowStyle = {
		left: 33.3 * shadowPosition + "%"
	}
	return (
		<div
		onClick={clickHandler}
		className={styles.container}>
			<div style={shadowStyle}
			className={`${styles.shadow} ${color}`}/>
			<button
			className={mode.now===E_Mode.pomodoro?styles.active:""}
			name={E_Mode.pomodoro}>pomodoro</button>
			<button
			className={mode.now===E_Mode.short?styles.active:""}
			name={E_Mode.short}>short break</button>
			<button
			className={mode.now===E_Mode.long?styles.active:""}
			name={E_Mode.long}>long break</button>
		</div>
	)
}

export default Mode
