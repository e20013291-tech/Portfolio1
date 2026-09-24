const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

let clickedNav = false;


// MOBILE MENU

menuIcon.onclick = () => {

  navbar.classList.toggle("active");

  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");

};


// NAVIGATION LINKS

/*navLinks.forEach(link => {

  link.onclick = () => {

    clickedNav = true;

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    navbar.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

setTimeout(() => {
      clickedNav = false;
    }, 800);

  };

});


// ACTIVE LINK WHILE SCROLLING

window.addEventListener("scroll", () => {

  if (clickedNav) return;

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});*/