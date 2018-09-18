//window.onload = function() {
$(document).ready(function () {
    game.start();
    game.main();
    //    getRandomNumberArray()
    //    getBtnValue()
});
//};

// VARIABLES
// ====================================================================
var currentScore = 0;
var goal = 0;
var btnValue = [];
var wins = 0;
var losses = 0;
var newGame = true;

// FUNCTIONS
// ====================================================================
var game = {

    // Reset
    start: function () {
        if (newGame) {
            newGame = false;

            // Get numbers    
            // The random number shown at the start of the game should be between 19 - 120.
            goal = Math.floor(Math.random() * 140) + 19;
            // Each crystal should have a random hidden value between 1 - 12.
            function getRandomNumberArray() {
                var ctr = 0
                var numberArray = [];
                while (ctr < 4) {
                    var randomNumber = Math.ceil(Math.random() * 12)
                    if (!numberArray.includes(randomNumber)) { //特定の要素が配列に含まれているかどうか true/false
                        numberArray.push(randomNumber)
                        ctr++;
                    }
                }
                return numberArray;
            }
            var numberArray = getRandomNumberArray()
            var i = 0;
            while (i < 4) {
                btnValue[i] = numberArray[i];
                i++;
            }
            currentScore = 0;
            // Display them in HTML
            $("#goal").text(goal);
            $("#currentScore").text(currentScore);
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Looses: " + losses);
        }
    },
    // Main
    main: function () {
        if (goal > currentScore) {

            // Click Event, add number to score
            $("#button1").on("click", function () {
                currentScore = currentScore + btnValue[0];
                // Display in HTML
                $("#currentScore").text(currentScore);
                if (goal === currentScore) {
                    alert("You won!")
                    wins++;
                    newGame = true;
                    $("#wins").text("Wins: " + wins);
                    game.start();
                }
                if (goal < currentScore) {
                    alert("Sorry!")
                    losses++;
                    newGame = true;
                    $("#losees").text("Looses: " + wins);
                    game.start();
                }
            });
            $("#button2").on("click", function () {
                currentScore = currentScore + btnValue[1];
                // Display in HTML
                $("#currentScore").text(currentScore);
                if (goal === currentScore) {
                    alert("You won!")
                    wins++;
                    newGame = true;
                    $("#wins").text("Wins: " + wins);
                    game.start();
                }
                if (goal < currentScore) {
                    alert("Sorry!")
                    losses++;
                    newGame = true;
                    $("#losees").text("Looses: " + wins);
                    game.start();
                }
            });
            $("#button3").on("click", function () {
                currentScore = currentScore + btnValue[2];
                // Display in HTML
                $("#currentScore").text(currentScore);
                if (goal === currentScore) {
                    alert("You won!")
                    wins++;
                    newGame = true;
                    $("#wins").text("Wins: " + wins);
                    game.start();
                }
                if (goal < currentScore) {
                    alert("Sorry!")
                    losses++;
                    newGame = true;
                    $("#losees").text("Looses: " + wins);
                    game.start();
                }
            });
            $("#button4").on("click", function () {
                currentScore = currentScore + btnValue[3];
                // Display in HTML
                $("#currentScore").text(currentScore);
                if (goal === currentScore) {
                    alert("You won!")
                    wins++;
                    newGame = true;
                    $("#wins").text("Wins: " + wins);
                    game.start();
                }
                if (goal < currentScore) {
                    alert("Sorry!")
                    losses++;
                    newGame = true;
                    $("#losees").text("Looses: " + wins);
                    game.start();
                }
            });
        }
    }
};