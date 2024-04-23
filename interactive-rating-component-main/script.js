let rate = 0;

const RATING_CARD = document.getElementById('card');
const THANKYOU_CARD = document.getElementById('card-2');

const NUMBER_ONE = document.getElementById('one');
const NUMBER_TWO = document.getElementById('two');
const NUMBER_THREE = document.getElementById('three');
const NUMBER_FOUR = document.getElementById('four');
const NUMBER_FIVE = document.getElementById('five');

const BUTTON = document.getElementById('button');


NUMBER_ONE.addEventListener('click', function () {
    rate = 1;
})

NUMBER_TWO.addEventListener('click', function () {
    rate = 2;
})

NUMBER_THREE.addEventListener('click', function () {
    rate = 3;
})

NUMBER_FOUR.addEventListener('click', function () {
    rate = 4;
})

NUMBER_FIVE.addEventListener('click', function () {
    rate = 5;
})

BUTTON.addEventListener('click', function () {
    RATING_CARD.classList.add('hide');
    THANKYOU_CARD.classList.remove('hide');

    let score = document.querySelector('.scoreselected');
    console.log(score.textContent = rate);
})