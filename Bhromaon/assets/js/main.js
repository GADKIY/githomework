let slide = 0;

$(function(){
    $(window).on('scroll', function(){
        // console.log($(window).scrollTop());                
        if($(window).width()>520){
            slide = 739;
        }else if($(window).width()<=520 && $(window).width()<320){
            slide = 540;
        }else{
            slide = 520;
        }
        if($(window).scrollTop()>slide){
            $("header").addClass("fixed");
            $(".explore").addClass("explore_fixed");
        }else{
            $("header").removeClass("fixed");
            $(".explore").removeClass("explore_fixed");
        }
    });

    $(".menu_item a").on('click', function(e){
        e.preventDefault();
        let top = $($(this).attr("href")).offset().top;
        $("html, body").animate({scrollTop:top}, 400);
    });

    $(".hamburger, #menu_shadow").on('click', function(){
        $(".hamburger").toggleClass("is-active");
        $("body").toggleClass("open");
    });

});
