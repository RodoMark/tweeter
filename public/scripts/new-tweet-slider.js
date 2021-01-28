$(document).ready(function () {
  // This button slides the new tweet composition form in and out
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

  // After scrolling down a button appears to allow the user to scroll back up
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
