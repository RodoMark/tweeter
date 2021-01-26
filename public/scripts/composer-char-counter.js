$(document).ready(function () {
  // --- our code goes here ---
  console.log("Character counter: Ready");

  $("#tweet-text").on("input", function (event) {
    const $newTweet = $(event.target).closest("section");
    const $tweetText = $newTweet.find("#tweet-text");
    const $counter = $newTweet.find(".counter");

    console.log($tweetText);

    let count = $tweetText.val().length;
    $counter.html(140 - count);

    if (count > 140) {
      $counter.addClass("red-text");
    } else {
      $counter.removeClass("red-text");
    }
  });
});
