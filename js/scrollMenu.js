// Navbar transformation
$(document).on('scroll', function () {
    if ($(document).scrollTop() > 0) {
        $('nav, a').addClass('transform');
    } else {
        $('nav, a').removeClass('transform')
    }
    // console.log($(this).scrollTop());
})

// Scroll to page sections with <nav> links
$("nav").find("a").click(function (e) {
    e.preventDefault();
    const section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

// Arrow button in header, display: none
// $(`button.arrow`).on('click', function (e) {
//     e.preventDefault()
//     $("html, body").animate({
//         scrollTop: $(".description").offset().top
//     }, 600)
// })

$(".back").find("a").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$(".button-container button:last-child").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(".works").offset().top
    }, 1000);
});

$(".button-container button:first-child").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});