use 'strict';

$(document).ready(function() {

  var htmlStr = ```
   <div class="col-lg-3">
     <div class="well flashcard" id="3">
       <div class="flashtitle">
         <h2>Variables</h2>
       </div>
       <div class="flashinfo">
         <p>test</p>
       </div>
     </div>
   </div>```;

  $('.flashcard').click(function(e) {
    var kids = $(e.currentTarget).children();
    kids.toggle(800);
  });
});
