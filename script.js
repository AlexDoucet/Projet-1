

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

// const btnUser = document.querySelector(".fa-solid fa-user");
// const menuLogin = document.querySelector(".popup");

// btnUser.addEventListener("click", function () {

// menuLogin.classList.toggle("visible2");

// });



document.querySelector(".user").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active2");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active2");
});

document.querySelector(".user1").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active2");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active2");
});