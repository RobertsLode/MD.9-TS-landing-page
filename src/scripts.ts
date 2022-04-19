console.log('Ready for coding');

const navHome = document.querySelector<HTMLAnchorElement>('.js--nav-home');
const navEvents = document.querySelector<HTMLAnchorElement>('.js--nav-events');
const navAbout = document.querySelector<HTMLAnchorElement>('.js--nav-about');
const navBlog = document.querySelector<HTMLAnchorElement>('.js--nav-blog');
const navContact = document.querySelector<HTMLAnchorElement>('.js--nav-contact');
const toastButt = document.querySelector<HTMLButtonElement>('.js-toast-button');
const toast = document.querySelector<HTMLDivElement>('.js-toast');
const pictureButtLeft = document.querySelector<HTMLButtonElement>('.js-picture_box--button-left');
const pictureButtRight = document.querySelector<HTMLButtonElement>('.js-picture_box--button-right');
const beijingBox = document.querySelector<HTMLDivElement>('.js-beijing_box');
const turkeyBox = document.querySelector<HTMLDivElement>('.js-turkey_box');
const pakistanBox = document.querySelector<HTMLDivElement>('.js-pakistan_box');

const navArr = ['Home', 'Events', 'About', 'Blog', 'Contact'];
navHome.innerText = navArr[0];
navEvents.innerText = navArr[1];
navAbout.innerText = navArr[2];
navBlog.innerText = navArr[3];
navContact.innerText = navArr[4];

toastButt.addEventListener('click', () => {
  let number = 0;
  const interval = setInterval(() => {
    number += 1;
    toast.style.zIndex = '0';
    toast.style.visibility = 'visible';
    if (number === 900) {
      toast.style.zIndex = '-1';
      toast.style.visibility = 'hidden';
      clearInterval(interval);
    }
  }, 10);
});

let beijingOrder = 1;
let turkeyOrder = 2;
let pakistangOrder = 3;

pictureButtLeft.addEventListener('click', () => {
  beijingOrder += 1;
  if (beijingOrder === 4) {
    beijingOrder = 1;
  }

  turkeyOrder += 1;
  if (turkeyOrder === 4) {
    turkeyOrder = 1;
  }

  pakistangOrder += 1;
  if (pakistangOrder === 4) {
    pakistangOrder = 1;
  }
  beijingBox.style.order = beijingOrder.toString();
  turkeyBox.style.order = turkeyOrder.toString();
  pakistanBox.style.order = pakistangOrder.toString();
});
let beijingOrderRev = 1;
let turkeyOrderRev = 2;
let pakistangOrderRev = 3;
pictureButtRight.addEventListener('click', () => {
  beijingOrderRev -= 1;
  if (beijingOrderRev === 0) {
    beijingOrderRev = 3;
  }

  turkeyOrderRev -= 1;
  if (turkeyOrderRev === 0) {
    turkeyOrderRev = 3;
  }

  pakistangOrderRev -= 1;
  if (pakistangOrderRev === 0) {
    pakistangOrderRev = 3;
  }
  beijingBox.style.order = beijingOrderRev.toString();
  turkeyBox.style.order = turkeyOrderRev.toString();
  pakistanBox.style.order = pakistangOrderRev.toString();
});
