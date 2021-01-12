const {SuperAdmin} = require('./UserModel.js');
const Course = require("./CourseModel.js");

reactCourse = new Course("React Js", 100);
angularCourse = new Course("Angular", 150);
javaCourse = new Course("Java", 200);
nodeCourse = new Course("Node Js", 180);
pythonCourse = new Course("Python", 160);



let user_1 = new SuperAdmin("Punith", "KR", "Punith.KR@intimetec.com");
console.log(user_1.getUserInfo());
user_1.enrollCourse(reactCourse);
user_1.enrollCourse(nodeCourse);
console.log(user_1.getUserInfo());