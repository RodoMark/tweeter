$(document).ready(function () {
  console.log("Scrolltop: Ready");

  const $scrolltop = $("#scrolltop");
  $scrolltop.hide();

  $(window).bind("scroll", function () {
    if ($(this).scrollTop() > 215) {
      $scrolltop.slideDown("fast");
    } else if ($(this).scrollTop() <= 215) {
      $scrolltop.hide();
    }
  });

  $scrolltop.click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: "0px" }, 550);
  });
});
