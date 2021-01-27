/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const createTweetElement = function (tweetObj) {
    const article = `
    <article>
    <header>
                <figure>
                  <img src=${tweetObj.user.avatars}>
                  <figcaption>${tweetObj.user.name}</figcaption>
                </figure>
                
                <a href="">${tweetObj.user.handle}</a>
              </header>
              <p>${tweetObj.content.text}</p>
              <footer>
                <h6>Created ${tweetObj.created_at}</h6>
                <div class="socials">
                  <img src="public/images/flags.svg">
                  <img src="public/images/retweet.svg">
                  <img src="public/images/heart.svg">
                </div>
  
              </footer>
              </article>
    `;

    let $tweet = $(article);
    return $tweet;
  };

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweet-section").append($tweet);
});
