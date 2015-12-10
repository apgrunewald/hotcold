
$(document).ready(function(){

var numRand = Math.floor((Math.random() * 101) + 1); //Random Number Generator at page load
console.log(numRand);


//-----------------------------------------------Guessing Number Begin
$('#guessButton').click(function() {
  var guessNum = $("#userGuess").val(); //is number between 1 and 100
  var counter = $('#count').text(); //counts number of guesses
  counter++;
  $('#count').text(counter);
  var getNum = $('input#userGuess').val(); //user's input
  
   if (guessNum > 100 || guessNum < 1) { //check if number is between 1 and 100
      alert("Please insert a number between 1 and 100!");
    }
    else { //run the game 
 //---------------------------------------------Correct Guess Begin
  if (getNum == numRand) {
    $('#feedback').text('Correct!');
    alert('You Got It! Click "+ New Game" to Play Again!');
    event.preventDefault();
  }
  //---------------------------------------------Correct Guess End


  //---------------------------------------------Within 50 Begin
  else if (Math.abs(numRand - getNum) > 50) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('input#userGuess').val(" ");
    $('#feedback').text('ice cold!');
    console.log("Within 50");
  }
  //---------------------------------------------Within 50 End


  //---------------------------------------------Within 40 Begin
  else if (Math.abs(numRand - getNum) > 40) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('#feedback').text('cold!');
    $('input#userGuess').val(" ");
    console.log("Within 40");
  }
  //---------------------------------------------Within 40 End 


  //---------------------------------------------Within 30 Begin
  else if (Math.abs(numRand - getNum) > 30) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('#feedback').text('warm!');
    $('input#userGuess').val(" ");
    console.log("Within 30");
  }
  //---------------------------------------------Within 30 End


  //---------------------------------------------Within 20 Begin
  else if (Math.abs(numRand - getNum) > 20) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('#feedback').text('hot!');
    $('input#userGuess').val(" ");
    console.log("Within 20");
  }
  //---------------------------------------------Within 20 End


  //---------------------------------------------Within 10 Begin
  else if (Math.abs(numRand - getNum) > 10) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('#feedback').text('very hot!');
    $('input#userGuess').val(" ");
    console.log("Within 10");
  }
  //---------------------------------------------Within 10 End
  //---------------------------------------------Less Than 10 Begin
  else if (Math.abs(numRand - getNum) >= 1) {
    $('#guessList').append('<li>' + $('input#userGuess').val() + '</li>');
    $('#feedback').text('wow,  you are so close! super hot!');
    $('input#userGuess').val(" ");
    console.log("Less Than 10");
  }
  //---------------------------------------------Less Than 10 End

    }

});
//-----------------------------------------------Guessing Number Ends

//-----------------------------------------------New Game Begins
$('.new').click(function() {
  $('#guessList').empty();
  $('input#userGuess').val(" ");
  $('#feedback').text('Make Your Guess!');
  $('#count').text("0");


  numRand = Math.floor((Math.random() * 101) + 1); //Random number generator at "new game" button click
  console.log(numRand);

});
//-----------------------------------------------New Game End

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


