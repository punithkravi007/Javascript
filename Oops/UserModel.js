//TODO: 
// 1. Class is a blueprint to construct objects.
// 2. To make proerties private, then declare something like #variableName
// 3. To Extend some class, use keyword extends after class name and mention class you wanted to extend
// 4. To Avoid inheriting some methods, declare them as static so it becomes a class member
// 5. super() is used to invoke super class constructor and it should be the first member 
// 6. If no constructor is defined, compiler defines its own constructor called default constructor
//-----------------------------------------------------------------------------------------------------------

class User {
  courseList = [];

  constructor(firstName, lastName, email, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }

  getUserInfo() {
    return {
      FullName: `${this.firstName} ${this.lastName}`,
      Email: this.email,
      Role : this.role,
      EnrolledCourses: this.courseList,
    };
  }

  enrollCourse(course) {
    if (this.courseList.length > 0) {
      let isCourseExist = false;
      this.courseList.forEach((c) => {
        if (c.courseName === course.courseName) isCourseExist = true;
      });
      if (!isCourseExist) this.courseList.push(course);
      else
        console.error(
          `Hey, ${this.firstName} ${this.lastName}, you are trying to add ${course.courseName} again.`
        );
    } else this.courseList.push(course);
  }

  deleteCourse(courseName) {
    let courseIndex = -1;
    this.courseList.forEach((c) => {
      if (c.courseName == courseName) courseIndex = this.courseList.indexOf(c);
    });

    if (courseIndex !== -1) {
      this.courseList.splice(courseIndex, 1);
    } else {
      console.log("Course does not exist");
    }
  }
}

class SuperAdmin extends User{

  constructor(firstName, lastName, email){
    super(firstName,lastName,email, "Super Admin");
  }

}

module.exports = {
  User, SuperAdmin
}