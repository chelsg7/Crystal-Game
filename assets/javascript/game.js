// Original Game Board Values
var wins = 0;
var losses = 0;
var gameRandom = Math.floor((Math.random() * 120) + 19);
var lives = 25;
var userNumberStart = 0;
var userNum = 0;
var val1 = Math.floor((Math.random() * 12) + 1);
var val2 = Math.floor((Math.random() * 1) + 1);
var val3 = Math.floor((Math.random() * 6) + 1);
var val4 = Math.floor((Math.random() * 6) + 1);
var gameWin = false;


// Original Functions
var setWins = function(){$('#win').html(wins)};
var setLost = function(){$('#lost').html(losses)};
var setRandom = function(){$('#gameNumber').html(gameRandom)};
var setLives = function(){$('#guess').html(lives)};
var setUserNumber= function(){$('#userNumber').html(userNumberStart)};
var userNumb = function(){$('#userNumber').htm;(userNum)};

// Other Variables Needed
var drink1 = function(){
    $('#userNumber').html(userNum += val1);
    lives--;
    userNumb();
};
var drink2 = function(){
    $('#userNumber').html(userNum += val2);
    lives--;
    userNumb();
};
var drink3 = function(){
    $('#userNumber').html(userNum += val3);
    lives--;
    userNumb();
};
var drink4 = function(){
    $('#userNumber').html(userNum += val4);
    lives--;
    userNumb();
};

var reset = function (){
    gameRandom = Math.floor((Math.random() * 200) + 1);
    console.log(gameRandom);
    val1 = Math.floor((Math.random() * 10) + 1);
    val2 = Math.floor((Math.random() * 30) + 1);
    val3 = Math.floor((Math.random() * 25) + 1);
    val4 = Math.floor((Math.random() * 5) + 1);
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    lives = 25;
    userNumberStart = 0;
    setRandom();
    setLives();
    setUserNumber();
}; 

var winner = function (){
    alert("INCONCEIVABLE! You WON! " + gameRandom + " was the winning number!");
    wins++;
    setWins();
};
var loser = function(){
    alert ("INCONCEIVABLE! You Lost! " + gameRandom + " is the winning number!");
    losses++;
    setLost();
    gameWin = false;
};
var checkUser = function(){
    if((lives > 0) && (userNum === gameRandom)){
        console.log('inside')
        gameWin = true;
        winner();
        reset();
        } else if ((lives > 0) && (userNum > gameRandom)) {
            console.log('inside end');
            gameWin = false;
            loser();
            reset();
        } else if (lives === 0) {
            gameWin = false;
            loser();
            reset();
        };
    };


// Original Game Controls


$(document).ready(function(){
    console.log('ready!');
    console.log(gameRandom);
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    
    $('#start').on("click", function(){
        setWins();
        setLost();
        setRandom();
        setLives();
        setUserNumber();

        $('#drink1').on("click", function(){
            drink1();
            setLives();
            checkUser();
            // $('#userNumber').html(userNumberStart += val1);
        });
        $('#drink2').on("click", function(){
            drink2();
            setLives();
            checkUser();
            // $('#userNumber').html(userNumberStart += val2);
        });
        $('#drink3').on("click", function(){
            drink3();
            setLives();
            checkUser();
            // $('#userNumber').html(userNumberStart += val3);
        });
        $('#drink4').on("click", function(){
            drink4();
            setLives();
            checkUser();
            // $('#userNumber').html(userNumberStart += val4);
        });
        if(gameWin === true){
            userNumberStart === 0;
            setUserNumber();
            reset();
        } else if ((gameWin === false) && (userNumberStart > gameRandom)){
            userNumberStart === 0;
            setUserNumber();
            reset();
        } else if ((gameWin === false) && (lives === 0)){
            userNumberStart === 0;
            setUserNumber();
            reset();
        };
    })
});
