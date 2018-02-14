"use strict";
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  'use strict';
  showDivs(slideIndex += n);
}

function showDivs(n) {
  'use strict';
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}