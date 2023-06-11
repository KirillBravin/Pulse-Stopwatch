$(document).ready(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 800,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider-button-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/slider-button-right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
      });

      $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
          .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
      });

      function toggleCard(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalogue-item__promo').eq(i).toggleClass('catalogue-item__promo_active');
              $('.catalogue-item__promo-descr').eq(i).toggleClass('catalogue-item__promo-descr_active');
          });
        });
      }

      toggleCard('.catalogue-item__link');
      toggleCard('.catalogue-item__link_back');
});