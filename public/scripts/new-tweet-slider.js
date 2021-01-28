$(document).ready(function () {
  console.log("Button clicker: Ready");

  $("#slider-button").click(function (event) {
    event.preventDefault();

    console.log("Button clicked");
  });
});
