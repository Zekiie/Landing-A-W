
var prevBtn = element('prev'),
    nextBtn = element('next'),
    slides = document.querySelectorAll('.slides'),
    img = document.querySelectorAll('.img'),
    input = element('search_text'),
    search = element('search'),
    menu = element('menu'),
    menu_i = element('icon_m'),
    x = element('x');
    size = slides.length - 1,
    count = 0;


search.addEventListener('mouseover', function () {
    hideMenu();
    input.style.display = 'block';
});

window.addEventListener('scroll', function () {
    input.style.display = 'none';
    menu.style.display = 'none';
});

menu_i.addEventListener('click', showMenu);


function element(id) {
    return document.getElementById(id);
}

function showMenu (){
    if (input.style.display === 'block') {
        input.style.display = 'none';
    }
        menu.style.display = 'flex';

}

function hideMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    }
}

x.addEventListener('mouseover', function() {
    this.classList.toggle("change");
});
function nextSlide () {

    slides[count].classList.add('non_active');
    count += 1;
    if (count > size) {
        count = 0;
    }
    slides[count].classList.remove('non_active');
    img[count].style.borderColor = randomColor();
}

function prevSlide () {

    slides[count].classList.add('non_active');
    if (count <= 0) {
        count = size + 1;
    }
    count -= 1;
    slides[count].classList.remove('non_active');
}


function randomColor() {
    var x = Math.floor(Math.random() * 256),
        y = Math.floor(Math.random() * 256),
        z = Math.floor(Math.random() * 256),
        color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
}



nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);



