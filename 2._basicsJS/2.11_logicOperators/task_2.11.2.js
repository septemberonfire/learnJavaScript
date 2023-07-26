// Что выведет код ниже?
export default function task2 () {
  alert( alert(1) || 2 || alert(3) ); // сначала 1, затем 2
}