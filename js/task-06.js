const formInput = document.querySelector('input')
const dataElem = Number(formInput.dataset.length)

formInput.addEventListener("blur", (event) => {
    const formLength = event.path[0].selectionStart
    if (formLength === dataElem) {
        formInput.classList.remove('invalid')
        formInput.classList.add('valid')
        return
    } else {
        formInput.classList.add('invalid')
    }
});

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), 
// перевіряє його вміст щодо 
// правильної кількості введених символів.



// Яка кількість смиволів повинна бути в інпуті, зазначається в його
//  атрибуті data - length.
     // Якщо введена правильна кількість символів, то border інпуту стає
    //  зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.
