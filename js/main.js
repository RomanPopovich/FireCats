import {Burger} from "./Burger.js";
import {AboutUs} from "./AboutUs.js"
import { Services } from "./Services.js";
import {Slider} from "./Slider.js"
const BURGER_OBJ = new Burger();
const ABOUT_US_OBJ = new AboutUs();
const SERVICES_OBJ =  new Services();
const SLIDER_OBJ = new Slider();
const scrollFactor = 0.3;
let targetScroll = window.scrollY;
let currentScroll = targetScroll;
let animationId = null;

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  targetScroll += e.deltaY * scrollFactor;
  if (!animationId) {
    animationId = requestAnimationFrame(animateScroll);
  }
}, { passive: false });

function animateScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.1;
  window.scrollTo(0, currentScroll);  
  if (Math.abs(targetScroll - currentScroll) > 0.5) {
    animationId = requestAnimationFrame(animateScroll);
  } else {
    animationId = null;
  }
}