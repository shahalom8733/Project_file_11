$(document).ready(function(){
   $('.nav-icon').click(function(){
    $('.menu').addClass('menu-active');
    $('.header-area').addClass('header-sticky');
   });
   $('.nav-xmark').click(function(){
    $('.menu').removeClass('menu-active');
   });

   $('.menu ul li a').click(function(){
    $('.menu ul li a.active').removeClass('active');
    $(this).addClass("active");
   });


     // counterUp
       $('.counter').counterUp({
          dealy:20000,
          time:1500
        });

       
   // preloder
       jQuery(window).load(function() {
  $('.loder').delay(100).fadeOut('slow');
  $('#preloader').delay(500).fadeOut('slow');
  $('body').delay(500).css({'overflow':'visible'});
});



});

   // hero-slide
    var swiper = new Swiper(".hero-slider", {
        slidesPerView: 2,
        spaceBetween: 40,
        freeMode: true,
        autoplay: {
          delay: 900,
    
          disableOnInteraction: false,
        },
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
    });

    // testimonial-slider-area
    var swiper = new Swiper(".testimonial", {
        loop:true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });



// $(document).ready(function(){

//   // counterUp
//   $('.counter').counterUp({
//     dealy:20000,
//     time:1500
//   });
//       // preloder
//      $(window).load(function() {
//        $(".preloder").delay(1000).fadeOut("fast");
//        $(".loder").delay(1000).fadeOut("fast");
//      });



//     // nav-bar-button
//      let menuToggle = document.querySelector(".toggle");
//        menuToggle.onclick = function() {
//         menuToggle.classList.toggle("active-main-menus");
//        };
//       $('.toggle').click(function(){
//         $('.responsive-style').slideToggle();
//         $('.header-area').toggleClass("position-sticky");
//         $('.main-about-page').toggleClass("position-sticky");
//       });








//             // happy-customar-slider
//        var swiper = new Swiper(".varticals", {
//        direction: "vertical",
//        loop: true,
//        speed: 2000,
      
//              autoplay: {
//          delay: 5000,
//        disableOnInteraction: false,
//      },
//      slidesPerView: 2,
//      spaceBetween: 154,
//      freeMode: true,
//     });
//        var swiper = new Swiper(".var-right", {
//        direction: "vertical",
//        loop: true,
//        speed: 2000,
      
//              autoplay: {
//          delay: 1000,
//        disableOnInteraction: false,
//      },
//      slidesPerView: 2,
//      spaceBetween: 154,
//      freeMode: true,
//     });

//     var swiper = new Swiper(".price-slider", {
//       slidesPerView: 1,
//             navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       freeMode: true,
//       // autoplay: {
//       //   delay: 900,
//       // },
//       breakpoints: {
//         520: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//          autoplay: false,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//           autoplay: false,
//         },
//         992: {
//           slidesPerView: 4,
//           spaceBetween: 30,
//           autoplay:false,
       
//         },
//       },
//   });


//          // magnific-popup
//          $('.video-play-button').magnificPopup({
//         type: 'iframe',
      
//         iframe: {
//             markup: '<div class="mfp-iframe-scaler">'+
//                       '<div class="mfp-close"></div>'+
//                       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
//                     '</div>', 
          
//             patterns: {
//               youtube: {
//                 index: 'youtube.com/',
          
//                 id: 'v=',
          
//                 src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
//               },
//               vimeo: {
//                 index: 'vimeo.com/',
//                 id: '/',
//                 src: 'https://player.vimeo.com/video/%id%?autoplay=1'
//               },
//               gmaps: {
//                 index: '//maps.google.',
//                 src: '%id%&output=embed'
//               }

//             },
          
//             srcAction: 'iframe_src', 
//           }  
//     });



// });





//     // editor-area
//     function ddselect(){
//   var d = document.getElementById('ddselect');
//   var displaytext = d.options[d.selectedIndex].text;
//   document.getElementById('textvalue').value = displaytext;
// }
// // copyTextScript

// let copyText = document.querySelector('.copy-text');

// copyText.querySelector('.restor-btn').addEventListener('click',function(){
//   let input = copyText.querySelector('textarea.text');
//   input.select();
//   document.execCommand("copy");
//   copyText.classList.add('active');

//   window.getSelection.removeAllRanges(); 
//   // setTimeout(function(){
//   //   copyText.classList.remove('active');
//   // },2500);


// });

// // menu-set-input
//       function showme(count){
//         document.getElementById('textvalue').value=count;
//       }


//       $(document).ready(function(){
//         $(".integration-menu input").click(function(){
//            $('.integration-menu input').removeClass('actives');
//            $(this).addClass('actives');
//         });
//       setTimeout(function() {
//            $('.copy-text').removeClass('active');
//         }, 1000);


//       $('.blog-2-table-content ul li a').click(function(){
//         $('.blog-2-table-content ul li a.active-blog-2-table').removeClass('active-blog-2-table');
//         $(this).addClass('active-blog-2-table');
//       })

//       });


//       // pro-pricing-swiper-slider





