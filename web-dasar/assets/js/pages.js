$(window).on('load', function () {

    setTimeout(function () {
        $('#load').addClass('close');
        $('html').css({
            "overflow-y": ""
        });
    }, 1200)

    setTimeout(function () {
        $('#load').remove();
    }, 2000)

});

$(window).scroll(function () {
    var topElement = $(this).scrollTop(); //top of element
    var bottomElement = $(this).scrollTop() + $(this).height(); //bottom of element

    if (topElement > $('#top').offset().top + 350) {
        $('#upBtn').addClass('visible');
    } else {
        $('#upBtn').removeClass('visible');
    };
});

$('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var tujuan = $(this).attr('href');
    var ke = $(tujuan);

    $('html,body').animate({
        scrollTop: ke.offset().top /*- 81*/
    }, 500, "swing");
});

$('.article-content img').on('click', function () {
    var address = $(this).attr('src');

    $('.modal img').attr("src", address);
    $('.modal').addClass('open');

});

$('.modal img').on('click', function () {
    $('.modal').removeClass('open');
});