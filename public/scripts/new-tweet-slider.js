$(document).ready(function () {
  console.log("Button clicker: Ready");

  $("#slider-button").click(function (event) {
    event.preventDefault();

    const $newTweet = $(".new-tweet");
    const $tweetText = $("#tweet-text");

    if ($(this).scrollTop() > 215) {
      $("html, body").animate({ scrollTop: "0px" }, 550);
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

  const $scrolltop = $("#scrolltop");
  $scrolltop.hide();

  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 215) {
      $scrolltop.slideDown("fast");
    } else if ($(this).scrollTop() <= 215) {
      $scrolltop.hide();
    }
  });

  $("#scrolltop").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: "0px" }, 550);
    $tweetText.focus();
  });
});
