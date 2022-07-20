import React, { PropsWithChildren, useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { E_Mode, I_ModeState } from '../../mode/initial';
import { I_TimerState } from '../initial';
import { E_ColorScheme } from '../../settings/initial';
import styles from './style.module.sass'
import ProgressWrapper from './ProgressWrapper/ProgressWrapper';

interface I_Props extends PropsWithChildren{
	mode: I_ModeState,
	timing: {
		pomodoro: number
		long:  number
		short: number
	}
	timer: I_TimerState
	color: E_ColorScheme
	setMode:
	React.Dispatch<React.SetStateAction<I_ModeState>>
	setTimer:
	React.Dispatch<React.SetStateAction<I_TimerState>>
}

function Timer({timer, setTimer, timing, mode, setMode,color}: I_Props) {
	const timeStamp = timing[mode.now] * 60000 + 100
	const [time, setTime] = useState(new Date(timeStamp))
	const onStop = () => {
		const alarm = new Audio('/assets/alarm.mp3')
		alarm.play()
		if  (mode.now === E_Mode.pomodoro){
			if (mode.round >= 3)
				setMode({...mode, now: E_Mode.long, round: 0})
			else
				setMode({...mode, now: E_Mode.short, round: mode.round + 1})
		}else{
			setMode({...mode, now: E_Mode.pomodoro})
		}
	}
	const clickHandler = () => {
		setTimer({
			...timer,
			startStamp: timer.run?null:Date.now(),
			run: !timer.run
		})
		setTime(new Date(timeStamp))
	}
	useEffect(()=>{
		if(timer.run){
		const tick = new Audio('/assets/tick.mp3')
		const interval = setInterval(()=>{
			if (timer.startStamp) {
				const nowStamp = Date.now() - timer.startStamp
				if ( timeStamp - nowStamp < 1000)
					onStop()
				setTime(new Date(timeStamp - nowStamp))
				tick.play()
			}
		}, 500)
		return(()=>{
			clearInterval(interval)
		})
	}
	}, [timer.run])
	useEffect(()=>{
		setTimer({...timer, startStamp: null, run: false})
		setTime(new Date(timeStamp))
	},[mode])
	return (
		<div
		onClick={clickHandler}
		className={`${styles.container} ${color}`}>
			<ProgressWrapper
			color={color} isRun={timer.run}
			time={time} timeStamp={timeStamp}/>
		</div>
	)
}

export default Timer
