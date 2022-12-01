`Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна`

const ourNumber = 3;

function check(num){
    if (num % ourNumber === 0){
        return true
    }
    return false
}

console.log(check(81))
