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

    if (userInput <= 10) {
      $("#initial-showing").hide();
      $("#frontEnd").fadeIn(1000);
      console.log(userInput);
    }
    else if (userInput === 11 || userInput <= 13) {
      $("#initial-showing").hide();
      $("#mobileDev").fadeIn(1000);
      console.log(userInput);
    }
    else if (userInput === 14 || userInput <= 16) {
      $("#initial-showing").hide();
      $("#gameDevelopment").fadeIn(1000);
      console.log(userInput);
    }
    else {
      $("#initial-showing").hide();
      $("#backEnd").fadeIn(1000);
      console.log(userInput);
    }
  });
});


//var results =

// $("#initial-showing").hide();
// $("#ruby").fadeIn(1000);
// $("#design").fadeIn(1000);
