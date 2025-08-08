const navLinks = document.querySelectorAll(".nav-link"),
  mainHome = document.querySelector('#main-home'),
  sections = document.querySelectorAll(".section"),
  home = document.querySelector('.home')

document.addEventListener("DOMContentLoaded", () => {
  // Получаем ID активной секции из localStorage
  const activeSectionId = localStorage.getItem("activeSection");

  // Сначала удаляем все активные классы, чтобы избежать дублирования
  sections.forEach((section) => section.classList.remove("actived", "leaving"));
  navLinks.forEach((link) => link.classList.remove("active"));
  mainHome.classList.remove("active");

  if (activeSectionId) {
    // Если в localStorage есть активная секция, делаем ее активной
    const activeSection = document.getElementById(activeSectionId);
    if (activeSection) {
      activeSection.classList.add("actived");

      // И делаем активной соответствующую ссылку
      if (activeSectionId === "home") {
        mainHome.classList.add("active");
      } else {
        navLinks.forEach((link) => {
          if (link.getAttribute("href").substring(1) === activeSectionId) {
            link.classList.add("active");
          }
        });
      }
    } else {
      // Если секция не найдена, устанавливаем Home по умолчанию
      document.getElementById("home").classList.add("actived");
      mainHome.classList.add("active");
      localStorage.setItem("activeSection", "home");
    }
  } else {
    // Если в localStorage нет ничего, устанавливаем Home по умолчанию
    document.getElementById("home").classList.add("actived");
    mainHome.classList.add("active");
    localStorage.setItem("activeSection", "home");
  }
});

// Обработчик для навигационных ссылок
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
      // Сохраняем ID новой активной секции в localStorage
      localStorage.setItem("activeSection", targetId);
    }

    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    mainHome.classList.remove("active");
    link.classList.add("active");
  });
});

// Обработчик для клика по логотипу
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
    // Сохраняем "home" как активную секцию
    localStorage.setItem("activeSection", "home");
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  mainHome.classList.add("active");
});





