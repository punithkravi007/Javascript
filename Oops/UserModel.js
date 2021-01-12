class User {
  courseList = [];

  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getUserInfo() {
    return {
      FullName: `${this.firstName} ${this.lastName}`,
      Email: this.email,
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
        console.warn(
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

module.exports = User;
