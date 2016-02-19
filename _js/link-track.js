/**
 * Track when we click a link to share on Twitter.
 */
/* global document, ga */

var trackOutboundLink = function() {
  var titleElement = document.getElementsByClassName('page-title');
  var title = '';

  if (titleElement.length > 0) {
    title = titleElement[0].innerHTML;
  }

  ga('send', 'event', 'twitter', 'share', title,  {
    transport: 'beacon'
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('track-twitter');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = trackOutboundLink;
  }
});
