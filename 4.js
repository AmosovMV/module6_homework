let a=Number(prompt('Введите A'));
let b=Number(prompt('Введите B'));

function overShow(){ 
  console.log(a);
  a++;
  let timeId= setTimeout(overShow,1000)
  if (a==b+1) {
    clearTimeout(timeId);
  } 
}
setTimeout(overShow,1000);