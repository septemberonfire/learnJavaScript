/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

export default function task2() {
let user = {
  name: 'John',
  age: 30,
};

function count(obj) {
  return Object.values(obj).length;
}

console.log(count(user))
}