const toggleButton = document.querySelector('button');
const navMenu = document.querySelector('ul');
const header = document.querySelector('header');

toggleButton.addEventListener('click', () => {
    if (navMenu.classList.contains('open')){
        toggleButton.querySelector('img').setAttribute("src", "images/icon-menu.svg");
        navMenu.classList.remove('open');
        toggleButton.classList.remove('open');
        header.classList.remove('open');
    } else {
        toggleButton.querySelector('img').setAttribute("src", "images/icon-menu-close.svg");
        navMenu.classList.add('open');
        toggleButton.classList.add('open');
        header.classList.add('open');
    }
})
