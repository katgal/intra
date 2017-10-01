document.addEventListener("DOMContentLoaded", function() {

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
/*
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      }
*/



    });

  }

});
