function faqDropdown(id) {
	const question = document.getElementById(id);
	const answer = question.nextElementSibling;
	const icon = question.children[0].children[1].children[0];

	if(window.getComputedStyle(answer).getPropertyValue('display') === 'none') {
		answer.style.display = 'flex';
		icon.classList.remove('fa-angle-down');
		icon.classList.add('fa-angle-up');
	} else {
		answer.style.display = 'none';
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	}
}

function descriptionDropdown(id) {
	const title = document.getElementById(id);
	const description = title.nextElementSibling;
	const icon = title.children[0].children[1].children[0];

	if(window.getComputedStyle(description).getPropertyValue('display') === 'none') {
		description.style.display = 'flex';
		icon.classList.remove('fa-angle-down');
		icon.classList.add('fa-angle-up');
	} else {
		description.style.display = 'none';
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	}
}

function toggleMenu() {
	const menuIcon = document.getElementById('hamburger-menu'),
		menuItems = document.getElementById('menu-items'),
		unicodeLabel = menuIcon.children[0],
		cross = '&#10006;',
		hamburger = '&#9776;';

	if(window.getComputedStyle(menuItems).getPropertyValue('display') === 'none') {
		unicodeLabel.innerHTML = cross;
		menuItems.style.display = 'flex';
	} else {
		unicodeLabel.innerHTML = hamburger;
		menuItems.style.display = 'none';
	}
}


$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 700);
            return false;
        }
    }
});
