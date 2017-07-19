var inputArray;

$(".btn").click(function() {
  var inputString = $("#numberInput").val().replace(/\s+/g, ' ');
  inputArray = convertInputToArray(inputString);
});

function convertInputToArray(input) {
  var validInput = /[\d\s*]+$/.test(input);
  if(!validInput) {
    alert('Invalid input!');
    return;
  }
  return input.split(' ').map(function(item) { return Number(item); });
}

// Math functions
function add(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}
function multiply(array) {
 return array.reduce(function(a, b) {
   return a * b;
 });
}
function mean(array) {
  return add(array) / array.length;
}
function min(array) {
  return array.reduce(function(min, num) {
    return Math.min(min, num);
  });
}
function max(array) {
  return array.reduce(function(min, num) {
    return Math.max(min, num);
  });
}
function range(array) {
 return Math.abs(max(array)) - Math.abs(min(array));
}

$("#add").click(function() {
  $("#result").html(add(inputArray));
});
$("#multiply").click(function() {
  $("#result").html(multiply(inputArray));
});
$("#mean").click(function() {
  $("#result").html(mean(inputArray));
});
$("#min").click(function() {
  $("#result").html(min(inputArray));
});
$("#max").click(function() {
  $("#result").html(max(inputArray));
});
$("#range").click(function() {
  $("#result").html(range(inputArray));
});
