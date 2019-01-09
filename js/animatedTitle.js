const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = [`Full stack developer`, `I can create awesome apps for your business`, `Let's work together!`];

let activeLetter = -3;
let activeText = 0;

let indexText = 0;
const time = 40;


// Implementacja
const addLetter = () => {
    if (activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {

        activeText++;
        if (activeText === txt.length) {
            activeText = 0;
        };

        return setTimeout(() => {
            activeLetter = -15;
            spnText.textContent = '';
            addLetter();
        }, 1000)


    }
    setTimeout(addLetter, 100)

}


addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);