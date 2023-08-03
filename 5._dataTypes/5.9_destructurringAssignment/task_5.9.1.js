/*
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:
*/
export default function task1() {

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

console.log(name);

console.log(age);

console.log(isAdmin);
}