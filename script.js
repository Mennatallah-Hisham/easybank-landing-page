

const navBtn =document.querySelector(".btn-mobile-nav");

const headerEl =document.querySelector(".header");

navBtn.addEventListener("click",()=>{
    console.log("clicked");
    headerEl.classList.toggle("nav-open");
})