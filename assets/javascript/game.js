$(document).ready(function() {
// variables

wins = 0;
losses = 0;
totalScore = 0;

$("#wins-count").text(wins);
$("#losses-count").text(losses);
$("#total-score").text(totalScore);


 // random number
 var randomNumber = Math.floor(Math.random() * 102) + 19;
 $("#randomNumber").text(randomNumber);
 console.log(randomNumber);

 // random gem values
 var blueValue = Math.floor(Math.random() * 12) + 1;
 console.log("Crystal one value: " + blueValue);

 var greenValue = Math.floor(Math.random() * 12) + 1;
 console.log("Crystal two value: " + greenValue);

 var whiteValue = Math.floor(Math.random() * 12) + 1;
 console.log("Crystal three value: " + whiteValue);

 var redValue = Math.floor(Math.random() * 12) + 1;
 console.log("Crystal four value: " + redValue);

 
//on click events
 $("#blue").on("click", function () {
  totalScore = totalScore + blueValue;
  $("#total-score").text(totalScore);
});

$("#green").on("click", function () {
  totalScore = totalScore + greenValue;
  $("#total-score").text(totalScore);
});
$("#white").on("click", function () {
  totalScore = totalScore + whiteValue;
  $("#total-score").text(totalScore);
});
$("#red").on("click", function () {
    totalScore = totalScore + redValue;
      $("#total-score").text(totalScore);
}); 



});


