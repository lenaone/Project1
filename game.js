let lineFirstDiv = document.querySelector('.line1');
let lineSecondDiv = document.querySelector('.line2');
let lineThirdDiv = document.querySelector('.line3');
let boardNums = document.querySelectorAll('.num');
let playBtn = document.querySelector('.playButton');
let resetBtn = document.querySelector('.resetButton');
let showUserOneWin = document.querySelector('.userOneWin');
let showUserTwoWin = document.querySelector('.userTwoWin');
let showUserDraw = document.querySelector('.userDraw');
let showUserOneScore = document.querySelector('.userOneScore');
let showUserTwoScore = document.querySelector('.userTwoScore');
let p1score = 0;
let p2score = 0;

const winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let p1moves = [];
let p2moves = [];

// GO BACK TO CODE AND MAKE BETTER CODE THEN NOW!! TRY IT

function isTargetAlreadyClicked(target) {
  if (target.classList.contains('userOneChanged') || target.classList.contains('userTwoChanged')) {
      return true
  } else {
      return false
  }
}

function checkWinner() {
  let userWon = false;
  let players = [
    { 
      number: 1, 
      moves: p1moves 
    },
    { 
      number: 2,
      moves: p2moves 
    }
  ];

  players.forEach( function(player) {
    winningArray.forEach( function(combination){
      let matchedMoves = [];
      combination.forEach( function(element) { // [1,2,4]
        if (player.moves.includes(element)) {
          matchedMoves.push(element);
        }
        if ( matchedMoves.length === 3 ) {
          userWins(player);
          userWon = true
        }
      }) // for - all 3 elements of winningArray item
    })
  });
  return userWon;
}

function disableGame() {
  boardNums.forEach( function(elem) {
    elem.removeEventListener('click', switchColor);
  })
}
function enableGame() {
  boardNums.forEach( function(elem) {
    elem.addEventListener('click', switchColor);
  })
}

function userWins(player) {
  disableGame()
  if (player.number === 1) {
    showUserOneWin.classList.remove('hidden');
  } else {
    showUserTwoWin.classList.remove('hidden');
  }
  userScoreCount()
}

function userScoreCount() {
  if (event.target.classList.contains('userOneChanged')) {
    p1score++;
    showUserOneScore.textContent = p1score;
  }
  else {
    p2score++;
    showUserTwoScore.textContent = p2score;
  }
}

function switchColor(event) {
  if (isTargetAlreadyClicked(event.target)) {
    return
  }

  // work out which player
  let user = document.querySelectorAll('.userOneChanged');
  let user2 = document.querySelectorAll('.userTwoChanged');
  let count = user.length + user2.length; 

  //   plyaer 1 move
  if (count % 2 === 0) {
    event.target.classList.add('userOneChanged');
    // record the move in the array
    if (event.target.classList.contains('userOneChanged')) {
        p1moves.push(Number(event.target.id));             
    }
  } else { 
      //  player 2 move
    event.target.classList.add('userTwoChanged');
    // record the move in the array
    p2moves.push(Number(event.target.id));
  }
  let userWin = checkWinner();
    
  if (count >= 0) {
    // hidding button
    playBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
  } else {
    playBtn.classList.add('hidden');
    resetBtn.classList.add('hidden'); 
  }
  if( count === 8 && !userWin )
  { 
    showUserDraw.classList.remove('hidden');
  }
}

function clearScoreCount() {
  showUserOneScore.textContent = 0;
  showUserTwoScore.textContent = 0;
}

function resetMoves() {
  p1moves = [];
  p2moves = [];
}

function clickPlayBtn() {
  user = document.querySelectorAll('.userOneChanged');
  user2 = document.querySelectorAll('.userTwoChanged');
  count = user.length + user2.length;

  user.forEach(function(user) {
      user.classList.remove('userOneChanged');
  });

  user2.forEach(function(user2) {
      user2.classList.remove('userTwoChanged');
  });
  resetMoves();
  resetBtn.classList.add('hidden');
  playBtn.classList.add('hidden');
  showUserOneWin.classList.add('hidden');
  showUserTwoWin.classList.add('hidden');
  showUserDraw.classList.add('hidden');
  enableGame();
}


function clickResetBtn() { 
  clickPlayBtn();
  clearScoreCount();
  resetMoves();
  enableGame();
}

showUserOneWin.classList.add('hidden');
showUserTwoWin.classList.add('hidden');
playBtn.classList.add('hidden');
resetBtn.classList.add('hidden');
showUserDraw.classList.add('hidden');

playBtn.addEventListener('click', clickPlayBtn);
resetBtn.addEventListener('click', clickResetBtn);

enableGame();