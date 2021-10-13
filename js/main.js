$("document").ready(function(){
    $(".over").hide();
    $(".card").mouseenter(function(){
        $(".over").show();
    });
    $(".card").mouseleave(function(){
        $(".over").hide();
    });

});
