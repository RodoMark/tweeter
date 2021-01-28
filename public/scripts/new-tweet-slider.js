$(document).ready(function () {
  console.log("Button clicker: Ready");
  const newTweetSlider = function () {
    $("#slider-button").on("click", function (event) {
      event.preventDefault();

      console.log("Button clicked");
    });
  };
});
