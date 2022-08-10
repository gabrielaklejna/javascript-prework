function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
let playerMove= 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
