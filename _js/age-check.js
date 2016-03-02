/**
 * Check the user's age to ensure they are 21 years old.
 */
/* global document, window, localStorage, location, requestAnimationFrame */

// Some fade functions. Found here:
// http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
var FadeFunctions = new function() {
  this.fadeIn = function(el, display) {
    el.style.opacity = 0;
    el.style.display = display || 'block';

    (function fade() {
      var val = parseFloat(el.style.opacity);
      /*jshint -W018 */
      if (!((val += 0.1) > 1)) {
        /*jshint +W018 */
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  };

  this.fadeOut = function(el) {
    el.style.opacity = 1;

    (function fade() {
      if ((el.style.opacity -= 0.05) < 0) {
        el.style.display = 'none';
      } else {
        requestAnimationFrame(fade);
      }
    })();
  };
};

// Grabs a get variable from the url.
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if ( pair[0] === variable ) { return pair[1]; }
  }
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  var twentyOne = localStorage.getItem('twentyOne');
  var modal = document.getElementById('modal');
  var yesResponse = modal.getElementsByClassName('yes')[0];
  var noResponse = modal.getElementsByClassName('no')[0];

  if (twentyOne !== 'true' && getQueryVariable('age') !== 'true') {
    // Fade in our little modal.
    FadeFunctions.fadeIn(modal);

    // Add an onclick if we select yes.
    yesResponse.onclick = function() {
      // Store some localStorage as true.
      localStorage.setItem('twentyOne', 'true');
      // Fade out, never to be seen again.
      FadeFunctions.fadeOut(modal);
    };

    noResponse.onclick = function() {
      // Send them away. I know, it is mean.
      location.href = 'http://www.google.com';
    };
  }
});
