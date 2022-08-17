let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);


printMessage('Mój ruch to: ' + argcomputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier')||
    ( argComputerMove == 'papier' && argPlayerMove == 'nożyce')||
    ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove){
    printMessage('Remis')
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
let argComputerMove = getMoveName(argComputerMove);
let argPlayerMove = getMoveName(argPlayerMove);

printMessage('Twój ruch to: ' + argPlayerMove);

let game = displayResult('.');