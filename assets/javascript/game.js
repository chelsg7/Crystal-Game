var wins = 0;
var losses = 0;
var gameRandom = Math.floor((Math.random() * 200) + 1);
var lives = 25;
var val1 = Math.floor((Math.random() * 50) + 1);
var val2 = Math.floor((Math.random() * 20) + 1);
var val3 = Math.floor((Math.random() * 30) + 1);
var val4 = Math.floor((Math.random() * 10) + 1);


var setWins = $('#win').html(wins);
var setLost = $('#lost').html(losses);
var setRandom = $('#gameNumber').html(gameRandom);
var setLives = $('#guess').html(lives);


$(document).ready(function(){
    console.log('ready!');
    console.log(gameRandom);
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    var setWins = $('#win').html(wins);
    var setLost = $('#lost').html(losses);
    var setRandom = $('#gameNumber').html(gameRandom);
    var setLives = $('#guess').html(lives);
    setWins();
    setLost();
    setRandom();
    setLives();
});