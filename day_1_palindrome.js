
//step 1
function palindromeCheck(string){
  return string = string.split("");

}


 // palindromeCheck("marina");
//  (6) ["m", "a", "r", "i", "n", "a"]

//step 2
function palindromeCheck(string){
    return string = string.split("").reverse("");
  
  }
  
//palindromeCheck('marina');
//(6) ["a", "n", "i", "r", "a", "m"]

//step 3
function palindromeCheck(string){
    return string = string.split("").reverse("").join("");
  
  }
  
  //palindromeCheck("marina");
//"aniram"

  
//step 4

function palindromeCheck(string){
    let newString = string.split("").reverse("").join("");
    if(string === newString){
    return true;
    }
    else {
 return false;
    }
  }
  
//palindromeCheck('yes');
//false

//palindromeCheck('otto');
//true



