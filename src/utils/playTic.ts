import { Howl } from "howler";
// const tick = new Audio('/assets/tic.wav')
// tick.loop = true
const tick = new Howl({
	src: ['/assets/kit-tic.mp3'],
	loop: true
}
)



export const playTick = (play: boolean)=>{
	if(!play) tick.pause()
	if(play) tick.play()
}
