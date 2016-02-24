/**
 * Redirect to the new site.
 */

/* global window */

var hostname = window.location.hostname;

if (hostname === "sxdrinks.com") {
  window.location = "https://openbaratx.com" + window.location.pathname;
}
