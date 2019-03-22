$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $description = $(`.description`);
    const descriptionFromTop = $description.offset().top;
    const descriptionHeight = $description.outerHeight();

    const $photo = $(`.photo`);
    const photoFromTop = $photo.offset().top;
    const photoHeight = $photo.outerHeight();

    const $works = $(`.works-description`);
    const worksFromTop = $works.offset().top;
    const worksHeight = $works.outerHeight();

    const $contact = $(`.contact-description`);
    const contactFromTop = $contact.offset().top;
    const contactHeight = $contact.outerHeight();

    if (scrollValue > descriptionFromTop + descriptionHeight - windowHeight) {
        $description.addClass('active');
    }

    if (scrollValue > photoFromTop + photoHeight - windowHeight) {
        $photo.addClass('active');
    }

    if (scrollValue > worksFromTop + worksHeight - windowHeight) {
        $works.addClass('active');
    }

    if (scrollValue > contactFromTop + contactHeight - windowHeight) {
        $contact.addClass('active');
    }


    if (scrollValue < 100) {
        $description.removeClass('active');
        $photo.removeClass('active');
        $works.removeClass('active');
        $contact.removeClass('active');
    }


})