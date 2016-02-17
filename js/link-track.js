/**
 * Track when we click a link to share on Twitter.
 */
/* global document, ga */

var trackOutboundLink = function() {
  ga('send', 'event', 'twitter', 'share',  {
    transport: 'beacon'
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('track-twitter');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = trackOutboundLink;
  }
});
