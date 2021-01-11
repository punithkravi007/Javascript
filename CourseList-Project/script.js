var courses = [
    {
        name: "Complete React Js Course",
        price: "2.2"
    }, {
        name: "Complete Angular Course",
        price: "2.7"
    }, {
        name: "Complete Node Js Course",
        price: "2.6"
    }, {
        name: "Complete Java Course",
        price: "3.0"
    },{
        name : "Complete Django Course",
        price : "1.0"
    }
];

var createCourseList = () => {
    const ulElement = document.querySelector(".list-group");
    ulElement.innerHTML = "";

    courses.forEach(e => {
        const CourseLiElement = document.createElement("li");
        CourseLiElement.classList.add("list-group-item");
        const courseName = document.createTextNode(e.name);
        CourseLiElement.appendChild(courseName);
    
        const priceSpanElement = document.createElement("span");
        priceSpanElement.classList.add("float-right");
        const coursePrice = document.createTextNode(`$${e.price}`);
        priceSpanElement.appendChild(coursePrice);
        
        ulElement.appendChild(CourseLiElement)
        CourseLiElement.appendChild(priceSpanElement);
    });
};

window.addEventListener("load", createCourseList);

const sortCourseBtnAsc = document.querySelector(".sort-btn-asc");
const sortCourseBtnDesc = document.querySelector(".sort-btn-desc");

sortCourseBtnAsc.addEventListener("click", () => {
    courses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    createCourseList();
});

sortCourseBtnDesc.addEventListener("click", () => {
    courses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    createCourseList();
});


