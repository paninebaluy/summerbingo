const grid = document.querySelector('.bingo-grid');
const screenshotBtn = document.querySelector('.screenshot');

const addMark = (evt) => {
    const card = evt.target.closest('.grid-item');
    if (!card.classList.contains('grid-item__image')) {
        card.classList.toggle('marked');
    }   
}

const image = document.querySelector('.bingo-grid__image');
const setWinPicture = () => {
    image.src = ('./bingo-success.png');
    image.style.height = '100%';
    image.style.width = '100%';
    image.style.transition = '0.5s ease-out';
}

const setInitPicture = () => {
    image.src = ('./bingo-init.png');
    image.style.height = '80%';
    image.style.width = '80%';
    image.style.transition = '0.5s ease-out';
}

const findMarkedLength = (selector) => {
    return grid.querySelectorAll(selector).length;
}

const isBingo = () => {
    if (findMarkedLength('.rowa.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.rowb.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.rowd.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.rowe.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.cola.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.colb.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.cold.marked') === 5) {
        setWinPicture();
    }
    else if (findMarkedLength('.cole.marked') === 5) {
        setWinPicture();
    }
    else setInitPicture();
}

const screenshot = () => {
    preventDefault();
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
}

grid.addEventListener('click', addMark);
grid.addEventListener('click', isBingo);
screenshotBtn.addEventListener('click', screenshot);