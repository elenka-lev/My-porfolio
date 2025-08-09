const navLinks = document.querySelectorAll(".nav-link"),
  mainHome = document.querySelector('#main-home'),
  sections = document.querySelectorAll(".section"),
  home = document.querySelector('.home')

document.addEventListener("DOMContentLoaded", () => {
  let activeSectionId = sessionStorage.getItem("activeSection");

  if (!activeSectionId) {
    activeSectionId = "home";
    sessionStorage.setItem("activeSection", activeSectionId);
  }

  showSection(activeSectionId);
  updateActiveLink(activeSectionId);
});

function showSection(id) {
  sections.forEach((section) => section.classList.remove("actived", "leaving"));
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.add("actived");
  }
}

function updateActiveLink(id) {
  navLinks.forEach((link) => link.classList.remove("active"));
  mainHome.classList.remove("active");

  if (id === "home") {
    mainHome.classList.add("active");
  } else {
    navLinks.forEach((link) => {
      if (link.getAttribute("href").substring(1) === id) {
        link.classList.add("active");
      }
    });
  }
}


navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
    updateActiveLink(targetId);
    sessionStorage.setItem("activeSection", targetId);
  });
});


mainHome.addEventListener("click", (e) => {
  e.preventDefault();

  showSection("home");
  updateActiveLink("home");
  sessionStorage.setItem("activeSection", "home");
});


navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const currentActiveSection = document.querySelector(".section.actived");
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (currentActiveSection && currentActiveSection.id !== targetId) {
      currentActiveSection.classList.add("leaving");

      setTimeout(() => {
        currentActiveSection.classList.remove("actived", "leaving");
      }, 600);
    }

    if (targetSection) {
      targetSection.classList.add("actived");
      
      localStorage.setItem("activeSection", targetId);
    }

    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    mainHome.classList.remove("active");
    link.classList.add("active");
  });
});

mainHome.addEventListener("click", (e) => {
  e.preventDefault();

  const currentActiveSection = document.querySelector(".section.actived");
  const homeSection = document.getElementById("home");

  if (currentActiveSection && currentActiveSection.id !== "home") {
    currentActiveSection.classList.add("leaving");
    setTimeout(() => {
      currentActiveSection.classList.remove("actived", "leaving");
    }, 600);
  }

  if (homeSection) {
    homeSection.classList.add("actived");
    localStorage.setItem("activeSection", "home");
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  mainHome.classList.add("active");
});





