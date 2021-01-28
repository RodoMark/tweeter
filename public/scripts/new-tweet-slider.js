$(document).ready(function () {
  console.log("Button clicker: Ready");

  $("#slider-button").click(function (event) {
    event.preventDefault();

    const $newTweet = $(".new-tweet");
    const $tweetText = $("#tweet-text");
    const $toTheTop = $("html, body").animate({ scrollTop: "0px" }, 550);

    if ($(this).scrollTop() > 215) {
      $toTheTop;
    }

    if ($newTweet.hasClass("up")) {
      $newTweet.slideDown(400);
      $newTweet.removeClass("hidden");
      $newTweet.removeClass("up");
      $tweetText.focus();
    } else {
      $newTweet.slideUp(400);
      $newTweet.addClass("up");
      $tweetText.blur();
    }
  });
});
