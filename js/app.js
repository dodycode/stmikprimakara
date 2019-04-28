window.addEventListener("DOMContentLoaded",function() {
	var mobileNavToggle = document.getElementById('mobile-nav-toggle');

	if (window.getComputedStyle(mobileNavToggle).display === 'block') {
		mobileNavToggle.addEventListener('click', function() {
			toggleNavbar();
		});
	}
});

window.addEventListener('scroll', function() {
	setNavbarBg();
});

function toggleNavbar() {
	var mobileNavOpen = document.getElementById('open');
	var mobileNavClose = document.getElementById('close');
	var mobileNav = document.getElementById('mobile-nav');

	if (window.getComputedStyle(mobileNav).left === '-260px') {
		mobileNavOpen.style.display = 'none';
		mobileNavClose.style.display = 'block';
		mobileNav.style.left = '0';
	}else{
		mobileNavOpen.style.display = 'block';
		mobileNavClose.style.display = 'none';
		mobileNav.style.left = '-260px';
	}
};

function setNavbarBg() {
	var top  = window.pageYOffset || document.documentElement.scrollTop;
	var navbar = document.getElementById('header');

	if (top > 100) {
		navbar.classList.add('header-scrolled');
	}else{
		navbar.classList.remove('header-scrolled');
	}
}