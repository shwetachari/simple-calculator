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
$("#multiply").click(multiply);

function mean(array) {

}
$("#mean").click(mean);

function min(array) {

}
$("#min").click(min);

function max(array) {

}
$("#max").click(max);

function range(array) {

}
$("#range").click(range);
