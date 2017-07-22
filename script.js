$(document).ready(function() {
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    $('.ui.accordion').accordion();
    $(window).resize(function() {
        var width = $(window).width();
        console.log(width);
        if (width < 600)
            $('.to_hide').hide();
        else
            $('.to_hide').show();

    });
});