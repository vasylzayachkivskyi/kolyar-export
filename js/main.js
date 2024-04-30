$(document).ready(function () {

    // CHANGE HEADER WITH SCROLL ----------- //
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
            $('.burger').addClass('change-color');
        } else {
            $('.header').removeClass('change-bg');
            $('.burger').removeClass('change-color');
        }
    });

    // RECOMMENDED SLIDER -------- //
    var swiper = new Swiper(".recommended__slider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 900,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });

    // MOBILE MENU -------- //
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('show');
        $('.header').toggleClass('mob-menu');
    });

     // MOBILE LANG -------- //
     $('.header__lang--mobile').on('click', function () {
        $(this).children('ul').slideToggle();
    });

    // POPUP --------------- //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // CLOSE POPUP -------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
        }
    });



});