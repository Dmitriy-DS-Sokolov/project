$(function() {
    //карусель клиентов
    $('.js-client-carousel').slick({
        dots: true, 
        arrows: true, 
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    // карусель отзывов 
    $('.js-rewiews-carousel').slick({
        dots: true, 
        arrows: true, 
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    // карусель галереи   
    $('.slider-for-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-gallery'
    });
    $('.slider-nav-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for-gallery',
    dots: true  
    });

    //плавный скролл по анкору
    $('.js-scroll-link').on('click', function(evt) {
        evt.preventDefault();
        //имя ссылки
        var anchorName = $(this).attr('href');
        // //проверка, открыто ли мобменю
        // if($('body').hasClass('is-mobmenu-open')) {
        //     $('body').removeClass('is-mobmenu-open');
        // }
        //переход к анкору
        $('html, body').stop().animate({
            scrollTop: $(anchorName).offset().top
        }, 550, 'easeOutQuad');
    });

    // //открытие мобменю
    // $('.js-mobmenu-open').on('click', function() {
    //     $('body').addClass('is-mobmenu-open');
    // });

    // //закрытие мобменю
    // $('.js-mobmenu-close').on('click', function() {
    //     $('body').removeClass('is-mobmenu-open');
    // });
});