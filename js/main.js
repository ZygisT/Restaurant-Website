!function(e){var a={};function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)t.d(n,i,function(a){return e[a]}.bind(null,i));return n},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){t(1),t(2),AOS.init(),$(document).ready(function(){$(".pizzas").addClass("active"),$(".menu-content-container").load("pizzas.html"),$(".mobile-menu").click(function(){$("nav").slideToggle(200)}),$(window).resize(function(){$(this).width()>480&&$("nav").attr("style","")}),$(window).scroll(function(){$(this).scrollTop()>500?$(".toTop").fadeIn():$(".toTop").fadeOut()})}),$(".pizzas").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".salads").removeClass("active"),$(".drinks").removeClass("active"),$(".menu-content-container").load("pizzas.html")}),$(".salads").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".pizzas").removeClass("active"),$(".drinks").removeClass("active"),$(".menu-content-container").load("salads.html")}),$(".drinks").click(function(e){e.preventDefault(),$(this).addClass("active"),$(".pizzas").removeClass("active"),$(".salads").removeClass("active"),$(".menu-content-container").load("drinks.html")}),$(document).ready(function(){$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},400,function(){window.location.hash=a})}})})},function(e,a){$(".carousel").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})},function(e,a){AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:1500,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"}),$(".landing-section").parallax({imageSrc:"./images/headers/main_page_header.jpg"}),$(".most-popular-pizzas-section").parallax({imageSrc:"./images/main_page/table_top.jpg"}),$(".about-us-landing-section").parallax({imageSrc:"./images/headers/about_us_header.jpg"}),$(".menu-landing-section").parallax({imageSrc:"./images/headers/menu_header.jpg"}),$(".contact-us-landing-section").parallax({imageSrc:"./images/headers/contact_us_header.jpg"})}]);