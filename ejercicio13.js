const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  let posicion = nameList.indexOf(nameToFind);
  let found = false;

  if (posicion !== -1) {
    found = true;
    return {
      found: found,
      posicion: posicion
    };
  } else {
    return {
      found: found
    };
  }
}

console.log(nameFinder(names, "Tony"));
console.log(nameFinder(names, "Juan"));