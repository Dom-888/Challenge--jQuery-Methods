
$(document).ready(function() {
    $(".stream-nav").click(function() {
        $(".card").removeClass("card-highlight");
        var streamNumber = $(this).attr("ID");
        $("." + streamNumber + "-card").addClass("card-highlight");
    });
});

