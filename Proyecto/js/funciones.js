"use strict";
/*codigo en js para el slide de imagenes principal.*/
var slideFotos = 1;

mostrarD(slideFotos);

function plusDivs(n) {
  'use strict';
  mostrarD(slideFotos += n);
}

function mostrarD(n) {
  'use strict';
  var i;
  var x = document.getElementsByClassName("Slides");
  if (n > x.length) {slideFotos = 1}    
  if (n < 1) {slideFotos = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideFotos-1].style.display = "block";  
}
