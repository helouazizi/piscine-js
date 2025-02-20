function isPositive(num){
   return num > 0
}

function abs(num){
     // Check for negative zero using Object.is to detect -0
  if (Object.is(num, -0)) {
    return 0;
  }
  if (num < 0) {
    return -num;
  }

   return num; 
}

console.log(abs(-0))