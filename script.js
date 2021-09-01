const grid = document.querySelector('.bingo-grid');
const addMark = (evt) => {
    const card = evt.target.closest('.grid-item');
    card.classList.toggle('marked');
}
grid.addEventListener('click', addMark);