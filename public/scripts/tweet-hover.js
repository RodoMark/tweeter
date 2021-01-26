$(document).ready(function () {
  // --- our code goes here ---
  console.log("Character counter: Ready");

  $(".user-handle").on("mouseover", function (event) {
    const $tweet = $(event.target).closest("article");
    const $userHandle = $tweet.find(".user-handle");

    console.log("user-handle");

    $userHandle.removeClass("hidden");
  });
});
