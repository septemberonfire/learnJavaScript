/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

export default function task6() {

function getSecondsToTomorrow() {
  let d1 = new Date()
  let sec = d1.getHours() * 3600 + d1.getMinutes() * 60 + d1.getSeconds()
  let secPerDay = 24 * 3600
  return secPerDay - sec
}

console.log(getSecondsToTomorrow())

}