"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const partnersSlider = new Swiper(".partners__slider", {
      slidesPerView: 6,
      navigation: {
        nextEl: ".partners__next_slide",
        prevEl: ".partners__prev_slide",
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
      slidesPerView: 4,
      navigation: {
        nextEl: ".similar_articles__next_slide",
        prevEl: ".similar_articles__prev_slide",
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
});
