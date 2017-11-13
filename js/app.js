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

     function search() {

        var select = $('#search');//for jquery methods
        var select2 = document.getElementById('search');//is faster then select
        var accWrapper = $(".accordionWrapper");

        select.change(function() {

          window.location = this.value; //go to specific id on site
     /*
          document.getElementbyId("tets") returns a HTML DOM Object
          and
          $("#test") returns a jQuery Object
          They are diffrent and give diffrent results!!!
          but!
          document.getElementById('test') is the same as $('#test')[0]
          So, in jQuery, to get the same result as document.getElementById,
          I can access the jQuery Object and get the first element in the object
          (Remember!!! JavaScript objects act similar to associative arrays).

          Summarizing, calling document.getElementById('id') will return a raw DOM object.
          Calling $('#id') will return a jQuery object that wraps the DOM object
          and provides jQuery methods.

          Thus, I can only call jQuery methods like css() or animate() on
          the $() call.
          I can also write $(document.getElementById('id')), which will return
          a jQuery object and is equivalent to $('#id').

          I can get the underlying DOM object from a jQuery object by writing $('#id')[0].

          document.getElementbyId("tets") is faster, since it doesn't involve string parsing.

          $(document.getElementById('test'))[0] is equivalent of document.getElementById('test')
          but the first one is slower
     */
          if (select2.value === '#wybrane_numery') {
            accWrapper.find("#wybrane_numery").addClass("active").next().finish().slideDown("slow");
          } //phones1,2

          // phones1
          else if (select2.value === '#organizacyjno_prawny') {
            accWrapper.find("#organizacyjno_prawny").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#ksiegowosc') {
            accWrapper.find("#ksiegowosc").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#rum') {
            accWrapper.find("#rum").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#ginekologiczno_polozniczy') {
            accWrapper.find("#ginekologiczno_polozniczy").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#neonatologia') {
            accWrapper.find("#neonatologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#chirurgia') {
            accWrapper.find("#chirurgia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#urologia') {
            accWrapper.find("#urologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#ortopedia') {
            accWrapper.find("#ortopedia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#neurochirurgia') {
            accWrapper.find("#neurochirurgia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#nefrologia') {
            accWrapper.find("#nefrologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#diabetologia') {
            accWrapper.find("#diabetologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#okulistyka') {
            accWrapper.find("#okulistyka").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#otolaryngologia') {
            accWrapper.find("#otolaryngologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#choroby_wew') {
            accWrapper.find("#choroby_wew").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#kardiologia') {
            accWrapper.find("#kardiologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#neurologia') {
            accWrapper.find("#neurologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#pediatria') {
            accWrapper.find("#pediatria").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#sor') {
            accWrapper.find("#sor").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#anestezjologia') {
            accWrapper.find("#anestezjologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#chirurgia_ortopedyczna') {
            accWrapper.find("#chirurgia_ortopedyczna").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#blok_operacyjny') {
            accWrapper.find("#blok_operacyjny").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#zaklad_rehabilitacji') {
            accWrapper.find("#zaklad_rehabilitacji").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#diagnostyka_kardiologiczna') {
            accWrapper.find("#diagnostyka_kardiologiczna").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#diagnostyka_endoskopowa') {
            accWrapper.find("#diagnostyka_endoskopowa").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#patomorfologia') {
            accWrapper.find("#patomorfologia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#apteka') {
            accWrapper.find("#apteka").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#sterylizatornia') {
            accWrapper.find("#sterylizatornia").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#laboratorium') {
            accWrapper.find("#laboratorium").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#specjalistyczne') {
            accWrapper.find("#specjalistyczne").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#rodzinna') {
            accWrapper.find("#rodzinna").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#stomatologiczna') {
            accWrapper.find("#stomatologiczna").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#admin_gosp') {
            accWrapper.find("#admin_gosp").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#techniczny') {
            accWrapper.find("#techniczny").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#zywienia') {
            accWrapper.find("#zywienia").addClass("active").next().finish().slideDown("slow");
          }

          // phones2
          else if (select2.value === '#administracja') {
            accWrapper.find("#administracja").addClass("active").next().finish().slideDown("slow");
          } //phones1,2
          else if (select2.value === '#zakład_opiekunczy') {
            accWrapper.find("#zakład_opiekunczy").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#rehabilitacja') {
            accWrapper.find("#rehabilitacja").addClass("active").next().finish().slideDown("slow");
          } //phones1,2
          else if (select2.value === '#oddzial_gruzlicy') {
            accWrapper.find("#oddzial_gruzlicy").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#diagnostyka_obrazowa') {
            accWrapper.find("#diagnostyka_obrazowa").addClass("active").next().finish().slideDown("slow");
          } //phones1,2
          else if (select2.value === '#hospicjum') {
            accWrapper.find("#hospicjum").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#pozostale') {
            accWrapper.find("#pozostale").addClass("active").next().finish().slideDown("slow");
          } //phones1,2
          else if (select2.value === '#warta') {
            accWrapper.find("#warta").addClass("active").next().finish().slideDown("slow");
          }
          else if (select2.value === '#rafalowka') {
            accWrapper.find("#rafalowka").addClass("active").next().finish().slideDown("slow");
          }
        });

      }
      search();
     });


  //  var select = document.getElementById('test');

  //  select.onchange = function(){
      //  window.location.hash = this.getElementsByTagName('option')[this.selectedIndex].value;
  //  };
/*
function two(){
  var select = $("#test");
  var accordion = $(".accordionWrapper").find(".accordion");


  select.change(function(){
   window.location = this.value;
  //  accordion.attr("id", this.value).attr("selected", "selected");
  //  accordion.attr("id");

  //  var val = $(this).text();

   console.log("to jest value: " + this.value);
   console.log(accordion.attr("id"));

   if($(this.value === accordion.attr("id"))){
    // accordion.attr("selected", "selected").toggleClass("active");
    console.log('ble');
   }else{
    //  console.log("jest");
   }

  });

}

two();

});

*/

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
