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
            })
        });