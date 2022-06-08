// $(function () {
// 	////////

// 	init();

// 	// init
// 	function init() {

// 		if (!EB.isInitialized()) {
// 			EB.addEventListener(EBG.EventName.EB_INITIALIZED, function () {
// 				startAd();
// 			});
// 		} else {
// 			startAd();
// 		}

// 	}
// 	////////

// 	// Clickthrough
// 	function clickthrough() {
// 		EB.clickthrough();
// 	}
// 	////////


// 	// Ad animation
// 	function startAd() {



// 	}
let headerMainText = document.querySelector('.header-main__text');

let contentMainImg = document.querySelectorAll('.content-main__img')
let contentMainTitle = document.querySelectorAll('.content-main__title p')
let contentMainTitleChild1 = document.querySelectorAll('.content-main__title p:nth-child(1)')
let contentMainTitleChild2 = document.querySelectorAll('.content-main__title p:nth-child(2)')
let contentMainTitleChild3 = document.querySelectorAll('.content-main__title p:nth-child(3)')

let headerMainTitle = document.querySelectorAll('.header-main__title p')
let headerMainTitleChild1 = document.querySelectorAll('.header-main__title p:nth-child(1)')
let headerMainTitleChild2 = document.querySelectorAll('.header-main__title p:nth-child(2)')
let headerMainTitleChild3 = document.querySelectorAll('.header-main__title p:nth-child(3)')
let headerMainTitleChild4 = document.querySelectorAll('.header-main__title p:nth-child(4)')
let headerMainTitleChild5 = document.querySelectorAll('.header-main__title p:nth-child(5)')

// });
let gsapToText = () => {
	gsap.to(headerMainText, { duration: 1, opacity: 1, x: 0, })
};
function gsapToConImg() {
	gsap.to(contentMainImg, { duration: 2.5, opacity: 1, ease: "elastic.out(1, 0.3)", y: 0 })
};

function gsapToConTitle1() {
	gsap.to(contentMainTitleChild1, { duration: 1, opacity: 1, ease: "slow(0.7, 0.7, false)", y: 0, })
};

function gsapToConTitle2() {
	gsap.to(contentMainTitleChild2, { duration: 1, opacity: 1, ease: "slow(0.7, 0.7, false)", y: 0, })
};
function gsapToConTitle3() {
	gsap.to(contentMainTitleChild3, { duration: 1, opacity: 1, ease: "slow(0.7, 0.7, false)", y: 0, })
};



function gsapToTitle1() {
	gsap.to(headerMainTitleChild1, { duration: 3, opacity: 1, ease: "slow(0.7, 0.7, false)", y: 0, })
};
function gsapToTitle2() {
	gsap.to(headerMainTitleChild2, { duration: 1, opacity: 1, ease: "power1.out", y: 0, })
};
function gsapToTitle3() {
	gsap.to(headerMainTitleChild3, { duration: 1, opacity: 1, ease: "power1.out", y: 0, })
};
function gsapToTitle4() {
	gsap.to(headerMainTitleChild4, { duration: 1, opacity: 1, ease: "power1.out", y: 0, })
};
function gsapToTitle5() {
	gsap.to(headerMainTitleChild5, { duration: 1, opacity: 1, ease: "power1.out", y: 0, })
};


function gsapToTextNone() {
	gsap.to(headerMainText, { duration: 1, display: 'none', x: 0, })
};
function gsapToTitelNone() {
	gsap.to(headerMainTitle, { duration: 1, opacity: 0, x: 0, })
};
function gsapToConTitleNone() {
	gsap.to(contentMainTitle, { duration: 1, opacity: 0, x: 0, })
};
function gsapToConImgNone() {
	gsap.to(contentMainImg, { duration: 1, opacity: 0, x: 0, })
};
function gsapFrom() {
	gsap.to(headerMainText, { duration: 1, opacity: 1, x: 0, })
};

gsapToText();

setTimeout(gsapToTextNone, 4000,);
setTimeout(gsapToConTitle1, 2000,);
setTimeout(gsapToConTitle2, 3000,);
setTimeout(gsapToConTitle3, 4000,);
setTimeout(gsapToConImg, 5000,);
setTimeout(gsapToConTitleNone, 7000,);
setTimeout(gsapToConImgNone, 7000,);
setTimeout(gsapToTitle1, 8000,);
setTimeout(gsapToTitle2, 9000,);
setTimeout(gsapToTitle3, 10000,);
setTimeout(gsapToTitle4, 11000,);
setTimeout(gsapToTitle5, 12000,);
setTimeout(gsapToTitelNone, 14000,);
