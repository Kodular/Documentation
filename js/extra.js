$(document).ready(function () {
    // Load Videos in the Docs
    $('img[alt="YOUTUBE"]').each(function () {
        var id = $(this).attr('src').split('/')[$(this).attr('src').split('/').length - 1];
        var video = '<iframe style="width: 100%;height: 450px;" src="https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        $(this).replaceWith(video);
    });

    // Lightbox
    event.preventDefault();
    $(this).ekkoLightbox();
});