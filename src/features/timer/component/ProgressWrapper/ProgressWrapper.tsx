import React, { PropsWithChildren } from 'react'
import {
	CircularProgressbarWithChildren as ProgressBar ,
} from 'react-circular-progressbar';
import { COLORS, COLOR_SCHEME_CODES } from '../../../../assets/constants/colors'
import dateFormat from "dateformat";
import { E_ColorScheme } from '../../../settings/initial';
import styles from './style.module.sass'

interface I_Props extends PropsWithChildren{
	color: E_ColorScheme,
	time: Date,
	timeStamp: number,
	isRun: boolean
}

function ProgressWrapper({color, time, timeStamp, isRun}: I_Props) {
	const progressBarStyles = {
		trail:{
			stroke: COLORS.portGore,
			strokeWidth: 3
		},
		path: {
			stroke: COLOR_SCHEME_CODES[color],
			strokeWidth: 3,
			transitionDuration: '.5s',
			transitionTimingFunction: 'linear'
		}
	}
	return (
		<div className={styles.container}>
			<ProgressBar
			styles={progressBarStyles}
			value={time.valueOf() / timeStamp * 100}>
				<h1>{dateFormat(time, "MM:ss")}</h1>
				<button>
					<h3>{isRun?'stop':'start'}</h3>
				</button>
			</ProgressBar>
		</div>
	)
}

export default ProgressWrapper
