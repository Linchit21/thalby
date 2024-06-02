var burgerElement = document.querySelector('.burger');
burgerElement.addEventListener('click', function() {
    var navElement = document.querySelector('.nav');
    navElement.classList.toggle('nav_active')
})