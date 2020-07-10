'use strict';

// const helpers = id("helpers");
const myhead = id("bighead");
const mainpart = up($("main > section"), "main");
const els = $$("section");
  
const usehelpers = () => {
  myhead.classList.add("standout")
  mainpart.classList.add("backme")
  
  els.forEach(el => {
  	el.innerHTML = "Look at me!";
  	el.classList.add("hilite");
  });    
}

helpers.addEventListener('click', usehelpers);
