"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const partnersSlider = new Swiper(".partners__slider", {
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: ".partners__next_slide",
        prevEl: ".partners__prev_slide",
      },

      breakpoints: {
        500: {
          slidesPerView: 2,
          centeredSlides: false,
        },

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
        allTabs.forEach((el) => el.classList.remove("active"));
        tab.classList.add("active");
        const tabId = tab.dataset.tab;

        allBlocks.forEach((block) => {
          block.classList.remove("show");
          block.dataset.tab === tabId ? block.classList.add("show") : false;
        });
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
    });

    allCloseButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".popup").classList.remove("show");
      });
    });

    const openOrderPopup = document.getElementById("orderCallOpen");
    openOrderPopup.addEventListener("click", () => {
      document.querySelector(".order_call").classList.add("show");
    });
  }
});
