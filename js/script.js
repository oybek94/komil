let body = document.querySelector("body");
let header = document.querySelector(".header");
let menu = document.querySelector(".top-menu");
let humburger = document.querySelector(".humburger");

humburger.onclick = function(){
   body.classList.toggle("lock");
   header.classList.toggle("open");
   menu.classList.toggle("open");
};