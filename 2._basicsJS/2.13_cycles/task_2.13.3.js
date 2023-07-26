//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
//Оба цикла выведут alert с одинаковыми значениями или нет?

//Постфиксная форма:

export default function task3first() {
  for (let i = 0; i < 5; i++) alert( i );
}

// вывод от 0 до 4

// Префиксная форма:
export default function task3second() {
  for (let i = 0; i < 5; ++i) alert( i );
}

// вывод от 0 до 4