import React, { PropsWithChildren, useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { I_ModeState } from '../../mode/initial';
import { I_TimerState } from '../initial';
import { E_ColorScheme, I_SettingsTiming } from '../../settings/initial';
import styles from './style.module.sass'
import ProgressWrapper from './ProgressWrapper/ProgressWrapper';
import { playTick } from '../../../utils/playTic';
import { resetTimer } from '../../../utils/resetTimer';
import { calculateInitialTimeStamp } from '../../../utils/calculateInitialTimeStamp';
import { timerOnStop } from '../../../utils/timerOnStop';

interface I_Props extends PropsWithChildren{
	mode: I_ModeState,
	timing:	I_SettingsTiming
	timer: I_TimerState
	color: E_ColorScheme
	setMode:
	React.Dispatch<React.SetStateAction<I_ModeState>>
	setTimer:
	React.Dispatch<React.SetStateAction<I_TimerState>>
}

function Timer({timer, setTimer, timing, mode, setMode, color}: I_Props) {
	const [time, setTime] =
	useState(new Date(calculateInitialTimeStamp(timing, mode.now)))
	const clickHandler = () => {
		setTimer({
			...timer,
			startStamp: timer.run?null:Date.now(),
			run: !timer.run
		})
		setTime(new Date(calculateInitialTimeStamp(timing, mode.now)))
	}
	useEffect(()=>{
		const intialTimeStamp = calculateInitialTimeStamp(timing, mode.now)
		if(timer.run){
		const interval = setInterval(()=>{
			if (timer.startStamp) {
				const nowStamp = Date.now() - timer.startStamp
				if (intialTimeStamp - nowStamp < 1000)
					timerOnStop(mode, setMode)
				setTime(new Date(intialTimeStamp - nowStamp))
			}
		}, 500)
		return(()=>{
			clearInterval(interval)
		})
	}
	}, [mode, setMode, timer.run, timer.startStamp, timing])
	useEffect(()=>{
		playTick(timer.run)
	}, [timer.run])
	useEffect(()=>{
		resetTimer(timing, mode.now, setTimer, setTime)
	}, [mode.now, setTime, setTimer, timing])
	return (
		<div
		onClick={clickHandler}
		className={`${styles.container} ${color}`}>
			<ProgressWrapper
			color={color} isRun={timer.run}
			time={time} timeStamp={calculateInitialTimeStamp(timing, mode.now)}/>
		</div>
	)
}

export default Timer
