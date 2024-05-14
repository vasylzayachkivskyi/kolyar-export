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
        $('body').toggleClass('hidden');
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

    // SCROLL ANIMATE
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out',
        // disable: 'mobile',
    });

    // input mask
    // $('.phone-input').mask('+38 (999)999-99-99', {
    //     onBeforeMask: function (t, e) { return t.replace(/^38/g, '') },
    //     onBeforePaste: function (t, e) { return t.replace(/^38/g, '') }
    // });
    // $.fn.setCursorPosition = function (pos) {
    //     if ($(this).get(0).setSelectionRange) {
    //         $(this).get(0).setSelectionRange(pos, pos);
    //     } else if ($(this).get(0).createTextRange) {
    //         var range = $(this).get(0).createTextRange();
    //         range.collapse(true);
    //         range.moveEnd('character', pos);
    //         range.moveStart('character', pos);
    //         range.select();
    //     }
    // };
    // $('input[name="phone"]').click(function () {
    //     $(this).setCursorPosition(5);
    // });



    //  ---aimation heroscreen


    var isScrolling = false;
    function updateTransform() {
        var scroll = $(window).scrollTop();
        var translateY = scroll / 3;

        $(".heroscreen__inner").css({
            transform: "translateY(" + translateY + "px)",
        });

        isScrolling = false;
    }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var brightness = 1 - (scroll / 900);
        brightness = Math.min(Math.max(brightness, 0), 1);
        $(".heroscreen__bg").css({
            filter: "brightness(" + brightness + ")"
        });

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(updateTransform);
        }
    });





});