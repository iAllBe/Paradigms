//Декларативный стиль с вызовом встроенного метода sort
let listNumber = [7, 4, 2, 8, 4, 1];
console.log('До сортировки:', listNumber);
listNumber.sort((a, b) => b - a);
console.log('После сортировки:', listNumber);

//Императивный стиль c четкими указаниями какие методы вызывать для получения результата
let a = [3, 2, 1, 1, 5, 4],
    c = [];
console.log('До сортировки:', a)
for (; a.length;) { c.push(a.splice(a.indexOf(Math.min(...a)), 1)[0]) }
console.log('После сортировки:', c)