//TODO: This is a Functional approach of creating an objects. this keyword here is not pointing to the window or 
// global scope instead it is pointing to the function scope. 

var User = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function aboutUser(city, state){
    this.about = `${this.firstName} ${this.lastName} aged ${this.age} years lives in ${city}, ${state}`
}

var user_1 = new User("Punith", "KR", 26);
var user_2 = new User("Geetha", "MS", 25);
var user_3 = new User("Pooja", "KR", 26);
var users = new Array(user_1, user_2, user_3);

users.forEach( user => {
    aboutUser.call(user, "Davangere", "Karnataka");
});

console.table(users);