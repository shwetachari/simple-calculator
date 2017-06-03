function add(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
}
$("#add").click(function() {
  $("#result").html(add(array));
});

function multiply(array) {

}
$("#multiply").click(function() {
  $("#result").html(multiply(array));
});

function mean(array) {

}
$("#mean").click(function() {
  $("#result").html(mean(array));
});

function min(array) {

}
$("#min").click(function() {
  $("#result").html(min(array));
});

function max(array) {

}
$("#max").click(max);

function range(array) {

}
$("#range").click(range);
