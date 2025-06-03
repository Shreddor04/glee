$(function(){

    $('.product-inner__filters-btn').on('click', function(){
        $('.product-filters').slideToggle()
    })

    $(".filters-price__input").ionRangeSlider({



        onChange: function (data) {
            $('.filters-price__from').text(data.from);
            $('.filters-price__to').text(data.to);
            $('.filters-price__from').text(data.from_pretty);
            $('.filters-price__to').text(data.to_pretty);
        },
        onStart: function (data) {
            $('.filters-price__from').text(data.from);
            $('.filters-price__to').text(data.to);
            $('.filters-price__from').text(data.from_pretty);
            $('.filters-price__to').text(data.to_pretty);
        },
        prefix: '$',
        step: 1,
        prettify_separator: ".",
        prettify_enabled: true,
    });

    $('.filters-category__select').styler();


    $('.footer-top__title').on('click',function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active')
    })

    $('.user-nav__link-elips').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active'); 
    })


    $('.related__inner').slick({
        slidesToShow:4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })





    $('.product-tabs__top-link').on('click', function(e){
        e.preventDefault(),
        $('.product-tabs__top-link').removeClass('product-tabs__top-link--active')
        $(this).addClass('product-tabs__top-link--active');
        

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active')


    });

    $('.product-one__input').styler({
        arrows: true,
    });  

    $('.prodect-slide__min').slick({
        asNavFor:'.prodect-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggble: false,
        arrows:false
    })

    $('.prodect-slide__big').slick({
        asNavFor: '.prodect-slide__min',
        arrows: false,
        draggble:false,
        responsive:[
            {
                breakpoint: 830 ,
                settings: {
                    draggble: true, 
                }
            }
        ]

    })

    $('.top-slider-main__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000

    })

    var mixer = mixitup('.products-items');
    var mixer = mixitup('.design-items');



    $('.star').rateYo({
        starWidth: "17px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

   




})