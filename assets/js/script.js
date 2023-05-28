$(document).ready(function () {
  // loading
  $("#loading").fadeOut(1500);

  $(".play-icon").click(function(){
    document.querySelector(".header-video video").play();
    $(this).addClass("d-none");
    $(".pause-icon").removeClass("d-none");
    $('.video-cover-img').fadeOut(2000);
  })
 
  $(".pause-icon").click(function(){
    document.querySelector(".header-video video").pause();
    $(this).addClass("d-none");
    $(".play-icon").removeClass("d-none");
    $('.video-cover-img').fadeIn(2000);
  })

  $('video').on('ended',function(){ 
    $('.video-cover-img').fadeIn(2000);
    $('.pause-icon').addClass("d-none");
    $(".play-icon").removeClass("d-none");
  });

  $('.partners-slider .owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
        }
    }
  });

  $(".single_book_single .owl-carousel").owlCarousel({
    items: 2,
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      520: {
        items: 1,
      },
      750: {
        items: 1,
      },
      992: {
        items: 1,
      },

    },
  });
  
  $(".most_recent .owl-carousel").owlCarousel({
    items: 2,
    rtl: true,
    loop: true,
    margin: 15,
    nav: false,
    responsive: {
      0: {
        items: 1.5,
      },
      520: {
        items: 2,
      },
      750: {
        items: 2.5,
      },
      992: {
        items: 3,
      },
      1200:{
        items: 4,
      },
      1400:{
        items: 4.5,

      }
    },
  });
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  $(function () {
    $(".Star-rate").rateYo({
      starWidth: "15px",
      ratedFill: "#FFC107",
      readOnly: true,
      normalFill: "#eee",
      rtl:true
    });
  });
  $('select').niceSelect();
});


AOS.init();
