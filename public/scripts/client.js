/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $(function () {
    const $button = $(". btn");
    $button.on("click", function () {
      console.log("Button clicked, performing ajax call...");
      $.ajax("", { method: "GET" }).then(function (morePostsHtml) {
        console.log("Success: ", morePostsHtml);
        $button.replaceWith(morePostsHtml);
      });
    });
  });

  const data = [
    {
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
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

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
                <h6>Created ${tweetObj.created_at} ago</h6>
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

  const renderTweets = function (tweetObjects) {
    tweetObjects.forEach(function (x) {
      let $tweet = createTweetElement(x);
      $("#tweet-section").append($tweet);
    });
  };

  renderTweets(data);

  // // Test / driver code (temporary). Eventually will get this from the server.
  // const tweetData = {
  //   user: {
  //     name: "Newton",
  //     avatars: "https://i.imgur.com/73hZDYK.png",
  //     handle: "@SirIsaac",
  //   },
  //   content: {
  //     text:
  //       "If I have seen further it is by standing on the shoulders of giants",
  //   },
  //   created_at: 1461116232227,
  // };

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $("#tweet-section").append($tweet);
});
