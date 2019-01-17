var lineFirstDiv = document.querySelector('.line1');
var lineSecondDiv = document.querySelector('.line2');
var lineThirdDiv = document.querySelector('.line3');
var boardNums = document.querySelectorAll('.num');
var playBtn = document.querySelector('.playButton');
var resetBtn = document.querySelector('.resetButton');

var showUserOneWin = document.querySelector('.userOneWin');
var showUserTwoWin = document.querySelector('.userTwoWin');
var showUserDraw = document.querySelector('.userDraw');
var showUserOneScore = document.querySelector('.userOneScore');
var showUserTwoScore = document.querySelector('.userTwoScore');
var p1score = 0;
var p2score = 0;

var hasWon = false;
// TODAY
// FOURTH, GO BACK TO CODE AND MAKE BETTER CODE THEN NOW!! TRY IT

//  if (event.target.classList.contains('userOneChanged')) {
//     return
// }
//  if (event.target.classList.contains('userTwoChanged')) {
//     return
// } same as below isTargetAlreadyClicked function, make simple way to make.

var isTargetAlreadyClicked = function(target) {
    if (target.classList.contains('userOneChanged') || target.classList.contains('userTwoChanged')) {
        return true
    } else {
        return false
    }
}


var userScoreCount = function() {
    if (hasWon === true && event.target.classList.contains('userOneChanged')) {
        p1score++;
        showUserOneScore.textContent = p1score;
    }

    if (hasWon === true && event.target.classList.contains('userTwoChanged')) {
        p2score++;
        showUserTwoScore.textContent = p2score;
    }
}

var switchColor = function (event) {
    // first check if someone already won


    if (hasWon === true) {
        return false;
    }


    if (isTargetAlreadyClicked(event.target)) {
        return
    }

    
    // work out which player
    var user = document.querySelectorAll('.userOneChanged');

    var user2 = document.querySelectorAll('.userTwoChanged');

    var count = user.length + user2.length; 

    // debugger;

    // if user onechanges. length is odd
    //   plyaer 1 move
    if (count % 2 === 0) {
        event.target.classList.add('userOneChanged');
    } else { 
        //  player 2 move
            event.target.classList.add('userTwoChanged');
        }

    
    if (boardNums[0].classList.contains('userOneChanged') && boardNums[1].classList.contains('userOneChanged') && boardNums[2].classList.contains('userOneChanged')) {
        
        hasWon = true;
        showUserOneWin.classList.remove('hidden');
        userScoreCount();
    } 
    else if (boardNums[0].classList.contains('userTwoChanged') && boardNums[1].classList.contains('userTwoChanged') && boardNums[2].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } 
    
    else if (boardNums[3].classList.contains('userOneChanged') && boardNums[4].classList.contains('userOneChanged') && boardNums[5].classList.contains('userOneChanged')) {
        hasWon = true;
        showUserOneWin.classList.remove('hidden');
        userScoreCount();
        

    } else if (boardNums[3].classList.contains('userTwoChanged') && boardNums[4].classList.contains('userTwoChanged') && boardNums[5].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    }
    
    else if (boardNums[6].classList.contains('userOneChanged') && boardNums[7].classList.contains('userOneChanged') && boardNums[8].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } else if (boardNums[6].classList.contains('userTwoChanged') && boardNums[7].classList.contains('userTwoChanged') && boardNums[8].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    }

    else if (boardNums[0].classList.contains('userOneChanged') && boardNums[3].classList.contains('userOneChanged') && boardNums[6].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } 
    else if (boardNums[0].classList.contains('userTwoChanged') && boardNums[3].classList.contains('userTwoChanged') && boardNums[6].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } 
    else if (boardNums[1].classList.contains('userOneChanged') && boardNums[4].classList.contains('userOneChanged') && boardNums[7].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } else if (boardNums[1].classList.contains('userTwoChanged') && boardNums[4].classList.contains('userTwoChanged') && boardNums[7].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    }
    else if (boardNums[2].classList.contains('userOneChanged') && boardNums[5].classList.contains('userOneChanged') && boardNums[8].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } else if (boardNums[2].classList.contains('userTwoChanged') && boardNums[5].classList.contains('userTwoChanged') && boardNums[8].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    }
    
    else if (boardNums[0].classList.contains('userOneChanged') && boardNums[4].classList.contains('userOneChanged') && boardNums[8].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } else if (boardNums[0].classList.contains('userTwoChanged') && boardNums[4].classList.contains('userTwoChanged') && boardNums[8].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    }
    else if (boardNums[2].classList.contains('userOneChanged') && boardNums[4].classList.contains('userOneChanged') && boardNums[6].classList.contains('userOneChanged')) {
        showUserOneWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();

    } else if (boardNums[2].classList.contains('userTwoChanged') && boardNums[4].classList.contains('userTwoChanged') && boardNums[6].classList.contains('userTwoChanged') ) {
        showUserTwoWin.classList.remove('hidden');
        hasWon = true;
        userScoreCount();
    } 
    
    if (count >= 0) {
        // hidding button
        playBtn.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
    } else {
        playBtn.classList.add('hidden');
        resetBtn.classList.add('hidden');
        
    }
    
    if (hasWon === false && count === 8) {
        showUserDraw.classList.remove('hidden');
    }
}


function clickPlayBtn() {

    hasWon = false;
    user = document.querySelectorAll('.userOneChanged');
    user2 = document.querySelectorAll('.userTwoChanged');
    count = user.length + user2.length;

        user.forEach(function(user) {
            user.classList.remove('userOneChanged');
        });
    
        user2.forEach(function(user2) {
            user2.classList.remove('userTwoChanged');
        });
         resetBtn.classList.add('hidden');
         playBtn.classList.add('hidden');
         showUserOneWin.classList.add('hidden');
         showUserTwoWin.classList.add('hidden');
         showUserDraw.classList.add('hidden');
        
}


var clickResetBtn = function() {
    
    clickPlayBtn();
    showUserOneScore.textContent = 0;
    showUserTwoScore.textContent = 0;
    p1score = 0;
    p2score = 0;
    
}

showUserOneWin.classList.add('hidden');
showUserTwoWin.classList.add('hidden');
playBtn.classList.add('hidden');
resetBtn.classList.add('hidden');
showUserDraw.classList.add('hidden');

boardNums.forEach( function(elem) {
    elem.addEventListener('click', switchColor);
})

playBtn.addEventListener('click', clickPlayBtn);
resetBtn.addEventListener('click', clickResetBtn);
