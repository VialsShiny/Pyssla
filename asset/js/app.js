let colorsButtons = document.querySelectorAll('.colors__wrap button');
const canvaDrawContainer = document.querySelector('.canva-draw__container');
let changeColor = document.querySelector('.change-color');
let actualColor = document.querySelector('.actual-color');

colorsButtons.forEach(button => {
  button.style.backgroundColor = button.value;
});

function CreateCanvaDraw(maxHorizontal, maxVertical) {
  for (let i = 0; i < maxVertical; i++) {
    let rowWrap = document.createElement('div');
    rowWrap.classList.add('row__wrap');
    canvaDrawContainer.append(rowWrap);

    for (let j = 0; j < maxHorizontal; j++) {
      let div = document.createElement('div');
      rowWrap.append(div);
    }
  }
}

CreateCanvaDraw(prompt('Horizontale !'), prompt('Verticale !'));

function chnageColorDraw(color) {
  this.color = color;

  
}

let rowWrapDivs = document.querySelectorAll('.row__wrap div');

changeColor.addEventListener('input', () => {
  actualColor.style.backgroundColor = changeColor.value;
  actualColor.value = changeColor.value;
});

rowWrapDivs.forEach(div => {
  div.addEventListener('click', () => {
    div.style.backgroundColor = changeColor.value;
    if (changeColor.value !== "#ffffff") {
      div.classList.add('drawed')
    } else {
      div.classList.remove('drawed')
    }
  });
});


