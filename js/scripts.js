$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $('#drinks').show();
  }
  if (age > 40) {
    alert("Aren't you a little old to be here?");
    $('#drinks').show();
  }

  //The second if statement will only work as a sub-condition of the first statement,
  //ie:  The second will only evaluate to true if the first does as well.

  else if (age === 21) {
    alert("Now don't go crazy!");
    $('#drinks').show();
  }
  else {
    $('#under-21').show();
  }


  var over21 = confirm("I am the bouncer.  Are you over 21? Click OK for yes or Cancel for no.");

  if (over21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }

});
