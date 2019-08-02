require('./imagecarousel')
require('./animations')

AOS.init();

$(document).ready(function(){
  
  // Load "default" menu item section and apply active style
  $('.pizzas').addClass('active');
  $('.menu-content-container').load('pizzas.html')

  // Mobile nav slider
  $('.mobile-menu').click(function() {
    $('nav').slideToggle(200);
  })

  // Remove inline style from nav when switching from mobile
  $(window).resize(function() {
    if ($(this).width() > 480) {
          $("nav").attr("style", ""); 
    }
  });

  // Back to nav buttton
  $(window).scroll(function() {
    if ($(this).scrollTop()>500) {
      $('.toTop').fadeIn();
     } else {
      $('.toTop').fadeOut();
     }
  })

  $('.parallax-slider').attr('alt', 'image');

});


// Menu intro Buttons

// Pizzas Button
$('.pizzas').click(function(e){
  e.preventDefault()

  // Apply and remove active class style
  $(this).addClass('active');
  $('.salads').removeClass('active');
  $('.drinks').removeClass('active');

  // Load html file with menu content
  $('.menu-content-container').load('pizzas.html')
})

// Salads Button
$('.salads').click(function(e){
  e.preventDefault()

  // Apply and remove active class style
  $(this).addClass('active');
  $('.pizzas').removeClass('active');
  $('.drinks').removeClass('active');

  // Load html file with menu content
  $('.menu-content-container').load('salads.html')
})

// Drinks Button
$('.drinks').click(function(e){
  e.preventDefault()

  // Apply and remove active class style
  $(this).addClass('active');
  $('.pizzas').removeClass('active');
  $('.salads').removeClass('active');

  // Load html file with menu content
  $('.menu-content-container').load('drinks.html')
})

// jQuery Smooth Scroll
// When User Clicks Button Page Scrolls to the top
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 400, function () {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });
});




