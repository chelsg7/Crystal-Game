// Original Game Board Values
var wins = 0;
var losses = 0;
var gameRandom = Math.floor((Math.random() * 200) + 1);
var lives = 25;
var userNumberStart = 0;
var val1 = Math.floor((Math.random() * 30) + 1);
var val2 = Math.floor((Math.random() * 20) + 1);
var val3 = Math.floor((Math.random() * 25) + 1);
var val4 = Math.floor((Math.random() * 5) + 1);
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

var checkUser = function(){
    if (userNumberStart === gameRandom){
        wins++;
        setWins();
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

    $('#start').click(function(){
        setWins();
        setLost();
        setRandom();
        setLives();
        setUserNumber();

        $('#drink1').on("click", function(){
            $('#userNumber').html(userNumberStart += val1);
            lives--;
        });
        $('#drink2').on("click", function(){
            $('#userNumber').html(userNumberStart += val2);
            lives--;
        });
        $('#drink3').on("click", function(){
            $('#userNumber').html(userNumberStart += val3);
            lives--;
        });
        $('#drink4').on("click", function(){
            $('#userNumber').html(userNumberStart += val4);
            lives--;
        });
        
        if(lives > 0){
            checkUser();
        } else if ( lives === 0) {
            losses++;
            setLost();
            alert("INCONCEIVABLE! You Lost! " + gameRandom + " is the winning number!")
        }
    });
});
