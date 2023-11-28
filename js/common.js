// 상단 on
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
        $('#header').addClass('on');
    } else {
        $('#header').removeClass('on');
    }
   
});




    // 상단 lnb
	$(document).ready(function() {
        $(document).ready(function() {
            $('.depth1').hover(
                function() {
                    $(this).find('.depth_box').show();
                },
                function() {
                    $(this).find('.depth_box').hide();
                }
            );
        });
        $('.depth1').on('mouseleave', function() {
            $('.depth_box').hide();
        });
    });

    // aside on off
    $(function(){
        $('.btn_menu, .btn_close').on('click', function() {
            if ($('.aside').hasClass('on')) {
                $('.aside').removeClass('on');
                $('html, body').css({'height':'inherit', 'overflow':'inherit'});
            } else {
               $('.aside').addClass('on');
                $('html, body').css({'height':'100%', 'overflow':'hidden'});
            }
         });
         $('.aside .depth1').on('click', function() {
             $('.depth_list').not($(this).next()).slideUp();
             $(this).next().slideToggle();
         });
        //  visual_Slid
         var swiper = new Swiper('.visual .swiper-container', {
            loop : true,
            paginationClickable: true,
            spaceBetween: 0,
            navigation: {
                nextEl: '.visual .swiper-button-next',
                prevEl: '.visual .swiper-button-prev',
            },
            effect : 'fade',
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayDisableOnInteraction: false
    });

    // room_list
    var product = $(".room_list"),
        productText = [],
        productItem = product.find(".item"),
        initialTotal = 4; // 초기 total 값

    productItem.each(function (idx) {
        productText.push($(this).find(".txtBox").text());
    });

    var productSwiper = new Swiper(".room_list .slideBox", {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: false,
        speed: 1000,
        allowTouchMove: true,
        waitForTransition: false,
        autoplay: false,
        
        on: {
            init: function () {
                var _this = this;

                // 초기 total 값이 슬라이드 수보다 작을 때만 total 값 변경
                if (initialTotal <= _this.slides.length) {
                    product.find(".total").text(initialTotal);
                }
          
                
                // pagination 클릭 시 해당 slide로 이동
                product.find(".swiper-pagination .bullet button").on("click", function () {
                    var index = $(this).parent().index();
                    _this.slideTo(index);
                });


                // 이전 버튼 클릭 이벤트
                product.find(".prev-btn").on("click", function () {
                    _this.slidePrev();
                });

                // 다음 버튼 클릭 이벤트
                product.find(".next-btn").on("click", function () {
                    _this.slideNext();
                });
            },
            slideChange: function () {
                product.find(".number").text(this.realIndex + 1);

                // pagination 버튼 활성화 처리
                product.find(".swiper-pagination .bullet button").removeClass("active");
                product.find(".swiper-pagination .bullet").eq(this.realIndex).find("button").addClass("active");
            },
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            479: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            981: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            
            1023: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1201: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    // 페이지 로딩 후 첫 번째 bullet 활성화
    product.find(".swiper-pagination .bullet button").first().addClass("active");


    // main_special_list
     // var text 배열 선언
     var text = ['오션뷰온수풀','아모푸카페','개별바베큐','오션뷰테라스','서비스'];

     // 함수를 이용하여 Swiper 초기화
     function initializeSwiper() {
         var bottomSwiper = new Swiper('.swiper-bottom', {
             slidesPerView: '1',
             pagination: {
                 el: ".swiper-pagination-custom",
                 clickable: true,
                 bulletClass:"custom_bullet",
                 bulletActiveClass: "swiper-pagination-custom-bullet-active",
 
                 renderBullet: function (index, className) {
                     return '<div class="'+className+'"><span>'+ (text[index]) +'</span></div>';
                 },
             },
             autoplay: true,
             speed: 1000,
             loop: false,
             touchRatio: 0.2,
             observer: true,
             observeParents: true
         });
     }
 
     // 화면 폭에 따라 text가 나타나지 않도록 조건 추가
     function toggleTextVisibility() {
         if ($(window).width() < 480) {
             $(".swiper-pagination-custom").hide();
         } else {
             $(".swiper-pagination-custom").show();
         }
     }
 
     // 초기화 함수 호출
     initializeSwiper();
 
     // 창 크기가 변경될 때 text 가시성을 토글
     $(window).on('resize', function() {
         toggleTextVisibility();
     });
 
     // 페이지 로딩 후 한번 실행
     toggleTextVisibility();


});


// main_reserv
$(function(){
    const content = "아름다운 여수에서 사랑하는 사람들과 함께\n 특별하고 소중한 시간을 보내보세요.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing(){
        if (i <= 23) {
            if (content[i] === "." && i === content.length - 1) {
                text.innerHTML += `<span style="color: #2D3A80; font-size: 35px;">${content[i]}</span>`;
            } else {
                text.innerHTML += `<span style="font-weight: normal; color: #111;">${content[i] === "\n" ? "<br/>" : content[i]}</span>`;
            }
        } else {
            text.innerHTML += content[i] === "\n" ? "<br/>" : content[i];
        }

        i++;

        if (i >= content.length) {
            clearInterval(interval);
        }
    }

    const interval = setInterval(typing, 200);
    window.addEventListener('load', typing);
});
//------------main_reserv_end----------------- 

// ---------footer--------------
  $(document).ready(function () {
    // AOS 초기화
    AOS.init();

    // 스크롤 이벤트 감지
    $(window).scroll(function () {
      // 특정 스크롤 위치에서 클래스 토글
      if ($(this).scrollTop() > 50) {
        $('.footer_box').addClass('on');
      } else {
        $('.footer_box').removeClass('on');
      }
    });
    
  });

// sub_ABOUT_slide
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".about_bottom", {
        slidesPerView: '4',
        spaceBetween: 20,
        autoplay: {
         delay: 0,
         stopOnLastSlide: false,
         disableOnInteraction: true,
      },
     
      speed:7000,
      loop:true,
      slidesPerView: "auto",
      loopedSlides: 3, //noSwiping : true,
      observer:true, 
      observeParents:true,
      });
});