//TODO: LEXICAL SCOPING : 

function doAddition(num1){
    function add(num2){
        return num1 + num2;
    }
    return add(10);
}

console.log(doAddition(10));



//TODO: CLOSURE-01 : 

function doSubstraction(num1){
    function substract(num2){
        return num1 - num2;
    }
    //Return the function reference and thus the execution context doSubstraction does not puff off.
    return substract;
}

var subFuncRef = doSubstraction(100);
console.log(subFuncRef(10));

//TODO: CLOSURE-02 :
function doMultiplication(num1){
    return function(num2){
        return num1 * num2;
    }
}

console.log(doMultiplication(10)(5));

//TODO: CLOSURE-03 :
const doDivision = (num1) => {
    return (num2) => num1 / num2;
}

console.log(doDivision(100)(10));


