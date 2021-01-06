//TODO: Declare and Initialize Array :

countries = ["India", "USA", "Japan", "Germany"]
console.log(typeof countries, countries);

states = new Array("Karnataka", "Kerala", "Maharasthra", "Delhi")
console.log(typeof states, states)

//TODO: Length of an Array : 
console.log(`Length of an Array is : ${states.length}`);

//TODO: Get First and Third Element :
console.log(`
    First Element is : ${states[0]},
    Third Element is : ${states[2]}
`);


//TODO: Add Element to the Last Position :
states.push("Punjab")
console.log(typeof states, states)

//TODO: Add Element to the First Position :
states.unshift("Gujurat")
console.log(typeof states, states)

//TODO: Remove Last element from an array :
states.pop()
console.log(typeof states, states)

//TODO: Get the index of state Maharasthra :
console.log(`Index/Position of Maharasthra is : ${states.indexOf("Maharasthra")}`);

//TODO: Convert String to Array :
console.log(Array.from("Punith KR"));