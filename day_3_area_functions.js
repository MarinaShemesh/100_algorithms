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

const bill = function(products,tax){
    let total = 0;
    for(let i=0; i < products.length; i++){
    total += products[i] + products[i] * tax;
    }

    return total;
}

//bill([10,29,23],0.2);
//12.400000000000002

const bill = (products,tax) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
    total += products[i] + products[i] * tax;
    }

    return total;
}
