// import User from './User';

const User = require('./UserModel.js');
const Course = require('./CourseModel.js');


//TODO: Courses
reactCourse = new Course("React Js", 100);
angularCourse = new Course("Angular", 150);
javaCourse = new Course("Java", 200);
nodeCourse = new Course("Node Js",180);
pythonCourse = new Course("Python", 160);


const user_1 = new User("Punith", "KR", "Punith.kr@intimetec.com");
//TODO: Enrolling to the course
user_1.enrollCourse(pythonCourse);
user_1.enrollCourse(pythonCourse);
user_1.enrollCourse(angularCourse);
user_1.enrollCourse(pythonCourse);
user_1.enrollCourse(javaCourse);

const user_2 = new User("Reshma", "Madan", "Reshma.M@intimetec.com");
//TODO: Enrolling to the course
user_2.enrollCourse(nodeCourse);
user_2.enrollCourse(angularCourse);
user_2.enrollCourse(javaCourse);
user_2.enrollCourse(angularCourse);

//TODO: Before Deleting the course
console.log(user_1.getUserInfo());
console.log(user_2.getUserInfo());

//TODO: Deleting the enrolled course
user_1.deleteCourse("Python");
user_2.deleteCourse("Java");

//TODO: After Deleting the course :
console.log(user_1.getUserInfo());
console.log(user_2.getUserInfo());


function calculateTotalAmountSpent(){
    this.totalAmountSpent = 0;
    this.courseList.forEach( c => {
        this.totalAmountSpent += c.price; 
    });
}

calculateTotalAmountSpent.call(user_1);
calculateTotalAmountSpent.call(user_2);

console.log(user_1);
console.log(user_2);
