(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function() {
        
        console.log(gameData.index);
        gameData.index = Math.round(Math.random() );
        gameControl.style.border = 'none';
        gameControl.innerHTML = '<h2>Collect the stars!</h2>';
        gameControl.innerHTML += '<button id="roll">Roll the Dice</button>';

        document.getElementById('roll').addEventListener('click', function() {

            console.log('Roll the dice!');
            throwDice();
            setUpTurn();
            console.log('set up the turn!');
        });
    });
    
    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="quit">Wanna Quit?</button';

        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });
        
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
        <img src="${gameData.dice[gameData.roll2-1]}>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if (gameData.rollSum == 2) {
            game.innerHTML += '<p>Help! Two black holes! Sucking up... your stars...</p>';
            gameData.score[gameData.index] = 0 ;
            gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        }
        else if (gameData.roll1 == 1 || gameData.roll2 == 1) {
            gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, you caught a black hole. Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index  = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "start a new game?";

            gameControl.innerHTML = '';
        } 
        else {
            showCurrentScore();  
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<h1><strong>SCORE:<br> </strong> 
        ${gameData.players[0]} - ${gameData.score[0]} <br> ${gameData.players[1]} - ${gameData.score[1]}</h1>`;        
    }

})();
