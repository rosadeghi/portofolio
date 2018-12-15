
  
    $(function () {
        $("#accordion").accordion();
    });

    $(function () {
        $("#tabs").tabs();
    });
    $(function () {
        $("#tabs-b").tabs();
    });
    

   
   

    $(document).ready(function () {
    
    $(".js-box-container").hover(function () {
            $(this).find(".js-box").removeClass('remove-class')
            $(this).find(".js-box").addClass('add-class')
        }, function () {
            $(this).find(".js-box").removeClass('add-class')
            $(this).find(".js-box").addClass('remove-class')

      
        $(".topicon").onclick(function () {
            $(this).find(".js-box-container").css('box-shadow', '0 0 7px #e9d9d9')
        }, function () {
            $(this).find(".js-box-container").css('box-shadow', '0 0 0px #e9d9d9')

        });
    });


    




 $(document).ready(function () {
    
    $(".featured-pro").hover(function () {
            // $(this).find(".js-box").removeClass('remove-class')
            $(this).find(".featured-pro-text").css("box-shadow", "0px 0px 7px #e9d9d9")
        }, function () {
            // $(this).find(".js-box").removeClass('add-class')
            $(this).find(".featured-pro-text").css("box-shadow", "0px 0px 0px #e9d9d9")

        });

        $(".featured-pro").hover(function () {
            $(this).find(".featured-pro-box-1").css("background-color", "#4a7aec")
        }, function () {
            $(this).find(".featured-pro-box-1").css( "background-color", "  rgba(0,0,0,0.5)")

        });
    });    





$(document).ready(function() {
$('.dropdown').click (
    function(){
        $(this).children('.sub-menu').slideDown(400);
    },
    function(){
        $(this).children('.sub-menu').slideUp(200);
    }
);
});
    

    $(document).ready(function (){
$('#nav-menu > li').each(function(){
    var t = null;
    var li = $(this);
    li.hover(function(){
        t = setTimeout(function(){
            li.find("ul").slideDown(300);
            t = null;
        }, 300);
    }, function(){
        if (t){
            clearTimeout(t);
            t = null;
        }
        else
            li.find("ul").slideUp(200);
    });
})
});

