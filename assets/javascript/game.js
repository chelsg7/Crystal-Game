// Original Game Board Values
var wins = 0;
var losses = 0;
var gameRandom = Math.floor((Math.random() * 200) + 1);
var lives = 25;
var userNumberStart = 0;
var val1 = Math.floor((Math.random() * 50) + 1);
var val2 = Math.floor((Math.random() * 20) + 1);
var val3 = Math.floor((Math.random() * 30) + 1);
var val4 = Math.floor((Math.random() * 10) + 1);
var drink1 = '';
var drink2 = '';
var drink3 = '';
var drink4 = '';

// Original Functions
var setWins = function(){$('#win').html(wins)};
var setLost = function(){$('#lost').html(losses)};
var setRandom = function(){$('#gameNumber').html(gameRandom)};
var setLives = function(){$('#guess').html(lives)};
var setUserNumber = function(){$('#userNumber').html(userNumberStart)};

// Original Game Controls
/* var drink1 = function(){$('#drink1').on("click", function(){$('#userNumber').html(userNumberStart + val1)})}; */


$(document).ready(function(){
    console.log('ready!');
    console.log(gameRandom);
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);


    $('#start').click(function(){
        setWins();
        setLost();
        setRandom();
        setLives();
        setUserNumber();
    });
});
