const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  let cont = {};

  for (let i = 0; i < list.length; i++) {
    let palabra = list[i];
    if (cont[palabra]) {
      cont[palabra]++;
    } else {
      cont[palabra] = 1;
    }
  }

  return cont;
}


console.log(repeatCounter(words));