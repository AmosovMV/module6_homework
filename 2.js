let numInput = prompt('Введите число от 0 до 1000');
let num = +numInput;
function simpleNum() {
   if (num>1000) {
     alert('Данные не верны');
   }
    let arr = [];
    for (i=2; i<=num-1; i++) {
      result=num % i;
        if (result ==0) {
          arr.unshift('1');
          break;
        } else continue;
    }
      if (arr.length!=0 || num === 1) {
      console.log(`Число ${num} - не простое`);
      } else console.log(`Число ${num} - простое`);
}
simpleNum();