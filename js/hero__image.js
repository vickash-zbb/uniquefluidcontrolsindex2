//section__hero
// Initialize crossFade functionality on the page
function init_crossFade() {
  var setBackground = {
    // Convert nodelist of images to array
    crossFadeImages: [].slice.call(
      document.querySelectorAll('.crossFade__image')
    ),

    // Create random number 0 -> length of array
    randomize: function(arrayLength) {
      randomNumber = Math.floor(arrayLength * Math.random()); // range dynamically based on number of indexes in imagesArray
      return randomNumber;
    },
    // Load random image on page load
    setImageOnLoad: function(path) {
      setBackground.crossFadeImages[path].classList.add(
        'crossFade__image--active'
      );
      var active = document.querySelector('.crossFade__image--active');
      return active;
    },

    // Set next image in DOM to crossFade__image--active (if at last image in DOM set first image)
    setNextImage: function(activeImage) {
      setTimeout(function() {
        activeImage.classList.remove('crossFade__image--active');
        var nextImage;
        if (activeImage.nextElementSibling !== null) {
          nextImage = activeImage.nextElementSibling;
        } else {
          nextImage = document.querySelector('.crossFade__image');
        }
        nextImage.classList.add('crossFade__image--active');
        setTimeout(function() {
          setBackground.setNextImage(nextImage);
        }, 3000);
      }, 3000);
    }
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
    .querySelector('.crossFade__image')
    .classList.add('crossFade__image--active');
}
/////////section__hero end