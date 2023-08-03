/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
export default function task2() {
function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  if (lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx')) {
    return true;
  }
  else return false;
}
console.log(checkSpam('buy ViAgRa now'))
console.log(checkSpam('free XXXxxxXxXxX'))
console.log(checkSpam('just innocent rabbit'))
}