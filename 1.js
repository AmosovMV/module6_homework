let arrNum = [12,0,0,'sd',19,null,,15,];
function getElementArr() {
  evenElem = 0;
  oddElem = 0;
  zeroElem = 0;
  for (let i=0; i<= arrNum.length; i++) {
      if (typeof arrNum[i] === 'number') {
        if (arrNum[i] % 2 === 0) {
        evenElem++;
          if (arrNum[i] === 0) {
            zeroElem++;
          } 
        } else oddElem++;
      } 
  }
  console.log(`Чётных - ${evenElem}  нечётных - ${oddElem}, нулевых - ${zeroElem}`);
}

getElementArr();