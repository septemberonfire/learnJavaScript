/*
Напишите код, выполнив задание из каждого пункта отдельной строкой:

1. Создайте пустой объект user.
2. Добавьте свойство name со значением John.
3. Добавьте свойство surname со значением Smith.
4. Измените значение свойства name на Pete.
5. Удалите свойство name из объекта.
*/

export default function task1() {
let user = {}
user.firstName = 'John'
user.lastName = 'Smith'
user.firstName = 'Peter'
delete user.firstName
}