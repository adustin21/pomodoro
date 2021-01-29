var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

let openRequest = indexedDB.open("pomodoro", 1);

openRequest.onupgradeneeded = () => {
	let DB = openRequest.result;
}
openRequest.onerror = () => {
	console.log("error: " + openRequest.error)
}
openRequest.onsuccess = () => {
	console.log("succesful");
}
