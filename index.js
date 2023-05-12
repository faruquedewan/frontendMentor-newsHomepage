const openIcon = document.querySelectorAll('span')[0];
const closeIcon = document.querySelectorAll('span')[1];

openIcon.addEventListener("click", function() {
    openIcon.classList.add('hide');
    document.querySelector('nav').classList.remove('hide');
    document.querySelector('nav').classList.add('display');
});

closeIcon.addEventListener("click", function() {
    openIcon.classList.remove('hide');
    document.querySelector('nav').classList.remove('display');
    document.querySelector('nav').classList.add('hide');
});