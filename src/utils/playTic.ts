const tick = new Audio('/assets/tic.mp3')
tick.loop = true

export const playTick = (play: boolean)=>{
	if(!play) tick.pause()
	if(play) tick.play()
}
