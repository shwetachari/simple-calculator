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
  return input.replace(/\s+/g, ' ').split(' ');
}

function add(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}
$("#add").click(function() {
  $("#result").html(add(array));
});

function multiply(array) {
 return array.reduce(function(a, b) {
   return a * b;
 });
}
$("#multiply").click(function() {
  $("#result").html(multiply(array));
});

function mean(array) {
  return add(array) / array.length;
}
$("#mean").click(function() {
  $("#result").html(mean(array));
});

function min(array) {
  return array.reduce(function(min, num) {
    return Math.min(min, num);
  });
}
$("#min").click(function() {
  $("#result").html(min(array));
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
