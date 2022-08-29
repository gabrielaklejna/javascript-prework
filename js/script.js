function playGame(playerInput){
  
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

  /*
   function getMoveName(moveNumber){
    ...
  } 
  ->
  const getMoveName = function(moveNumber){\
    ...
  }
  
  */


 function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if((argComputerMove == 'kamień' && argPlayerMove == 'papier')||
    ( argComputerMove == 'papier' && argPlayerMove == 'nożyce')||
    ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
      printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove){
    printMessage('Remis')
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
  }

  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1); //1 | 2 | 3
  const computerMove = getMoveName(randomNumber); //"kamień" | "papier" | "nożyce"
  printMessage('Mój ruch to: ' + computerMove);

  const playerMove = getMoveName(playerInput);

  displayResult(playerMove, computerMove);
}

const playRock = document.getElementById('playRock');
playRock.addEventListener('click', function() {
  playGame(1);
});

const playPaper = document.getElementById('playPaper');
playPaper.addEventListener('click', function() {
  playGame(2);
});

const playScrissors = document.getElementById('playScrissors');
playScrissors.addEventListener('click', function() {
  playGame(3);
});