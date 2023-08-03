/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
export default function task4() {
function sumInput() {
  let nums = []
  let summa = 0
  while (true) {

    let inputValue = prompt('Наполните массив числами', '');
    if (inputValue === "" || inputValue === null || !isFinite(inputValue)) break
    
    nums.push(+inputValue);
    summa += +inputValue
    console.log(summa)
  }
}

sumInput()

}