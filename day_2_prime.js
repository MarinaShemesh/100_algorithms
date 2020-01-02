function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    // storing the calculated value would be much 
    // better than calculating in each iteration
    var sqrt = Math.sqrt(num);
  
    for (var i = 2; i <= sqrt; i++) 
      if (num % i === 0) return false;
    return true;
  }

  3 % 2 = 1
  4 % 2 == 0

  const isPrime = (nom)=>{
    for(let i = 2; i <= nom; i++){
      if(nom % i===0){
        return false;
      }
    }
    return true;
  }

  https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

  function checkPrime(num){
    if (num <= 1) return false;
    if (num <= 2) return true;

     let num2 = Math.sqrt(num);

    for(let i=2; i <= num2; i++){
        if (i % num2 === 0){
            return false;
        }
    }
    return true;
  }

 