$(document).on('scroll', function () {
    if ($(document).scrollTop() > 0) {
        $('nav, a').addClass('transform');
    } else {
        $('nav, a').removeClass('transform')
    }
    // console.log($(this).scrollTop());
})