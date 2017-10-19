$(document).ready(function() {

  console.log("Czy Ty też słyszysz głosy?");

  function accordion() {
    var accordion = $(".accordionWrapper").find(".accordion");
    var panel = $(".accordionWrapper").find(".panel");

    accordion.on("click", function() {
      $(this).toggleClass("active");
      $(this).next().finish().slideToggle("slow");
    });
  }
  accordion();

   function search(){


   }
   search();
});




/*
  var $root = $('html, body');

  $('option[value^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'id') ).offset().top
      }, 500);

      return false;
  });
*/
/*
$(document).on('click', 'option[value^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'value')).offset().top
    }, 500);
    });
*/
/*
var select = document.getElementById('test');

select.onchange = function(){
    window.location.hash = this.getElementsByTagName('option')[this.selectedIndex].value;
};​​​
// give id to select
*/
/*
var select = document.getElementById('test');

select.onchange = function(){
    var id = this.getElementsByTagName('option')[this.selectedIndex].value,
        el = document.getElementById(id),
        top = el.offsetTop;
    window.scrollTo(0,top);
};
*/
