$(document).ready(function() {
    $('span').click(function(event) {
        $('.h-menu').toggleClass('active');
        $('.menu__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});