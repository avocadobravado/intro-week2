$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var companySize = parseInt($("#companySize").val());
    var productType = parseInt($("#productType").val());
    var gameDev = parseInt($("#gameDev").val());
    var uxDesign = parseInt($("#uxDesign").val());
    var crossPlatform = parseInt($("#crossPlatform").val());

    event.preventDefault();
  });
});


//var results =

// $("#initial-showing").hide();
// $("#ruby").fadeIn(1000);
// $("#design").fadeIn(1000);
