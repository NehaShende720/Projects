/*home banner*/
const swiper = new Swiper('.swiper', {
  
  loop: true,

  autoplay: {
    delay: 3000,
  },
   
  // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});


/* Testinomial */
function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
              
          }
      });
  }
  
  
  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
  
}

$(document).ready(function () {
  initParadoxWay();
});




/* Form Validation*/

var $registrationForm = $('#registration');
jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "Please enter your name");


if($registrationForm.length){
$registrationForm.validate({
    rules:{
        
        name: {
            required: true,
            noSpace: true
        },

        subject: {
          required: true,
      },

      phone: {
          required: true,
      },

        email: {
            required: true,
            customEmail: true
        },
        message: {
            required: true
        }
    },


    messages:{
        name: {
            required: 'Please enter name!'
        },
        subject: {
          required: 'Please enter the subject!'
      },
      phone: {
          required: 'Please enter phone number!'
      },
        email: {
            required: 'Please enter email!',
        },
        message: {
            required: 'Please enter Message!'
        }
    },

});
}