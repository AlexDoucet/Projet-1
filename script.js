const btnBurger = document.querySelector(".icone_burger");
const menuBurger = document.querySelector(".menu_burger");

btnBurger.addEventListener("click", function () {

    menuBurger.classList.toggle("visible");
    
    
    });

const btnCompet = document.querySelector(".compet");
const menuCompet = document.querySelector(".menu_compet");

btnCompet.addEventListener("click", function () {

menuCompet.classList.toggle("visible1");

});


const btnCompet1 = document.querySelector(".compet1");
const menuCompet1 = document.querySelector(".menu_compet1");

btnCompet1.addEventListener("click", function () {

menuCompet1.classList.toggle("visible1");

});

document.querySelector(".user").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active2");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active2");
});

document.querySelector(".user1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active2");
});

const btnDark = document.querySelectorAll(".dark_mode");

for(let i =0; i < btnDark.length; i++){

btnDark[i].addEventListener("click", ()=>{
    
    const body = document.body;

    if(body.classList.contains("light")){

        body.classList.add("dark");
        body.classList.remove("light");
        btnDark[i].innerHTML = "Light mode"

    }else if(body.classList.contains("dark")){

        body.classList.add("light");
        body.classList.remove("dark");
        btnDark[i].innerHTML = "Dark mode"
    }

})};



document.forms["login"].addEventListener("submit", function(){

    let inputs = this;
    const user = document.querySelector(".user");

if(inputs["email"].value === "admin@google.com" && inputs["password"].value === "admin1991"){
    
    alert(`Bienvenue Alexandre !`);
function removeIcon(){

            const header = document.querySelector("header");
            const user = document.querySelector(".user");
            user.parentNode.removeChild(user)};

            document.createElement("div");
            header.appendChild("div");
}else{
    alert("Email et/ou mot de passe invalide")
}

});

// Dark Mode //










const focus = document.querySelectorAll(".article1");

for(let i =0; i < focus.length; i++){

    focus[i].addEventListener("click", function(){
        focus[i].classList.toggle("zoom");

})};

