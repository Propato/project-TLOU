const buttons = document.querySelectorAll('.buttons-carousel .button');
const images = document.querySelectorAll('.carousel .image');

function disable(activeClass) {
    const selectedButton = document.querySelector('.'+activeClass);
    selectedButton?.classList.remove(activeClass);
}

buttons.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        disable('selected');
        disable('active');        

        element.classList.add('selected');
        images[index].classList.add('active');
    });
});