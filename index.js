const navLinks = document.querySelectorAll(".nav-link"),
  mainHome = document.querySelector('#main-home'),
  sections = document.querySelectorAll(".section"),
  home = document.querySelector('.home')

document.addEventListener('DOMContentLoaded', () => {
 
  if (home) {
    home.classList.add("actived");
  }

  
  mainHome.classList.add("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const currentActiveSection = document.querySelector(".section.actived");
        
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (currentActiveSection) {
            
            currentActiveSection.classList.add('leaving');
            
            setTimeout(() => {
                currentActiveSection.classList.remove("actived", "leaving");
            }, 600); 
        }

        if (targetSection) {
            
            targetSection.classList.add("actived");
        }

        
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        mainHome.classList.remove("active");
        link.classList.add("active");
    });
});

mainHome.addEventListener("click", (e) => {
    e.preventDefault();

    const currentActiveSection = document.querySelector(".section.actived");
    const homeSection = document.getElementById('home');

    if (currentActiveSection && currentActiveSection !== homeSection) {
        currentActiveSection.classList.add('leaving');
        setTimeout(() => {
            currentActiveSection.classList.remove("actived", "leaving");
        }, 600);
    }

    if (homeSection) {
        homeSection.classList.add("actived");
    }

    navLinks.forEach((link) => link.classList.remove("active"));
    mainHome.classList.add("active");
});



