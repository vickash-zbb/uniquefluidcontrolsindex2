//section__hero
// Initialize crossFade functionality on the page
function init_crossFade() {
  var setBackground = {
    // Convert nodelist of images to array
    crossFadeImages: [].slice.call(
      document.querySelectorAll(".crossFade__image")
    ),

    // Create random number 0 -> length of array
    randomize: function (arrayLength) {
      randomNumber = Math.floor(arrayLength * Math.random()); // range dynamically based on number of indexes in imagesArray
      return randomNumber;
    },
    // Load random image on page load
    setImageOnLoad: function (path) {
      setBackground.crossFadeImages[path].classList.add(
        "crossFade__image--active"
      );
      var active = document.querySelector(".crossFade__image--active");
      return active;
    },

    // Set next image in DOM to crossFade__image--active (if at last image in DOM set first image)
    setNextImage: function (activeImage) {
      setTimeout(function () {
        activeImage.classList.remove("crossFade__image--active");
        var nextImage;
        if (activeImage.nextElementSibling !== null) {
          nextImage = activeImage.nextElementSibling;
        } else {
          nextImage = document.querySelector(".crossFade__image");
        }
        nextImage.classList.add("crossFade__image--active");
        setTimeout(function () {
          setBackground.setNextImage(nextImage);
        }, 3000);
      }, 3000);
    },
  };

  var randomNumber = setBackground.randomize(
    setBackground.crossFadeImages.length
  );
  var activeImage = setBackground.setImageOnLoad(randomNumber);
  setBackground.setNextImage(activeImage);
}

try {
  init_crossFade();
} catch (ev) {
  document
    .querySelector(".crossFade__image")
    .classList.add("crossFade__image--active");
}
/////////section__hero end
var mainSlider = new Swiper(".mySwiper2", {
  parallax: true,
  speed: 1200,
  effect: "slide",
  direction: "vertical",
  autoplay: true,
  navigation: {
    nextEl: ".upk-button-next",
    prevEl: ".upk-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>'
      );
    },
  },
});
// //////// header
window.onscroll = function () {
  const mainNav = document.getElementById("roto");
  // const upbtn = document.getElementById("upBtn");
  if (mainNav) {
    if (window.pageYOffset > 1) {
      mainNav.classList.add("active");
      // upbtn.classList.add("active");
    } else {
      mainNav.classList.remove("active");
      // upbtn.classList.remove("active");
    }
  }
};
