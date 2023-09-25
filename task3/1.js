//Будут использованы структурный и прцедурные парадигмы
//Вызов функции хода и проверки победы - процедурныей подход
//Цикл вызова хода - структурный подход
function showField() {
    console.log(field[0], field[1], field[2]);
    console.log(field[3], field[4], field[5]);
    console.log(field[6], field[7], field[8]);
}

function makeMove() {

}

function isVictory() {

}

let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let field = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9'
];

let a = prompt('Введите число');
console.log(a);

step = 0;

while (step <= 9) {
    step++;

}

showField();