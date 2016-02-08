/* global document, location */

// We want all links that are external to have target='_blank' on them.
// Found here: https://gist.github.com/allybee/5871749
document.addEventListener('DOMContentLoaded', function() {
  // remove subdomain of current site's url and setup regex
  var internal = location.host.replace('www.', '');
  internal = new RegExp(internal, 'i');

  // Find every link on the page
  var a = document.getElementsByTagName('a');

  for (var i = 0; i < a.length; i++) {
    // Set the host of each link.
    var href = a[i].host;
    // Does the href contain the current site's host?
    if ( !internal.test(href) ) {
      // If it does not, then we will set the target.
      a[i].setAttribute('target', '_blank');
    }
  }
});
