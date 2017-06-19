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

}
$("#range").click(function() {
  $("#result").html(multiply(range));
});
