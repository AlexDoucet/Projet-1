const btnBurger = document.querySelector(".icone_burger");
const menuBurger = document.querySelector(".menu_burger");

const userMobile = document.querySelector(".user ");
const userDesktop = document.querySelector(".user1 i");
 

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

const btnDark = document.querySelectorAll(".dark");
for(let i =0; i < btnDark.length; i++){

btnDark[i].addEventListener("click", ()=>{
    const body = document.body;
    const text_btn = document.querySelector(".text_btn");
    const text_btn1 = document.querySelector(".text_btn1")

    if(body.classList.contains("light")){

        body.classList.add("dark");
        body.classList.remove("light");
        text_btn.innerHTML = "Light mode";
        text_btn1.innerHTML = "Light mode";


    }else if(body.classList.contains("dark")){

        body.classList.add("light");
        body.classList.remove("dark");
        text_btn.innerHTML = "Dark mode";
        text_btn1.innerHTML = "Dark mode";
    }

})};


const login = document.querySelector('.submit');
const form1 = document.querySelector('.form1');
const pass = document.querySelector('#pass');
const mail = document.querySelector('#mail');
login.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(pass.value)
    console.log(mail.value)
     if(mail.value === "admin@google.com" && pass.value === "admin1991"){
    
            alert(`Bienvenue Alexandre !`);
            userDesktop.style.Color = 'green';
        
         }else{
             alert("Email et/ou mot de passe invalide")
        }
        
        });


