user_1 = {
    firstName : "Punith",
    lastName : "KR",
    year_o_birth : 1995,
}

user_2 = {
    firstName : "Geetha",
    lastName : "MS",
    year_o_birth : 1992,
}

user_3 = {
    firstName : "Nithin",
    lastName : "GB",
    year_o_birth : 1999,
}

var users = new Array(user_1, user_2, user_3);

function calculateAge(current_year){
    this.age = parseInt(current_year) - this.year_o_birth;
}

function aboutUser(city, state, country){
    this.about = `${this.firstName} ${this.lastName} aged ${this.age} years lives in ${city}, ${state}, ${country}`;
}

//TODO: Call  : This is avaiable in all the functions and is use to borrow the function into the objects.
//TODO: Apply : This is similar to call but arguments are passed to function as array of elements as shown below
users.forEach(element => {
    calculateAge.call(element, "2021");
    aboutUser.apply(element, ["Davangere", "Karnataka", "India"]);
});
console.table(users);

