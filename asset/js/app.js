const colorsWrap = document.querySelector('.colors__wrap');
let colorsButtons = colorsWrap.querySelectorAll('button');
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

CreateCanvaDraw(11, 10);

let rowWrapDivs = document.querySelectorAll('.row__wrap div');

function createNewPalleteColor(color) {
  let newPallette = document.createElement('button');
  newPallette.classList.add('button-style');
  newPallette.value = color;
  newPallette.style.backgroundColor = color;
  let palletteName = prompt("Color Name's ?")
  if (palletteName) {
    newPallette.textContent = palletteName
    colorsWrap.prepend(newPallette)

    const newColorsButtons = colorsWrap.querySelectorAll('button');

    if (newColorsButtons.length > colorsButtons.length) {
      console.log('De nouveaux boutons ont été ajoutés !');
      colorsButtons = newColorsButtons;
    }

    colorsButtons.forEach(button => {
      button.addEventListener('click', () => {
        changeColor.value = button.value;
        actualColor.style.backgroundColor = button.value;
        actualColor.value = button.value;
      })
    });
  } else {
    console.log(false);
  }

  console.log(colorsButtons.length);
  
}

changeColor.addEventListener('change', () => {
  createNewPalleteColor(changeColor.value)
})

colorsButtons.forEach(button => {
  button.addEventListener('click', () => {
    changeColor.value = button.value;
    actualColor.style.backgroundColor = button.value;
    actualColor.value = button.value;
  })
});

changeColor.addEventListener('input', () => {
  actualColor.style.backgroundColor = changeColor.value;
  actualColor.value = changeColor.value;

  // Obtenir la nouvelle liste de boutons à l'intérieur de colorsWrap
  const newColorsButtons = colorsWrap.querySelectorAll('button');

  // Comparer les listes
  if (newColorsButtons.length > colorsButtons.length) {
    console.log('De nouveaux boutons ont été ajoutés !');
    colorsButtons = newColorsButtons;
  }
});

rowWrapDivs.forEach(div => {
  div.addEventListener('mouseup', (mouse) => {
    switch (mouse.button) {
      case 0:
        div.style.backgroundColor = changeColor.value;
        if (changeColor.value !== "#ffffff") {
          div.classList.add('drawed')
        } else {
          div.classList.remove('drawed')
        }
        break;
      case 1:
        return
      case 2:
        div.style.backgroundColor = '#ffffff';
        div.classList.remove('drawed')
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
    }
  });
});

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
})

