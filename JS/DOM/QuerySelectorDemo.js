
let container = document.getElementById("container");

container.innerHTML = `
    <h2>Course Name is JavaScript</h2>
    <h4>JavaScript is a programming language</h4>
    <h4>Course Duration : 3 Months</h4>
    `;

let sample = document.getElementById("sample");
console.log("textContent : ", sample.textContent);
console.log("InnerText : ", sample.innerText);

let heading = document.getElementById("heading");

let button = document.getElementById("changeButton");

button.addEventListener("click", () => {

    heading.style.backgroundColor = "green";
    heading.style.color = "white";
    heading.style.fontSize = "35px";


});

let button1 = document.getElementById("changeBackground");

button1.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
    document.body.style.fontFamily = "cursive";
    document.body.style.fontStyle = "Italic";


});

let HeadingButton = document.getElementById("changeHeading");

HeadingButton.addEventListener("click", () => {
    heading.textContent = "Welcome to Web Development Batch"
    heading.style.backgroundColor = "blue";
})
