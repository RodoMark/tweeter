$(document).ready(function () {
  // Counts the number of characters in new tweet field  
  $("#tweet-text").on("input", function (event) {
    const $newTweet = $(event.target).closest("section");
    const $tweetText = $newTweet.find("#tweet-text");
    const $counter = $newTweet.find(".counter");

    let count = $tweetText.val().length;
    $counter.html(140 - count);

    if (count > 140) {
      $counter.addClass("red-text");
    } else {
      $counter.removeClass("red-text");
    }
  });
});
