$(function(){




    $('.related__inner').slick({
        slidesToShow:4,
        arrows: true
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

    })

    $('.top-slider-main__inner').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000

    })

    var mixer = mixitup('.products-items');
    var mixer = mixitup('.design-items');

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
        prefix:'$',
        step: 1,
        prettify_separator: ".",
        prettify_enabled: true,
    });

    $('.star').rateYo({
        starWidth: "17px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });

    $('.filters-category__select').styler();




})