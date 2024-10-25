// top games (pirveli karuseli)
$(document).ready(function() {
    $('.topgames').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    $('#nextButton-top').on('click', function() {
        $('.topgames').slick('slickNext');
    });

    $('#prevButton-top').on('click', function() {
        $('.topgames').slick('slickPrev');
    });
});

// recently played (meore karuseli)

$(document).ready(function() {
    $('.recentlyplayed').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    $('#nextButton-rec').on('click', function() {
        $('.recentlyplayed').slick('slickNext');
    });

    $('#prevButton-rec').on('click', function() {
        $('.recentlyplayed').slick('slickPrev');
    });
});


// partners (mesame karuseli)

$(document).ready(function() {
    $('.prov').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    $('#nextButton-prov').on('click', function() {
        $('.prov').slick('slickNext');
    });

    $('#prevButton-prov').on('click', function() {
        $('.prov').slick('slickPrev');
    });
});

// banner carousel 
$(document).ready(function() {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true

    });


    $('#bannerNextButton').on('click', function() {
        $('.banner').slick('slickNext');
    });

    $('#bannerPrevButton').on('click', function() {
        $('.banner').slick('slickPrev');
    });
});

// active items
function setActive(itemId) {
    $('.category-item').removeClass('active');
    $('#' + itemId).addClass('active');

    $('.category-item').removeClass('active');
    $('.category-item img').css('filter', 'none');

    $('#' + itemId).addClass('active');
    $('#' + itemId).find('img').css('filter', 'invert(27%) sepia(85%) saturate(533%) hue-rotate(95deg) brightness(95%) contrast(90%)');
}

// login register logic
$(document).ready(function () {
    $('#registerBtn').click(function () {
        $('#loginForm').hide();
        $('#registerForm').show();
        $('#authModalLabel').text('Register');
        $('#loginBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#loginBtn').removeClass('active');
        $(this).addClass('active');
    });

    $('#loginBtn').click(function () {
        $('#registerForm').hide();
        $('#loginForm').show();
        $('#authModalLabel').text('Login');
        $('#registerBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#registerBtn').removeClass('active');
        $(this).addClass('active');
    });
});
function setActive(itemId) {
    $('.category-item').removeClass('active');
    $('#' + itemId).addClass('active');

    $('.category-item').removeClass('active');
    $('.category-item img').css('filter', 'none');

    $('#' + itemId).addClass('active');
    $('#' + itemId).find('img').css('filter', 'invert(27%) sepia(85%) saturate(533%) hue-rotate(95deg) brightness(95%) contrast(90%)');
}

// login register logic
$(document).ready(function () {
    $('#registerBtn').click(function () {
        $('#loginForm').hide();
        $('#registerForm').show();
        $('#authModalLabel').text('Register');
        $('#loginBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#loginBtn').removeClass('active');
        $(this).addClass('active');
    });

    $('#loginBtn').click(function () {
        $('#registerForm').hide();
        $('#loginForm').show();
        $('#authModalLabel').text('Login');
        $('#registerBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#registerBtn').removeClass('active');
        $(this).addClass('active');
    });
});
function setActive(itemId) {
    $('.category-item').removeClass('active');
    $('#' + itemId).addClass('active');

    $('.category-item').removeClass('active');
    $('.category-item img').css('filter', 'none');

    $('#' + itemId).addClass('active');
    $('#' + itemId).find('img').css('filter', 'invert(27%) sepia(85%) saturate(533%) hue-rotate(95deg) brightness(95%) contrast(90%)');
}

// login register logic
$(document).ready(function () {
    $('#registerBtn').click(function () {
        $('#loginForm').hide();
        $('#registerForm').show();
        $('#authModalLabel').text('Register');
        $('#loginBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#loginBtn').removeClass('active');
        $(this).addClass('active');
    });

    $('#loginBtn').click(function () {
        $('#registerForm').hide();
        $('#loginForm').show();
        $('#authModalLabel').text('Login');
        $('#registerBtn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('#registerBtn').removeClass('active');
        $(this).addClass('active');
    });
});