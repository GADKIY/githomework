"use strict";

$(function () {
  $('.circle').circleProgress({
    value: 0.65,
    fill: {
      gradient: ['#12e192', '#00d4bc']
    },
    size: 72.0,
    emptyFill: '#787c9b',
    startAngle: 30,
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    }
  });
  $('.product_card_tabs_list a').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass("active") === false) {
      $(".product_card_tabs_list a.active").removeClass('active');
      $(this).addClass('active');
      $(".product_card_body.active").removeClass("active");
      $($(this).attr("href")).addClass("active");
    }
  });
});
/* бегущие цифры */

var time = 900,
    step = 0.09;

function outNum(num, elem) {
  var l = document.querySelector('#' + elem);
  n = 0;
  var t = time / (num / step);
  var interval = setInterval(function () {
    n = n + step;

    if (n >= num) {
      clearInterval(interval);
    }

    l.innerHTML = n.toFixed(1);
  }, t);
}

outNum(7.8, 'outNum');