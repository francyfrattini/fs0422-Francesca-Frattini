var img = document.getElementsByTagName('IMG');
var slideshows = document.getElementsByClassName('slideshow');
var slideshow = slideshows[0];
var animating = false;

var slideShow = function() {
  if (!img[0].classList.contains('hide')) {
    img[0].classList.add('hide');
    slideshow.classList.remove('reachedEnd');
  } else if (!img[1].classList.contains('hide')) {
    img[1].classList.add('hide');
  } else if (!img[2].classList.contains('hide')) {
    img[2].classList.add('hide');
  } else if (!img[3].classList.contains('hide')) {
    img[3].classList.add('hide');
  } else {
      animating = true;
      slideshow.classList.add('reachedEnd');
      setTimeout(function() {
        img[2].classList.remove('hide');
        setTimeout(function() {
          img[1].classList.remove('hide');
        }, 250);
        setTimeout(function() {
          img[0].classList.remove('hide');
          animating = false;
        },500);
      }, 500);    
  }
}

var start = setInterval(slideShow, 3000);

// JQuery Bonus!

var toggled = true;

function toggle(bool) {
  if (toggled | bool) {
    clearInterval(start);
    toggled = false;
    $('.toggle').html('play_arrow');
    $('.toggle').addClass('paused');
    $('.notify').addClass('show');
  } else {
    start = setInterval(slideShow, 3000);
    toggled = true;
    $('.toggle').html('pause');
    $('.toggle').removeClass('paused');
    $('.notify').removeClass('show');
  }
}

var transition = false;

$('.slideshow').click(function(e) {
  if (!animating) {
    if ($(e.target).is('.toggle')) {
      toggle();
    } else if ($(e.target).is('.next')) {
      toggle(true);
      if (transition == false) {
        transition = true;
        setTimeout(function() {
          slideShow();
          transition = false;
        }, 250);
      }
    } else if ($(e.target).is('.back')) {
      toggle(true);
      if (transition == false) {
        transition = true;
        setTimeout(function() {
          reverse();
          transition = false;
        }, 250);
      }
    } else {
      toggle();
    }
  }
});
