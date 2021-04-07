$(document).ready(function () {
    $("#phone").mask('+38 (099) 999-99-99');  /* для того, чтобы при последней недовведённой цифры форма не сбросилась запись будет такая $("#phone").mask('+38 (099) 999-99-99?9') */

    $("#card_number").mask('9999 9999 9999 9999');

    $("#card_cvv").mask('999?9');
    
    // $("select").styler();
});

$(function(){
            $(window).scroll(function(){                
                if($(window).scrollTop()>100){
                    $("header").addClass("page_header");
                }else{
                    $("header").removeClass("page_header");
                }
            });

            $(window).scroll(function(){                
                if($(window).scrollTop()>100){
                    $(".mobile_menu_block").addClass("mobile_menu_higher");
                }else{
                    $(".mobile_menu_block").removeClass("mobile_menu_higher");
                }
            });

            $(".to_top").click(function(){
            $("html, body").animate({scrollTop:0}, 400);
            });
            
            $(window).scroll(function(){                
                if($(window).scrollTop()>500){
                    $(".to_top").addClass("active");
                }else{
                    $(".to_top").removeClass("active");
                }
            });

            $(".hamburger, #menu_shadow").click(function(){
                $(".hamburger").toggleClass("is-active");
                $("body").toggleClass("open");
            });
            
            $(".mobile__menu a").click(function(){
                $(".hamburger").removeClass("is-active");
                $("body").removeClass("open");
            });
            
        
            $(".header__menu a").click(function(e){
                e.preventDefault();
                let top = $($(this).attr("href")).offset().top;
                $("html, body").animate({scrollTop:top}, 400);
            });

            $(".modal_link").click(function(e){
                e.preventDefault();
                $($(this).attr("href")).addClass("open");
            });

            $(".modal_close").click(function(){
                $(this).parents(".modal_wrap").removeClass("open");
            });

         });         