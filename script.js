const card = document.getElementById('magicCard');
const emoji = document.getElementById('cardEmoji');
const title = document.getElementById('cardTitle');
const text = document.getElementById('cardText');
const hint = document.getElementById('hint');

const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.textTransform = 'uppercase';

card.addEventListener('click', function () {
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        emoji.textContent = '🐶';
        title.textContent = 'Волшебство сработало!';
        text.textContent = 'Ты нашёл друга! Тут можно взять питомца из приюта "Мягкие лапки!" ✨';
        hint.textContent = 'Кликни ещё раз, чтобы вернуть всё обратно';
    } else {
        emoji.textContent = '🐾';
        title.textContent = 'Нажми на меня!';
        text.textContent = 'Я — волшебная карточка сайта «Милые мордашки». Кликни, чтобы увидеть, на что я способна!';
        hint.textContent = 'При клике карточка меняет цвет, поворачивается и увеличивается';
    }
});