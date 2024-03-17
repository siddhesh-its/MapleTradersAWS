'use strict';
const toggle = (evt) => {
    const liElements = evt.currentTarget;
    const divElements = liElements.nextElementSibling;

    liElements.classList.toggle('minus');
    divElements.classList.toggle('open');

    evt.preventDefault();
};

//Used in aside where  clicking on will show the div , its toggle basically 
document.addEventListener('DOMContentLoaded', () => {

    const liElements = document.querySelectorAll('main aside ul li');

    for (let liElement of liElements) {
        liElement.addEventListener('click', toggle);
    }
});

