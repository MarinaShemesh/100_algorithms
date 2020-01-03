const calcArea = function (radius){
    let area = 3.14 *radius**2;
    return area;
}

//calcArea(5)
//78.5

function findArea(radius){
 return 3.14 * radius**2;
}
//findArea(5)
//78.5

//arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
}

const calcArea = radius => 3.14 * radius**2;

//if there is one parameter then we can remove ();
//if we only return something simple, we can move it up to the next line
//and remove the {} and the word return

const greet = function(){
    return 'hello world';
}

const greet2 = () =>{
    return 'hi world';
}

const greet3 = () => 'hi world';