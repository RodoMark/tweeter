/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $("#form").on("submit", function (event) {
    event.preventDefault();

    const $form = $(this);
    const $newTweet = $form.serialize();
    const $tweetText = $("#tweet-text").val();
    const $errorEl = $(".new-tweet").find("p");

    $errorEl.empty();

    if ($tweetText.length > 140) {
      const errorMsg = "Your text is too long!";

      $errorEl.text(errorMsg).slideDown(400);
    } else if ($tweetText === null || $tweetText === "") {
      const errorMsg = "Sorry, you can't send empty text";

      $errorEl.text(errorMsg).slideDown(400);
    } else {
      $errorEl.empty();
      console.log("AJAX submitting");
      $.ajax({
        url: "http://localhost:8080/tweets",
        method: "POST",
        data: $newTweet,
      })
        .then(loadTweets)
        .then($("#tweet-text").val(""));
    }
  });

  const createTweetElement = function (tweetObj) {
    const creationDate = new Date(tweetObj.created_at).toISOString();

    const article = `
    <article class="tweet">
    <header>
                <figure>
                  <img src=${tweetObj.user.avatars}>
                  <figcaption>${tweetObj.user.name}</figcaption>
                </figure>
                
                <a href="">${tweetObj.user.handle}</a>
              </header>
              <p></p>
              <footer>
                <h6>Created <time class="timeago" datetime="${creationDate}"></time></h6>
                <div class="socials">
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </div>
  
              </footer>
              </article>
    `;

    let $tweet = $(article);

    //Protect against cross site scripting
    $tweet.find("p").text(tweetObj.content.text);
    return $tweet;
  };

  const renderTweets = function (tweetObjects) {
    $("#tweet-section").empty();

    tweetObjects.forEach(function (obj) {
      let $tweet = createTweetElement(obj);
      $("#tweet-section").append($tweet);
      $("time.timeago").timeago();
    });
  };

  const loadTweets = function () {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
    }).then(function (tweets) {
      renderTweets(tweets.reverse());
    });
  };

  loadTweets();
});
