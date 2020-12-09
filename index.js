// Add padding-top to show content behind navbar

// $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

// detect scroll up or download

if($(".scroll-bar").length > 10px) { // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function() {
    scroll_top = $(this).scrollTop();
    if(scroll_top < last_scroll_top) {
      $(".scroll-bar").removeClass("scrolled-down").addClass("scrolled-up");
    } else {
      $(".scroll-bar").removeClass("scrolled-up").addClass("scrolled-down");
    }
    last_scroll_top = scroll_top;
  });
}
