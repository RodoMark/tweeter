/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $("#form").on("submit", function (event) {
    event.preventDefault();
    console.log("Button clicked, AJAX submitted");
    const $form = $(this);
    const $newTweet = $form.serialize();
    const $tweetText = $("#tweet-text");

    if ($tweetText.val().length > 140) {
      const $counter = this.find(".counter");
      $counter.insterBefore;
    } else if (
      $tweetText.text() === null ||
      $tweetText.text() === null ||
      $tweetText.text() === " "
    ) {
    } else {
      $.ajax({
        url: "http://localhost:8080/tweets",
        method: "POST",
        data: $newTweet,
      });
    }
  });

  const getDaysBetween = function (date1, date2) {
    let oneDay = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    let date1Miliseconds = date1;
    let date2Miliseconds = date2;

    // Calculate the difference in milliseconds
    const timeDifference = date2Miliseconds - date1Miliseconds;

    // Convert back to days and return
    return Math.round(timeDifference / oneDay);
  };

  const createTweetElement = function (tweetObj) {
    const article = `
    <article class="tweet">
    <header>
                <figure>
                  <img src=${tweetObj.user.avatars}>
                  <figcaption>${tweetObj.user.name}</figcaption>
                </figure>
                
                <a href="">${tweetObj.user.handle}</a>
              </header>
              <p>${tweetObj.content.text}</p>
              <footer>
                <h6>Created ${getDaysBetween(
                  tweetObj.created_at,
                  new Date()
                )} ago</h6>
                <div class="socials">
                  <i class="fas fa-flag"></i>
                  <i class="fas fa-retweet"></i>
                  <i class="fas fa-heart"></i>
                </div>
  
              </footer>
              </article>
    `;

    let $tweet = $(article);
    return $tweet;
  };

  const renderTweets = function (tweetObjects) {
    tweetObjects.forEach(function (obj) {
      let $tweet = createTweetElement(obj);
      $("#tweet-section").append($tweet);
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
