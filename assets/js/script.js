
$(document).ready(function(){
  $('.slider_active').owlCarousel({
      nav:true,
      loop:true,
      dots:true,
      autoplay:false,
      autoplayTimeout:2000,
    navText:['<i class="icofont icofont-double-left"></i>','<i class="icofont icofont-double-right"></i>'],
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
     $('.comment-active').owlCarousel({
      nav:false,
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:2000,
    navText:['<i class="icofont icofont-double-left"></i>','<i class="icofont icofont-double-right"></i>'],
      responsive:{
          0:{
              items:1

          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  });
