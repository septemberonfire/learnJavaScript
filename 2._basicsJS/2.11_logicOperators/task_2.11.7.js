// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

function task7first() {
  const age = promt('Введите ваш возраст', '')
  
  if (!(age >= 14 && age <= 90)) {
    alert('Вы в диапазоне')
  } else alert('Вы за пределами диапазона')
}

function task7second() {
  const age = promt('Введите ваш возраст', '')
  
  if (age < 14 || age >90) {
    alert('Вы за пределами диапазона')
  } else alert('Вы в диапазоне')
}