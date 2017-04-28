// Business logic
var add = function(num1, num2, num3, num4, num5) {
  return num1 + num2+ num3 + num4 + num5;
};

// Front end logic
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var companySize = parseInt($("#companySize").val());
    var productType = parseInt($("#productType").val());
    var gameDev = parseInt($("#gameDev").val());
    var uxDesign = parseInt($("#uxDesign").val());
    var crossPlatform = parseInt($("#crossPlatform").val());
    var userInput = add(companySize, productType, gameDev, uxDesign, crossPlatform);

// Prevent default to display results directly on page
    event.preventDefault();

    if (userInput < 14) {
      $("#initial-showing").hide();
      $("#ruby").fadeIn(1000);
      $("#design").fadeIn(1000);
      $("#php").fadeIn(1000);
    }
    // else (userInput < 20) {
    //   $("#c").show();
  });
});


//var results =

// $("#initial-showing").hide();
// $("#ruby").fadeIn(1000);
// $("#design").fadeIn(1000);
