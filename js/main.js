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
	time = 0;
	run = 0;
	done = 0;
	status = "pomo";
	needlong = 0;
	set_time(){
		switch (this.status) {
			case "pomo":
				this.time = Date.now() + SETTINGS.pomo;
				break ;
			case "break":
				this.time = Date.now() +  SETTINGS.break;
				break ;
			case "long":
				this.time = Date.now() +  SETTINGS.long;
				break ;
			case "complete":
				return (1);
			default:
				break;
		}
	}
	get_time(){
		switch (this.status) {
			case "pomo":
				return SETTINGS.pomo;
			case "break":
				return SETTINGS.break;
			case "long":
				return SETTINGS.long;
			case "complete":
				return 0;
			default:
				break;
		}
	}
	change_status(){
		if (this.status == "pomo"){
			this.status = this.done % 4 == 0 ?
			"long" : "break";
			this.status = this.done >= this.pomodoro ?
			"complete" : this.status;
		}else {
			this.status = "pomo";
		}
	}
}

let STORE = {
	default:	new Task(1),
	nowTask:	0,
}
let SETTINGS = {
	pomo: 1500000,
	break: 300000,
	long: 900000,
}
let		t_change = (task) => {
	t_min.innerText = (a = Math.floor((task.time - Date.now()) / 60000)) >= 10 ?
	a : a > 0 ? "0" + a : "00";
	t_sec.innerText = (a = Math.floor((task.time - Date.now())  % 60000 / 1000)) >= 10 ?
	a : a > 0 ? "0" + a : "00";
}

let		t_look = (task) => {
	taskprocent = ((task.time - Date.now()) * 100 / task.get_time());
	console.log( taskprocent);
	pomodoroprocent = 0;
	document.querySelectorAll(".switcher").forEach(element => {
		element.style.background = `darkred`;
	});
	switch (task.status) {
		case "pomo":
			document.querySelector(".switcher.active").classList.remove("active");
			document.getElementById("workButton").classList.add("active");
			break;
		case "break":
			document.querySelector(".switcher.active").classList.remove("active");
			document.getElementById("breakButton").classList.add("active");
			break;
		case "long":
			document.querySelector(".switcher.active").classList.remove("active");
			document.getElementById("longButton").classList.add("active");
			break;
		case "complete":
			document.querySelectorAll(".switcher").forEach(element => {
				element.style.background = `darkred`;
			});
			break
		default:
			t_imer.style.color = "darkred";
			break;
	}
	document.querySelectorAll(".switcher.active").forEach(element => {
		element.style.background = `linear-gradient(-90deg,  #258039 ${taskprocent}%, darkred ${taskprocent}%`;
	});
	document.querySelector(".taskNow").style.background = "#258039";
	if (task.time == 0){
		document.querySelectorAll(".switcher.active").forEach(element => {
			element.style.background = `#258039`;
		});
	}else
		document.querySelector(".startButton").innerText = "stop";
}

let		t_start = () => {
	nowDate = Date.now();
	if (STORE.nowTask == 0){
		STORE.nowTask = new Task(2);
		STORE.nowTask.set_time();
	}
	else if (!STORE.nowTask.run)
		STORE.nowTask.set_time();
	STORE.nowTask.run = 1;
	if (nowDate >= STORE.nowTask.time){
		if (STORE.nowTask.status == "pomo") {
			STORE.nowTask.done++;
			STORE.nowTask.change_status();
			if (STORE.nowTask.status == "complete"){
				t_observer.broadcast((STORE.nowTask));
				return ;
			}

			STORE.nowTask.set_time();
		}else{
			STORE.nowTask.change_status();
			STORE.nowTask.set_time();
		}
	}
	t_observer.broadcast((STORE.nowTask));
	setTimeout(() => t_start(), 500);
}

let		s_open = () => {
	s_render();
}

let		s_render = () => {
	let		setiingWindow = document.getElementById("settingWindow");
	let		setiingButton= document.getElementById("settingButton");

	settingWindow.style.display = settingWindow.style.display == "" ? "flex" : "";
	settingButton.style.transform = settingWindow.style.transform == "" ? "" : "";
}

let		getUrlVars = () => {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

const	t_imer = document.getElementById("timer");
const	t_min = document.getElementById("min");
const	t_sec = document.getElementById("sec");
const	s_etting = document.getElementById("settingButton");
const	t_observer = new EventObserver;

t_observer.subscribe(t_change);
t_observer.subscribe(t_look);

t_look(STORE.default);

s_etting.addEventListener("click", s_open);

