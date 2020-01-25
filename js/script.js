$(document).ready(function() {

    // First Challenge

    $(".stream-nav").click(function() {
        $(".card").removeClass("card-highlight");
        var streamNumber = $(this).attr("ID");
        $("." + streamNumber + "-card").addClass("card-highlight");
    });

    // Second Challenge

    $('p').click(function(){
        $(this).children('a').addClass('link-highlight')
    });

    // Third Challenge

    $('img').click(function(){
        $(this).next().children('p').slideDown();
        $(this).siblings('p').slideDown();
    });

    // Forth Challenge

    $('.card').click(function(){
        $(this).toggleClass('makePink');
    });

    // Fifth Challenge

    $('#select').click(function(){
        $(".card:not(.makePink)").css("visibility", "hidden");
    });

    $('#all').click(function(){
        $(".card").css("visibility", "visible");
    });


});

