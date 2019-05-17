const burgerContainer = document.querySelector('.burger-container');
const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('nav');
const mobileLinks = document.querySelectorAll('nav li a');

// open and close mobile menu
burgerContainer.addEventListener('click', function(){
  mobileNav.classList.toggle('show');
  burger.classList.toggle('close');
});

// closing mobile menu on clikc of <a></a
mobileNav.addEventListener('click', function(e){

    for (var i = 0; i < mobileLinks.length; i++) {
      if (e.target === mobileLinks[i]) {
          mobileNav.classList.remove('show');
          burger.classList.remove('close');
      }
    }
})

//Scroll Activated Animations
window.addEventListener("scroll", scrolling);

const titles = document.querySelectorAll('.title');
      mainText = document.querySelector('.hide-text');
      mainText2 = document.querySelector('.hide-text-2');
      icons = document.querySelectorAll('.icon');
      iconTitles = document.querySelectorAll('.icon-title');
      buttons = document.querySelectorAll('.hide-btn');
      quote = document.querySelector('.hide-quote');
      logos = document.querySelectorAll('.partner');

function scrolling(e){

  if ( isFullyVisible(mainText) && isFullyVisible(mainText2)) {
      mainText.classList.add('show-text');
      mainText2.classList.add('show-text');
  }
  if ( isFullyVisible(quote)) {
    quote.classList.remove('hide-quote');
    quote.classList.add('show-quote');
  }

  for (var i = 0; i < titles.length; i++) {
      if ( isFullyVisible(titles[i]) ) {
        titles[i].classList.add('grow');
      }
  }
  for (var i = 0; i < logos.length; i++) {
      if ( isFullyVisible(logos[i]) ) {
        logos[i].classList.add('show-logo');
      }
  }
  for (var i = 0; i < icons.length; i++) {
      if ( isFullyVisible(icons[i]) ) {
        icons[i].classList.add('icon-show');
      }
  }
  for (var i = 0; i < iconTitles.length; i++) {
      if ( isFullyVisible(iconTitles[i]) ) {
        iconTitles[i].classList.add('show-title');
      }
  }
  for (var i = 0; i < buttons.length; i++) {
      if ( isFullyVisible(buttons[i]) ) {
        buttons[i].classList.remove('hide-btn');
        buttons[i].classList.add('show-btn');
      }
  }
}

function isFullyVisible(el){
  var boundary = el.getBoundingClientRect();
  var top = boundary.top;
  var bottom = boundary.bottom;

  return ( (top >= 0) && (bottom <= window.innerHeight) );
}

// Modal & Modal Content
const modal = document.getElementById('modal');
const section = document.querySelector('#tech .grid-x');
const content = document.querySelectorAll('.modal-content');
const close = document.getElementsByClassName('close-x');



for (var i = 0; i < close.length; i++) {

  close[i].addEventListener('click', function(){
    modal.style.display = 'none';

    for (var i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }

  });
}

section.addEventListener('click', function(e){
    for (var i = 0; i < content.length; i++) {
      if (e.target.id == content[i].id ) {
          modal.style.display = "block";
          content[i].style.display = "flex";
      }
    }
});

window.addEventListener('click', function(e){
  if (e.target == modal) {
    modal.style.display = "none";

    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  }
})

//Shrink nav on scroll
const nav = document.querySelector('.navigation')
const topOfNav = nav.offsetTop;
// console.log(topOfNav);

function fixNav(){
  if(window.scrollY >= 670){
    nav.classList.add('nav-scroll');
  } else{
    nav.classList.remove('nav-scroll');
  }
}

window.addEventListener('scroll', fixNav);
