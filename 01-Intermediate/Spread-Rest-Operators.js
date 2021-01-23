//---------------------------------------------------------------------------------------------------------------
//TODO: Spread Operartor converts the Array or Objects into induvidual args to function
//---------------------------------------------------------------------------------------------------------------
const sumOfTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(sumOfTwoNumbers(1, 2));

var arr = [2, 4, 6, 8]

// TODO: Here arr is passed as first argument to the function and second arg is undefined.
console.log(sumOfTwoNumbers(arr));

//TODO: ...arr is now spreaded and first two elements of array are passed as arguments and rest are ignored
console.log(sumOfTwoNumbers(...arr));
//---------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------
//TODO: Rest Operator takes n argument and converts it into array
//---------------------------------------------------------------------------------------------------------------

const sumN = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((arg) => sum += arg)
    return sum;
}

console.log(sumN(1,2,3,4,5,6));

const multiplyAndSum = (num1, num2, ...args) => {
    let multiple = num1 * num2;
    let sum = sumN(...args);
    return [multiple, sum];
}

console.log(multiplyAndSum(2, 3, 4, 5, 6, 7, 8));