"use strict";

$(document).ready(function () {

  $submitButton.click(function () {

    $appWindow.animate({
      "height": "+=148"
    }, 2000).css({
      "pointer-events": "none"
    });

    $sloganText.animate({
      "margin-bottom": "+=178px"
    }, 2000).text("Please wait...");

    $searchForm.animate({
      "opacity": "0"
    }, 1000);
  }); //$submitButton click

  $newSearchButton.click(function () {

    $appWindow.animate({
      "height": "-=148"
    }, 2000).css({
      "pointer-events": "none"
    });

    $sloganText.animate({
      "margin-bottom": "-148px"
    }, 2000).text("Please wait...");

    $appInfo.animate({
      "opacity": "0"
    }, 1000);
  }); //$newSearchButton click
}); //document ready
//# sourceMappingURL=/Users/AnthonyMartinovic/Desktop/Software Development/My Software Projects/nodeWeatherApp/static/js/animations.js.map