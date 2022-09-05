function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsId = document.querySelector('#controls')
const inputControl = controlsId.querySelector('input')
const btnCreate = controlsId.querySelector('[data-create]')
const btnDestroy = controlsId.querySelector('[data-destroy]')
const boxesId = document.querySelector('#boxes')

function createBoxes(amount) {
  
  let array = []
  let box = 30
  
  for (let i = 1; i <= amount; i += 1){
    const tagD = document.createElement('div')
    tagD.style.width = `${box}px`;
    tagD.style.height = `${box}px`;
    tagD.style.backgroundColor = getRandomHexColor();
    array.push(tagD);   
    box +=10
  }

  boxesId.append(...array)
  
}

// function createBoxes2(amount) {
//   let count = 30 
//   let string = ''

 
//   for (let i = 1; i <= amount; i += 1){
//     string += `<div style = "width: ${count}px; height: ${count}px; background-color: ${getRandomHexColor()};"></div>`
//     count += 10
//   }
// console.log(string)
//   boxesId.innerHTML=string
// }

function clickReaction() {
    
//     createBoxes2(inputControl.valueAsNumber)
createBoxes(inputControl.valueAsNumber)

}

function clickReactionDestroy() {
  boxesId.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
   
    // createBoxes2(inputControl.valueAsNumber)
createBoxes(inputControl.valueAsNumber)

})
btnDestroy.addEventListener('click',clickReactionDestroy)







// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість
//  елементів в input і натискає кнопку Створити, після чого 
//  рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр
//   - число.Функція створює стільки < div >, скільки
//    вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
//  вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у 
// форматі HEX.Використовуй готову функцію getRandomHexColor
//  для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.