/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { //... ваш код ... }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/
export default function task1() {
function sumTo(n) { 
  let sum = 0
  for (let a = 1; a <= n; a++) {
    sum = sum + a
  }
  console.log('В решении используется цикл: ', sum)
}

sumTo(100) // 5050





let sum = 0
function sumToRecursion(n) {
  if (n === 0) return
  sum = sum + n
  sumToRecursion(n-1)
  
}

sumToRecursion(100)
console.log('В решении используется рекурсия', sum) // 5050

}