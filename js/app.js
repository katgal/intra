/*document.addEventListener("DOMContentLoaded", function() {

  var accordionButton = document.querySelectorAll(".accordion");

  for (var i = 0; i < accordionButton.length; i++) {

    accordionButton[i].addEventListener("click", function() {
      // console.log("click");
      this.classList.toggle("active");

      var sibling = this.nextElementSibling;
      if (sibling.style.display === "block") {
        sibling.style.display = "none";
      } else {
        sibling.style.display = "block";
      }

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      }




    });

  }

});
*/
$(document).ready(function() {

  function accordion() {
    var accordion = $(".accordionWrapper").find(".accordion");
    var panel = $(".accordionWrapper").find(".panel");

    accordion.on("click", function() {
      $(this).toggleClass("active");
      $(this).next().finish().slideToggle("slow");
    });
  }
  accordion();
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


});
