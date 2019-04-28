$(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $("#rocket").addClass("show");
        $(".toc-fixed").addClass("show");
    }else{
        $("#rocket").removeClass("show");
        $(".toc-fixed").removeClass("show");

    }
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
