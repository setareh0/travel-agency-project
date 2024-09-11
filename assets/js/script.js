$(document).ready(function() {
  // $(".date").pDatepicker();
    initialValue: false,
  $('.date').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    altField: '.observer-example-alt'
 });
});
var swiper = new Swiper(".swiper-tours", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  }
});
$('.tour-list-item').click(function(){
  let value = $(this).attr('data-filter');
  $(this).addClass('active-item').siblings().removeClass('active-item')
  if (value === 'all'){
    $('.filter').show(300)
  }else{
    $('.filter').not('.' + value).hide(300);
    $('.filter').filter('.' + value).show(300);
  }
});
var swiper = new Swiper(".swiper-cards", {
  effect: "cards",
  grabCursor: true,
});
var swiper = new Swiper(".swiper-articles", {
  slidesPerView: 3,
  grid: {
    rows: 2,
    column: 3,
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
//  autoplay: {
//      delay: 2500,
//      disableOnInteraction: false,
//    }
});
  var swiper = new Swiper(".swiper-category", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
      clickable: true,
    },
   navigation: {
     nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   });
