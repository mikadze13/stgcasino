$(document).ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 7, // Default for large screens
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        infinite: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom buttons functionality
    $('#nextButton').on('click', function () {
        $('.slick-carousel').slick('slickNext');
    });

    $('#prevButton').on('click', function () {
        $('.slick-carousel').slick('slickPrev');
    });
});

// banner carousel 
$(document).ready(function () {
    $('.banner').slick({
        slidesToShow: 1, // Default for large screens
        slidesToScroll: 1,
        arrows: false, // Disable default arrows
        infinite: true
        
    });

    // Custom buttons functionality
    $('#bannerNextButton').on('click', function () {
        $('.banner').slick('slickNext');
    });

    $('#bannerPrevButton').on('click', function () {
        $('.banner').slick('slickPrev');
    });
});