const hamburger = document.querySelector(".lines");
const nav = document.querySelector("header");
let pages = [];
pages.push(document.querySelector(".home"));
pages.push(document.querySelector(".events"));
pages.push(document.querySelector(".about"));
pages.push(document.querySelector(".contact"));

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelector("#home").addEventListener("click", () => {
  const home = document.querySelector(".home").className.split(" ")[0];
  ChangeContent(home);
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#home").id);
});

document.querySelector("#events").addEventListener("click", () => {
  const events = document.querySelector(".events").className.split(" ")[0];
  ChangeContent(events);
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#events").id);
});

document.querySelector("#about").addEventListener("click", () => {
  const about = document.querySelector(".about").className.split(" ")[0];
  ChangeContent(about);
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#about").id);
});

document.querySelector("#contact").addEventListener("click", () => {
  const contact = document.querySelector(".contact").className.split(" ")[0];
  ChangeContent(contact);
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#contact").id);
});

function ChangeContent(route) {
  pages.forEach(p => {
    if (p.classList.contains(route)) {
      p.classList.remove("display-none");
    } else {
      p.classList.add("display-none");
    }
  });
  if (route === "") {
    document.querySelector(".home").classList.remove("display-none");
  }
}

window.addEventListener("load", () => {
  const navLinks = document.querySelectorAll("li a");
  if (this.location.hash === "") {
    navLinks.forEach(l => {
      if (l.id !== "home") {
        l.classList.add("fade");
      }
    });
  }
});

function HighlightNav(route) {
  const navLinks = document.querySelectorAll("li a");
  navLinks.forEach(l => {
    if (l.id === route) {
      l.classList.remove("fade");
    } else {
      l.classList.add("fade");
    }
  });
  if (route === "") {
    document.querySelector("#home").classList.remove("fade");
  }
}

window.addEventListener("hashchange", () => {
  const route = this.location.hash.substring(2).toLowerCase();
  HighlightNav(route);
  ChangeContent(route);
});
