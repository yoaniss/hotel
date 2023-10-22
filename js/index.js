$(document).ready(function() {
  AOS.init();

  let $gnbHeader = $("header"),
      $gnb = $("header .gnb > li"),
      $gnbBanner = $(".gnb_banner"),
      $bannerImg = $gnbBanner.find("img")

  //gnb
  $gnb.on("mouseover focusin", function () {
  $(this).children("ul").addClass("on");
  $gnbHeader.addClass("on");

  $gnbBanner.stop().animate(
    {
      height: 200,
      opacity: 1,
    },"fast");
  $bannerImg.stop().animate(
    {
      top: "-150px",
    }, 500);
   });

  $gnb.on("mouseleave", function () {
    $(this).children("ul").stop().removeClass("on");
  });

  $('header, .gnb_banner').on("mouseleave focusout", function () {
    $gnbHeader.removeClass("on");
    $gnbBanner.stop().animate({
      height: 0,
      opacity: 0,
    });
    $bannerImg.stop().animate(
      {
        top: 0
      },"fast");
  })

  //menu_bar
  let $full_menu = $('.full_menu')
  $(".menu_bar").removeClass("on");
  $(".menu_bar").on("click", function () {
      $(this).toggleClass("on");
      $full_menu.toggleClass('open')
      $gnbHeader.toggleClass('open')
      $('body').toggleClass('open')   
  });
  //header
  let $header = $("header"),
      $about = $(".about"),
      $headerHeight = $header.height();
      $btnTop = $('.btn_top')

  $(window).scroll(function () {
    let i = Math.floor($(this).scrollTop());
    //console.log(i);
    if ($header.hasClass('open')) {
      return false
    }

    if ($headerHeight < i) {
      $header.addClass("on");
      $about.stop().fadeOut(100)
    } else {
      $header.removeClass("on");
      $about.stop().fadeIn(100)
    } 
    if (i > 800) {
      $btnTop.fadeIn(400)
    } else {
      $btnTop.fadeOut(400)
    }
  });

  $gnbHeader.hasClass('on', function() {
    $('.logo_color').stop().animate({
      opacity: 1
    })
  })

  //swiper.area_visual
  var swiper = new Swiper(".area_visual", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //swiper.full_swiper
  var swiper = new Swiper(".full_swiper", {
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //datepicker
  $(".datepicker").datepicker();
  $("#startDay, #endDay").datepicker({
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true,
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    dateFormat: 'yy-mm-dd',
  })

  $('#startDay').datepicker("option", "maxDate", $("#endDay").val());
  $('#startDay').datepicker("option", "onClose", function (selectedDate) {
    $("#endDay").datepicker("option", "minDate", selectedDate);
  });

  $('#endDay').datepicker();
  $('#endDay').datepicker("option", "minDate", $("#startDay").val());
  $('#endDay').datepicker("option", "onClose", function (selectedDate) {
  $("#startDay").datepicker("option", "maxDate", selectedDate);
  });
  $('#startDay').datepicker('setDate', 'today');
  $('#endDay').datepicker('setDate', '+1D');

  /* area_event bxslider */
  $('.bxslider').bxSlider({
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '→',
    prevText: '←'
  });
  
  let tab = $('.tabs > li'),
      prev = $('#slider-prev a'),
      next = $('#slider-next a')

  tab.on('click', function() {
      let idx = $(this).index()

      let tab_cont = $(this).parent('.tabs').siblings('.tab_container').children('.tab_content').eq(idx);

      $(this).addClass('active')
      $(this).siblings().removeClass('active')

      $(tab_cont).addClass('on')
      $(tab_cont).siblings().removeClass('on')

  })

  var swiper = new Swiper(".eventSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        
      1600: {  //브라우저가 1535보다 클 때
        slidesPerView: 4, 
        spaceBetween: 30,
      },
      767: {  //브라우저가 767보다 클 때
        slidesPerView: 3,
        spaceBetween: 20,
      },

    },
  });

  var swiper = new Swiper(".roomSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect : 'fade',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let roomTab = $('.room_tabs li')

  roomTab.on('click', function() {
    let idx = $(this).index()

    let room_cont = $(this).parents('.right_cont').siblings('.left_cont').children('.room_container').children('.tab_cont').eq(idx);

    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    $(room_cont).addClass('on')
    $(room_cont).siblings().removeClass('on')
  })

  let btnSite = $('.site button')
  btnSite.on('click', function() {
    $(this).parent('.btnSelect').toggleClass('active')
    $(this).siblings('ul').slideToggle(300)
  })

})
