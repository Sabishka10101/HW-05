`Дане ціле число. 
З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).`


function isPrime(n) {
  
  if (n===1){
    return false;
    } else if(n === 2){
    return true;
    } else{
    for (i = 2; i < n; i++){
      
      if(n % i === 0){
        return false;
      }
    }
    return true;  
  }
}

console.log(isPrime(7));