'use strict';

// JavaScript select helper functions adapted from
// Sebastian De Deyne "Selecting elements (part 1)"
// https://sebastiandedeyne.com/javascript-framework-diet/selecting-elements-part-1/

// the ID itself is sufficient if a single word
function id(selector) {
  return document.getElementById(selector);
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function up(el, selector) {
  return el.closest(selector);
}
