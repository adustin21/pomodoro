const tick = new Audio('/assets/tic.wav')
tick.loop = true

export const playTick = (play: boolean)=>{
	if(!play) tick.pause()
	if(play) tick.play()
}
