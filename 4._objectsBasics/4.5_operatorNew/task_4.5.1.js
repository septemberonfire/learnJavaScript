/* Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

Если да – приведите пример вашего кода.
*/

export default function task1() {

let obj = {};
function A() {return obj;}
function B() {return obj;}
let a = new A();
let b = new B();
alert( a == b );
}