$(window).on('load', function () {

    $('html').css({
        "overflow-y": ""
    });

    setTimeout(function () {
        $('#load').addClass('close');
    }, 1200)

    setTimeout(function () {
        $('#load').remove();
    }, 2000)

});

$(".toggle").on("click", function () {
    if ($("nav").hasClass("show")) {
        $("nav").removeClass("show");
    } else {
        $("nav").addClass("show");
    }

    if ($(".toggle").hasClass("close")) {
        $(".toggle").removeClass("close");
    } else {
        $(".toggle").addClass("close");
    }
});

$("#navbar .item").on("click", function () {

    $("nav").removeClass("show");
    $(".toggle").removeClass("close");

});

// $('.anchor').on('click', function (event) { //need anchor class
$('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var tujuan = $(this).attr('href');
    var ke = $(tujuan);

    $('html,body').animate({
        scrollTop: ke.offset().top /*- 81*/
    }, 1000, "swing");

    $("nav").removeClass("show");
});

$('#gallery .card a').on('click', function (event) {
    event.preventDefault();

    var address = $(this).attr('href');
    var scrollWidth = $('#scrollbarms').width() - $('body').width();

    $('html').css({
        "overflow-y": "hidden",
    });

    $('section').css({
        "padding-right": scrollWidth
    });

    $('aside').css({
        "padding-right": scrollWidth
    });

    $("#gallery .modal").addClass("open");

    $('#gallery .modal-frame .modal-body iframe').attr("src", address);
});

$('#gallery .close-modal').on('click', function (event) {

    $('html').css({
        "overflow-y": "",
    });

    $('section').css({
        "padding-right": ""
    });

    $('aside').css({
        "padding-right": ""
    });

    $("#gallery .modal").removeClass("open");

    $('#gallery .modal-frame .modal-body iframe').attr("src", ' ');

});

// scroll trigger
$(window).scroll(function () {
    var topElement = $(this).scrollTop(); //top of element
    var bottomElement = $(this).scrollTop() + $(this).height(); //bottom of element

    // #section2
    if (topElement > $('#section2').offset().top - 300) {
        $('#section2 .an').each(function (i) {
            setTimeout(function () {
                $('#section2 .an').eq(i).addClass('visible');
                //          console.log('testt');
            }, 250 * i);
        });
    };

    if (bottomElement < $('#section2').offset().top + 100) {
        $('#section2 .an').removeClass('visible');
    };

    // #section-Kontak
    if (topElement > $('#kontak').offset().top - 300) {
        $('#kontak .an').each(function (i) {
            setTimeout(function () {
                $('#kontak .an').eq(i).addClass('visible');
                //          console.log('testt');
            }, 250 * i);
        });
    };

    if (bottomElement < $('#kontak').offset().top + 200) {
        $('#kontak .an').removeClass('visible');
    };

    // #gallery-section
    if (topElement > $('#gallery').offset().top - 300) {
        $('#gallery .an').each(function (i) {
            setTimeout(function () {
                $('#gallery .an').eq(i).addClass('visible');
                //          console.log('testt');
            }, 250 * i);
        });
    };

    if (bottomElement < $('#gallery').offset().top + 200) {
        $('#gallery .an').removeClass('visible');
    };

    // #up-button
    if (topElement > $('#top').offset().top + 350) {
        $('#upBtn').addClass('visible');
    } else {
        $('#upBtn').removeClass('visible');
    };

});