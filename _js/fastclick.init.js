/**
 * Initiates FastClick on the page.
 */
/* global document, FastClick */

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
