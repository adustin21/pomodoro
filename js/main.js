class EventObserver {
	constructor () {
		this.subscribers = [];
	}

	subscribe (f) {
		this.subscribers.push(f);
	}

	unsubscribe (f) {
		this.subscribers.filter(subs => subs != f);
	}

	broadcast (data) {
		this.subscribers.forEach(subs => subs(data));
	}
}
class Task {
	constructor (pomodoro, comment = "yet anather task"){
		this.pomodoro = pomodoro;
		this.comment = comment;
	}
	time = Date.now() + 1500000;
	run = 0;
}

let STORE = {
	default: new Task(1),
	nowTask: 0,
}

let		t_change = (time) => {
	t_min.innerText = (a = Math.floor(time / 60000)) < 10 ?
	"0" + a : a;
	t_sec.innerText = (a = Math.floor(time % 60000 / 1000)) < 10 ?
	"0" + a : a;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}
// let		procentVisualisation = (procent) => {
// 	let el = document.getElementsByClassName('startButton')[0];
// 	el.style.background = `linear-gradient(90deg, bf3721 ${procent}%, #258039 ${procent}%)`;
// }

let		startTime = () => {
	let	nowDate = Date.now();
	if (STORE.nowTask == 0)
		STORE.nowTask = new Task(1);
	else if (!STORE.nowTask.run)
		STORE.nowTask.time = Date.now() + 1500000;
	STORE.nowTask.run = 1;
	if (nowDate >= STORE.nowTask.time){
		STORE.nowTask.run = 0;
		alert("time to break");
	}else{
		t_observer.broadcast((STORE.nowTask.time - nowDate));
		setTimeout(() => startTime(), 500);
	}
}

const	t_imer = document.getElementById("timer");
const	t_min = document.getElementById("min");
const	t_sec = document.getElementById("sec");
const	t_observer = new EventObserver;

t_observer.subscribe(t_change);

