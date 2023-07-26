// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

export default function task8() {

  if (-1 || 0) alert( 'first' ); // yes
  if (-1 && 0) alert( 'second' ); // no 
  if (null || -1 && 1) alert( 'third' ); // yes
} 