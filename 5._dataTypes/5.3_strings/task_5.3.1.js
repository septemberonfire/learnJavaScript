/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/
export default function task1() {
function ucFirst(str) {
  let capitalizedStr = str[0].toUpperCase() + str.slice(1)
  return capitalizedStr
}

console.log(ucFirst('вася'))
}