"Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N."

function myFunc(num) {
    num = Math.round(num);
        
    if (num < 1) {
        console.log('Введіть число від 1 до 100');
    }
        
    for (i = 0; i <= 100; i++) {
        if ((i ** 2) < num) {
            console.log(i);
        }
    }
}