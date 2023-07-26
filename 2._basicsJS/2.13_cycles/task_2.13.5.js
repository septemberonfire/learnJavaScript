/* Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

*/
export default function task5() {

  let i=0
  while (i<3) {
    
    alert(`number ${i}!`);
    i++;
  }
}