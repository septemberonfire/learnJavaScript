/*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

export default function task3() {

const number = prompt('Введите число', '')

if (number>0) {
    alert('1')
} else if (number == 0) {
    alert('0')
} else alert ('-1')
}