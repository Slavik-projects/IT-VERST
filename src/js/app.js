import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const navMenu = document.querySelector('.nav-menu');
const burgerMenu = document.querySelector('.header__burger');
const arrows = document.querySelectorAll('.dev-arr');
const openClose = document.querySelectorAll('.open-closed');
//openClose.forEach((closeIcon) => closeIcon.style.display='none');
const arrImg = document.querySelectorAll('.dev-arr-img');
//arrImg.forEach((el) => el.style.transform = 'rotate(90deg)');
arrows.forEach((arrow)=>{
	arrow.addEventListener('click', function(e){
   e.target.classList.toggle('rotate')
	//e.target.parentNode.parentNode.parentNode.nextElementSibling.style.display='block';
	e.target.parentNode.parentNode.parentNode.nextElementSibling.classList.toggle('show')
	})
});
const bod = document.querySelector('.body-lock');

function burger(){
	navMenu.classList.toggle('active');
	burgerMenu.classList.toggle('active');
   bod.classList.toggle('lock');
}
burgerMenu.addEventListener('click', burger);




/*ADD 3 clases: swiper-container, swiper-wrapper,swiper-slide*/
const swiper_why = new Swiper('.comments__slider',{
	autoHeight: true,
	pagination: {
		el: '.swipers-pagination',
		//bullets
		clickable: true,
	},
   /*autoplay: {
		delay: 1000, 
		stopOnLastSlide: false,
		disableOnInteraction: false
	},*/
});

const swiper = new Swiper('.website_slider',{

   autoplay: {
		delay: 1000, 
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	//slidesPerGroup: 1,
	spaceBetween: 30,
});

const swiper_options = new Swiper('.second__slider',{
	slidesPerView: 2,

	slidesPerView: 4.2,

	pagination: {
		el: '.swiper-pagination',
		//bullets
		clickable: true,
	},
});
///SWIPE CASE
const swiper_case = new Swiper('.case__slider',{

	spaceBetween: 30,
	slidesPerView: 2.2,
	pagination: {
		el: '.swipere-pagination',
		clickable: true,
	},
   navigation: {
		nextEl: '.swiperr-button-prev',
		prevEl: '.swiperr-button-next'
	}
});

const swiper_blog = new Swiper('.blog__slider',{

	spaceBetween: 20,
	pagination: {
		el: '.swipere-pagination',
		clickable: true,
	},
   navigation: {
		nextEl: '.swiperr-button-prev',
		prevEl: '.swiperr-button-next'
	},
	breakpoints: {
		480: {
			slidesPerView: 1.3
		}
	}
	//slidesPerView: 3,
});

const spoiler = document.querySelectorAll('.spoiler__arrow');
const texts = document.querySelectorAll('.opts');

///CLOSE AND SHOW SPOILERS

spoiler.forEach((el) => {
	el.addEventListener('click', function(e){
	   el.classList.toggle('opt');
		e.target.previousElementSibling.lastElementChild.classList.toggle('active');
		spoiler.forEach((spoil)=> {
			if(spoil.classList.contains('opt') && el !== spoil){
            spoil.classList.remove('opt');
			}
		});

		texts.forEach((text)=> {
			if(text.classList.contains('active') && e.target.previousElementSibling.lastElementChild !== text){
            text.classList.remove('active');
				console.log('it work')
			}
		});
	})
})






