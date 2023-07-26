/*
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

export default function task2() {

const company = prompt('Какое "официальное" название Javascript?', '')

if (company == 'ECMAScript') {
    alert('Верно!')
} else alert ('Вы не знаете? ECMAScript!')
}