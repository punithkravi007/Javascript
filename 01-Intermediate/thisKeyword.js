//TODO: this refers to global context/window object only if it is a regualr/normal function call.

user = {
    firstName : "Punith",
    lastName : "KR",
    year_o_birth : 1995,
    calculateAge : function(){
        console.log(this)
        function innerFunction(){
            console.log(this);
        }
        innerFunction()
    }
}

function sayHello(){
    console.log(this);
}

console.log(this);
console.log(user.calculateAge());
sayHello()
