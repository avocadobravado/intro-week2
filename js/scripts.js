$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("#initial-showing").hide();
    $("#ruby").fadeIn(1000);
  });
});
