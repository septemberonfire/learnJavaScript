/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

export default function task1() {


function printNumbers (from, to) {
  let i = from
  let secundomer = setInterval(function() {
    console.log(i);
    if (i == to) {
      clearInterval(secundomer)
    }
    i++;
  }, 1500)
}

printNumbers(1, 6)
}