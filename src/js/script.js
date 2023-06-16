$(document).ready(function () {
  $(".slider__inner").slick({
    infinite: true,
    speed: 800,
    /* adaptiveHeight: true, */
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./img/slider-button-left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./img/slider-button-right.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $("ul.catalogue__tabs").on(
    "click",
    "li:not(.catalogue__tab_active)",
    function () {
      $(this)
        .addClass("catalogue__tab_active")
        .siblings()
        .removeClass("catalogue__tab_active")
        .closest("div.container")
        .find("div.catalogue__content")
        .removeClass("catalogue__content_active")
        .eq($(this).index())
        .addClass("catalogue__content_active");
    }
  );

  function toggleCard(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalogue-item__promo")
          .eq(i)
          .toggleClass("catalogue-item__promo_active");
        $(".catalogue-item__promo-descr")
          .eq(i)
          .toggleClass("catalogue-item__promo-descr_active");
      });
    });
  }

  toggleCard(".catalogue-item__link");
  toggleCard(".catalogue-item__link_back");

  /* Modal */

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #modal-consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #modal-consultation, #modal-thanks, #modal-order").fadeOut(
      "slow"
    );
  });

  $(".button_catalogue").each(function (i) {
    $(this).on("click", function () {
      $("#modal-order .modal__descr").text(
        $(".catalogue-item__subtitle").eq(i).text()
      );
      $(".overlay, #modal-order").fadeIn("slow");
    });
  });

  validateForm("#modal-consultation form");
  validateForm("#modal-order form");
  validateForm( "#consultation-form");

  function validateForm(form) {
    $(form).validate(
      {
        rules: {
          name: {
            required: true,
            minlength: 4
          },
          email: {
            required: true,
            email: true
          },
          phone: {
            required: true
          }
        },    
        messages: {
          name: {
            required: "Пожалуйста, введите своё имя",
            minlength: jQuery.validator.format("Нехватает ещё {0} символов")
          },
          email: {
            required: "Нам необходим ваш email, чтобы связаться с вами",
            email: "Вам email должен быть в формате name@domain.com"
          },
          phone: 'Пожалуйста введите свой номер телефона'
        }
      
      }
    );
  }

  $('input[name=phone]').mask("+370(999)-99999");
});
