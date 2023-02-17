$(function() {
    $('.cook__popup-play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

$(document).ready(function () {
	$('.footer-top__link-title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

document.addEventListener('DOMContentLoaded', function() {
	let burger =  document.getElementById('burger');
	burger.addEventListener('click', function() {
		burger.classList.toggle('open');
	})
});

document.getElementById('burger').addEventListener('click', function() {
	document.getElementById('nav').classList.toggle("open");
  })