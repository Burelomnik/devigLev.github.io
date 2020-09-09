const popup = document.querySelector('.popup-menu');
const menu = document.querySelector('.menu');

window.addEventListener('click', function (event) {
	let headerHeight = document.querySelector('header').clientHeight;
	// let popup = document.querySelector('.popup-menu');
	let closeMenu = false;

	if (event.target.nodeName != '#text') {

		if (event.target.classList.contains('link1')) {
			let anchorY = document.getElementById('anchor1').offsetTop - headerHeight;
			window.scrollTo({
				top: anchorY,
				behavior: 'smooth'
			});
			closeMenu = true;
		}

		if (event.target.classList.contains('link2')) {
			let anchorY = document.getElementById('anchor2').offsetTop - headerHeight;
			window.scrollTo({
				top: anchorY,
				behavior: 'smooth'
			});
			closeMenu = true;
		}

		if (event.target.classList.contains('link3')) {
			let anchorY = document.getElementById('anchor3').offsetTop - headerHeight;
			window.scrollTo({
				top: anchorY,
				behavior: 'smooth'
			});
			closeMenu = true;
		}

		if (closeMenu) {
			popup.classList.remove('active-menu');
			menu.classList.remove('active');
		};

	}
});

window.addEventListener('scroll', () => {
	if (popup.classList.contains('active-menu') ||
		menu.classList.contains('active')) 
	{
		popup.classList.remove('active-menu');
		menu.classList.remove('active');
	}
});

menu.onclick = function () 
{
	this.classList.toggle('active');
	popup.classList.toggle('active-menu');
}