/* Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/



let calculator = {
  
  read() {
    this.a = +prompt('Введите первое число', '');
    this.b = +prompt('Введите второе число', '');
  },
  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  },

  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
