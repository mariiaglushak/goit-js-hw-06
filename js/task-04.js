const btnInc = document.querySelector('[data-action="decrement"]');
const btnDec = document.querySelector('[data-action="increment"]');
const spValueId = document.querySelector('#value')
let counterValue = 0;

const clickBtnDec = () => {
    counterValue += 1
        spValueId.textContent = counterValue
  
};

const clickBtnInc = () => {
    counterValue -= 1
        spValueId.textContent = counterValue
};

btnDec.addEventListener("click", clickBtnDec);
btnInc.addEventListener("click", clickBtnInc);

// // Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника 
// та ініціалізуй її значенням 0.// Додай слухачів кліків 
// до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.