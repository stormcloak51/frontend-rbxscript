
function createHeader() {
	const headerBurger = document.querySelector('.header__menu-mobile svg'),
				headerBurgerMenu = document.createElement('div');
	headerBurgerMenu.classList.add('header__burger-menu');
	document.querySelector('body').append(headerBurgerMenu);
	headerBurger.addEventListener('click', () => {
		headerBurgerMenu.classList.toggle('header__burger-menu-active');
		document.querySelector('.body__img').style.cssText = `backdrop-filter: blur(10px);opacity: 1;`;
		headerBurgerMenu.innerHTML = `
		<ul class='header__burger'>
			<li class='header__burger-item'><a href="posts.html">Posts</a></li>
			<li class='header__burger-item'><a href="about.html">About</a></li>
			<li class='header__burger-item'><a href="contact.html">Contact</a></li>
		</ul>
		`;
		document.querySelector('.header__burger').style.display = 'block';
	});
	headerBurgerMenu.style.height = document.querySelector('body').style.height;
}

export {createHeader};