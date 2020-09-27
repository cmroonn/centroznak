"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const partnersSlider = new Swiper(".partners__slider", {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: ".partners__next_slide",
        prevEl: ".partners__prev_slide",
      },
      speed: 3000,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          centeredSlides: false,
        },

        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },

        1300: {
          slidesPerView: 6,
          centeredSlides: false,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const popularProds = new Swiper(".popular__carousel", {
      slidesPerView: 4,
      allowTouchMove: false,
      spaceBetween: 10,
      navigation: {
        nextEl: ".popular__next_slide",
        prevEl: ".popular__prev_slide",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 2,
        },

        1100: {
          slidesPerView: 4,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const popularProds = new Swiper(".item__preview__mob", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".popular__next_slide",
        prevEl: ".popular__prev_slide",
      },
      pagination: {
        el: ".item__preview__pagination",
        type: "bullets",
        clickable: true,
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const partnersSlider = new Swiper(".main-screen__slider", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 15000,
      },
      navigation: {
        nextEl: ".main-screen__next_slide",
        prevEl: ".main-screen__prev_slide",
      },
      pagination: {
        el: ".main-screen__pagination",
        type: "bullets",
        clickable: true,
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".about__button");
    const aboutSection = document.querySelector(".about");
    btn.addEventListener("click", () => {
      aboutSection.classList.toggle("show");
      btn.classList.toggle("active");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const similarArticles = new Swiper(".similar_articles__slider", {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: ".similar_articles__next_slide",
        prevEl: ".similar_articles__prev_slide",
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1300: {
          slidesPerView: 4,
        },
      },
    });
  } catch (e) {}

  try {
    const showMoreButtons = document.querySelectorAll(
      ".product_card__showMore"
    );

    showMoreButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        const text = parent.querySelector(".product_card__desc");
        text.classList.toggle("show");
        btn.classList.toggle("active");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const allFilters = document.querySelectorAll(".filter_block__heading");
    const allFiltersPoints = document.querySelectorAll(".filter_block__points");
    allFilters.forEach((filter) => {
      filter.addEventListener("click", (e) => {
        allFiltersPoints.forEach((points) => {
          if (
            points.closest(".filter_block") === filter.closest(".filter_block")
          ) {
            filter.parentElement.classList.toggle("show");
          }
        });
      });
    });
  } catch {}

  try {
    const allTabs = document.querySelectorAll(".item__data__tabs li");
    const allBlocks = document.querySelectorAll(".item__data__content__item");

    allTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("active")) {
          tab.classList.remove("active");
          allBlocks.forEach((block) => {
            block.classList.remove("show");
          });
        } else {
          allTabs.forEach((el) => el.classList.remove("active"));
          tab.classList.add("active");
          const tabId = tab.dataset.tab;
          allBlocks.forEach((block) => {
            block.classList.remove("show");
            block.dataset.tab === tabId ? block.classList.add("show") : false;
          });
        }
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const allMinis = document.querySelectorAll(".item__preview__mini img");
    const bigPhoto = document.querySelector(".item__preview__big img");
    allMinis.forEach((elem) => {
      elem.addEventListener("click", () => {
        bigPhoto.src = elem.src;
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const openFiltersButton = document.querySelectorAll(".catalog__btnFilters");
    const filters = document.querySelector(".catalog__content__filters");

    openFiltersButton.forEach((el) => {
      el.addEventListener("click", () => {
        filters.classList.toggle("show");
      });
    });
  } catch (e) {
    console.log(e);
  }

  {
    const allInputs = document.querySelectorAll(".cart-input input");

    allInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.closest(".cart-input").classList.add("focus");
      });

      input.addEventListener("blur", () => {
        input.closest(".cart-input").classList.remove("focus");
      });
    });
  }

  {
    const allPopup = document.querySelectorAll(".popup");
    const allCloseButtons = document.querySelectorAll(".closePopup");
    allPopup.forEach((popup) => {
      popup.addEventListener("click", (e) => {
        e.target === popup ? popup.classList.remove("show") : false;
      });

      document.addEventListener("keydown", function (e) {
        if (e.keyCode === 27) {
          popup.classList.remove("show");
        }
      });
    });

    allCloseButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".popup").classList.remove("show");
      });
    });

    const openOrderPopup = document.querySelectorAll(
      ".orderCallOpen, #orderCallOpen"
    );

    openOrderPopup.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".order_call").classList.add("show");
      });
    });
  }

  {
    try {
      const callCatalogButton = document.querySelectorAll(".callCatalog");
      const categories = document.querySelector(".category_list__dynamic");
      callCatalogButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const posTop = btn.getBoundingClientRect().height;
          const posLeft = btn.getBoundingClientRect().left;
          console.log(posLeft);
          console.log(posTop);
          categories.style.top = posTop + "px";
          categories.style.left = posLeft + "px";
          categories.classList.add("active");
        });
      });

      categories.addEventListener("mouseleave", () => {
        categories.classList.remove("active");
      });
    } catch (e) {
      console.log(e);
    }
  }

  {
    const privacyPopup = document.querySelectorAll(".privacy_policy");
    const callPrivacyBtn = document.querySelectorAll(".callPrivacy");

    callPrivacyBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        privacyPopup.forEach((popup) => {
          popup.classList.add("show");
        });
      });
    });
  }

  try {
    // required inputs
    const allFields = document.querySelectorAll(".order_call .field"),
      orderCallForm = document.querySelector(".order_call__wrapper");
    console.log(allFields);
    orderCallForm.addEventListener("submit", (e) => {
      e.preventDefault();
      allFields.forEach((field) => {
        field.value === ""
          ? field.closest(".cart-input").classList.add("field_error")
          : field.closest(".cart-input").classList.remove("field_error");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const phoneMask = IMask(document.getElementById("phone_field"), {
      mask: "+{7}(000)000-00-00",
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const orderPhone = IMask(document.getElementById("orderCall-phone-mask"), {
      mask: "+{7}(000)000-00-00",
    });
  } catch (e) {
    console.log(e);
  }

  // Inputs validation

  {
    try {
      const form = document.querySelector(".cart");
      const submit = document.getElementById("cartSubmit");
      const emailInput = document.querySelector("input[name='email']");
      const fields = document.querySelectorAll(".cart .field");
      const telInput = document.getElementById("phone_field");

      console.log(emailInput);
      let rules = {
        email: {
          email: true,
          required: true,
        },

        required: {
          required: true,
        },
      };

      const validate = () => {
        if (!approve.value(emailInput.value, rules.email).approved) {
          emailInput.parentElement.classList.add("error");
        } else {
          emailInput.parentElement.classList.remove("error");
        }

        console.log(telInput.value.length);

        for (var i = 0; i < fields.length; i++) {
          if (!approve.value(fields[i].value, rules.required).approved) {
            fields[i].parentElement.classList.add("error");
          } else {
            fields[i].parentElement.classList.remove("error");
          }
        }

        if (telInput.value.length < 16) {
          telInput.parentElement.classList.add("error");
          console.log("added");
        } else {
          telInput.parentElement.classList.remove("error");
        }
        let errors = document.querySelectorAll(".cart .cart-input.error");

        if (errors.length <= 0) {
          return true;
        } else {
          errors[0].focus();
          errors.forEach((error) => {
            const input = error.querySelector("input");
            input.addEventListener("keyup", (e) => {
              // if input has been changed remove class error

              console.log(input.value);
              if (input.value !== "") {
                error.classList.remove("error");
              } else {
                error.classList.add("error");
              }
            });
          });
          return false;
        }
      };

      // On submit
      submit.addEventListener("click", (e) => {
        e.preventDefault();
        validate();

        if (validate()) {
          $.ajax({
            method: "POST",
            url: "sender.php",
          });
        } else {
          return false;
        }
      });

      // Allow only "-" and digits

      const disableLetters = (input) => {
        let val = input.value;
        let rep = /[\.;":'a-zA-Zа-яА-Я]/;

        if (rep.test(val)) {
          val = val.replace(rep, "");
          input.value = val;
        }
      };

      const inputsDisableLetters = document.querySelectorAll(
        "input[name='apartament']"
      );

      inputsDisableLetters.forEach((input) => {
        input.addEventListener("keyup", () => {
          disableLetters(input);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }
});
