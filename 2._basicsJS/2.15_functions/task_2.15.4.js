// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

export default function task4() {

  
  function pow(a, b) {
    let result = a ** b;
    return result
  }
  
  let x = +prompt('Введите первое число', '');
  let y = +prompt('Введите второе число', '');
  
  if (y < 1) {
    alert('Такая степень не поддерживается, введите целое число больше 1', '')
  } else alert(pow(x, y))
  
}
  
