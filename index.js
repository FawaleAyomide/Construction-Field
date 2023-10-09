const hamburger = document.querySelector("navBarToggler");
const navMenu = document.querySelector("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// window.addEventListener('scroll', function(){
//   const element = document.querySelector('.img-cont');
//   const position = element.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if(position < windowHeight){
//     element.classList.add('img-cont-active');
//   }
// });