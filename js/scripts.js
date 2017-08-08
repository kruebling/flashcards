$(document).ready(function() {
  $('.flashcard').click(function(e) {
    var kids = $(e.currentTarget).children();
    kids.toggle(800);
    var kids2 = $(e.currentTarget).toggleClass("color");
  });
});
