/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

*/

export default function task5() {

function getSecondsToday() {
  let d1 = new Date()
  let sec = d1.getHours() * 3600 + d1.getMinutes() * 60 + d1.getSeconds()
  return sec 
}

console.log(getSecondsToday())


}