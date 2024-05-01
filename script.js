var res = document.getElementById("indication");
var logout=document.querySelector(".logout");
var tapButton=document.getElementById("categories");
function signInClick() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (email.length == 0 && password.length == 0) {
        res.innerHTML = "Insert your Email and Password.";
        res.style.color = "red";
    } else if (email.length == 0) {
        res.innerHTML = "Insert your Email.";
        res.style.color = "red";
    } else if (password.length == 0) {
        res.innerHTML = "Insert your Password.";
        res.style.color = "red";
    }
    else if(email==="pavi@gmail.com" && password==="Password@123"){
        window.location.href="homepage.html"
    }
    else{
        res.innerHTML="Email and Password are invalid"
        res.style.color="red"
    }
}
function categories() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block" ) {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
var overlay=document.querySelector(".overlay")
var insertTask=document.querySelector(".insert-task")
var edityourTask=document.querySelector(".edit-yourtask")
function addtask(){
    overlay.style.display="block"
    insertTask.style.display="block"
}
function cancel(){
    overlay.style.display="none"
    insertTask.style.display="none"
    deletetask.style.display="none"
    edityourTask.style.display="none"
}

var deletetask=document.querySelector(".deleteTask-btn")
function del(){
    overlay.style.display="block"
    deletetask.style.display="block"
}
function editicon(){
    edityourTask.style.display="block"
    overlay.style.display="block"
}

var radio=document.getElementById("ex1")
var taskbutton=document.querySelector(".task1")

radio.addEventListener("click", function() {
    if (this.checked) {
        taskbutton.style.textDecoration = "line-through";
        taskbutton.style.color="gray"
    } else {
        taskbutton.style.textDecoration = "none";
        taskbutton.style.color="black"
    }
    
});

