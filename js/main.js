var inputArray;

$(".btn").click(function() {
  var inputString = $("#numberInput").val();
  inputArray = convertInputToArray(inputString);
});

function convertInputToArray(input) {
  var validInput = /[\d\s*]+$/.test(input);
  if(!validInput) {
    alert('Invalid input!');
    return;
  }
  return input.replace(/\s+/g, ' ').split(' ').map(function(item) { return Number(item); });
}

function add(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}
$("#add").click(function() {
  $("#result").html(add(inputArray));
});

function multiply(array) {
 return array.reduce(function(a, b) {
   return a * b;
 });
}
$("#multiply").click(function() {
  $("#result").html(multiply(inputArray));
});

function mean(array) {
  return add(array) / array.length;
}
$("#mean").click(function() {
  $("#result").html(mean(inputArray));
});

function min(array) {
  return array.reduce(function(min, num) {
    return Math.min(min, num);
  });
}
$("#min").click(function() {
  $("#result").html(min(inputArray));
});

function max(array) {
  return array.reduce(function(min, num) {
    return Math.max(min, num);
  });
}
$("#max").click(function() {
  $("#result").html(max(array));
});

function range(array) {
 return Math.abs(max(array)) - Math.abs(min(array));
}
$("#range").click(function() {
  $("#result").html(multiply(range));
});
