const body = document.body

const btnTheme = document.getElementById('btn-theme')
const btnHamburger = document.querySelector('.fa-bars')

const THEME_KEY = 'portfolio-theme'
const ICON_KEY = 'portfolio-btn-theme'

const applyTheme = (theme) => {
	const iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon'

	body.classList.remove('dark', 'light')
	body.classList.add(theme)

	btnTheme.classList.remove('fa-moon', 'fa-sun')
	btnTheme.classList.add(iconClass)

	localStorage.setItem(THEME_KEY, theme)
	localStorage.setItem(ICON_KEY, iconClass)
}

const savedTheme = localStorage.getItem(THEME_KEY) || 'dark'
applyTheme(savedTheme)

const toggleTheme = () => {
	const nextTheme = body.classList.contains('dark') ? 'light' : 'dark'
	applyTheme(nextTheme)
}

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
