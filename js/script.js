function playGame(1,2,3){
  playerInput();
  clearMessages();
 function getMoveName(moveNumber){
  if(moveNumber == 1){
    return 'kamień';
  } else if(moveNumber == 2){
    return 'papier';
  } else if(moveNumber == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + moveNumber + '.');
    return 'nieznany ruch';
  }
 }
 function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
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
 let randomNumber = Math.floor(Math.random() * 3 + 1); //1 | 2 | 3
 let computerMove = getMoveName(randomNumer); //"kamień" | "papier" | "nożyce"
 printMessage('Mój ruch to: ' + computerMove);

 //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
 let playerMove = getMoveName(playerInput);

 displayResult(playerMove, computerMove);
}
function buttonClicked(){
  printMessage('zagrałeś' + playerMove);
}

let playRock = document.getElementById('kamień');
playRock.addEventListener('click', buttonClicked);

let playPaper = document.getElementById('papier');
playPaper.addEventListener('click', buttonClicked);

let playScrissors = document.getElementById('nożyce');
playRock.addEventListener('click', buttonClicked);
