"use strict";

$(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [{
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});