/**
 * Check the user's age to ensure they are 21 years old.
 */
/* global document, localStorage, location, requestAnimationFrame */

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
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = 'none';
      } else {
        requestAnimationFrame(fade);
      }
    })();
  };
};

document.addEventListener('DOMContentLoaded', function() {
  var twentyOne = localStorage.getItem('twentyOne');
  var modal = document.getElementById('modal');
  var yesResponse = modal.getElementsByClassName('yes')[0];
  var noResponse = modal.getElementsByClassName('no')[0];

  if (twentyOne !== 'true') {
    // Fade in our little modal.
    FadeFunctions.fadeIn(modal);

    yesResponse.onclick = function() {
      localStorage.setItem('twentyOne', 'true');
      FadeFunctions.fadeOut(modal);
    };

    noResponse.onclick = function() {
      location.href = 'http://www.google.com';
    };
  }
});
