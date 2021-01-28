$(document).ready(function () {
  console.log("Button clicker: Ready");

  $("#slider-button").click(function (event) {
    event.preventDefault();
    const $newTweet = $(".new-tweet");
    console.log("slider pressed");

    if ($newTweet.hasClass("up")) {
      $newTweet.slideDown(400);
      $newTweet.removeClass("hidden");
      $newTweet.removeClass("up");
    } else {
      $newTweet.slideUp(400);
      $newTweet.addClass("up");
    }
  });
});
