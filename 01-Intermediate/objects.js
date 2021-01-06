var user = {
    firstName : "Punith",
    lastName : "KR",
    role : "Admin",
    loginCount : 30,
    facebookSignIn : true,
    buyCourse : function(courseName){
        if(this.courseList != undefined){
            if (this.courseList.indexOf(courseName) === -1){
                this.courseList.push(courseName);
            }else{
                console.warn(`Hey ${this.firstName}, you have already brought this course.`);
            }
        }else{
            this.courseList = [];
            this.courseList.push(courseName);
        }
    },
    getCourseInfo : function(){
        return `${this.firstName} ${this.lastName} is enrolled to total of ${this.courseList.length} courses `
    }
}

user.buyCourse("React JS");
user.buyCourse("Angular JS");
user.buyCourse("Java");
console.table(user);