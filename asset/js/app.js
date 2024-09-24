let colorsButtons = document.querySelectorAll('.colors__wrap button');
const canvaDrawContainer = document.querySelector('.canva-draw__container div.row__wrap');

colorsButtons.forEach(button => {
  button.style.backgroundColor = '#' + button.value;
});

for (let i = 0; i <= 5 * 13; i++) {
  let div = document.createElement('div');
  canvaDrawContainer.append(div);
}





