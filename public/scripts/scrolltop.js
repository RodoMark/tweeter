$(document).ready(function () {
  console.log("Scrolltop: Ready");

  const $scrolltop = $("#scrolltop");

  $scrolltop.hide(); // hide on page load

  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 200) {
      // show after 200 px of user scrolling
      $scrolltop.slideDown("fast");
    } else if ($(this).scrollTop() <= 200) {
      $scrolltop.hide();
    }
  });

  $scrolltop.click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: "0px" }, 300);
  });
});
