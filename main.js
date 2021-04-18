let menuDashLine = document.querySelectorAll(".hamburger-menu div");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let subMenu = $(".submenu");

hamburgerMenu.addEventListener("click", () => {
	menuDashLine[0].classList.toggle("l1-focus");
	menuDashLine[2].classList.toggle("l3-focus");
	menuDashLine[1].classList.toggle("l2-focus");

	subMenu.slideToggle();
});

//BACK TO TOP
let backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener("click", scrollToTop);

window.onscroll = () => {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		backToTop.style.display = "flex";
	} else {
		backToTop.style.display = "none";
	}
}

function scrollToTop() {
	document.body.scrollTo({
		top: 0,
		behavior: "smooth",
	}); // For Safari

	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

// LANGUAGE SWITCHER
let languagePicker = document.querySelector(".language-picker");
let languageSwitcher = document.querySelector(".language-switcher");

languagePicker.addEventListener("click", () => {
	languageSwitcher.classList.toggle("slide");
});
