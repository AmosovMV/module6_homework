function getSumm(a) {
  return function getB(b) {
    return a+b;
  }
}

let summ = getSumm(5);
console.log(summ(3));