const hamburger = document.querySelector(".lines");
const nav = document.querySelector("header");
let pages = [];
pages.push(document.querySelector(".images"));
pages.push(document.querySelector(".events"));
pages.push(document.querySelector(".about"));
pages.push(document.querySelector(".contact"));

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelector("#home").addEventListener("click", () => {
  pages.forEach(p => {
    if (p.classList.contains("images")) {
      p.classList.remove("display-none");
    } else {
      p.classList.add("display-none");
    }
  });
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#home").id);
});

document.querySelector("#events").addEventListener("click", () => {
  pages.forEach(p => {
    if (p.classList.contains("events")) {
      p.classList.remove("display-none");
    } else {
      p.classList.add("display-none");
    }
  });
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#events").id);
});

document.querySelector("#about").addEventListener("click", () => {
  pages.forEach(p => {
    if (p.classList.contains("about")) {
      p.classList.remove("display-none");
    } else {
      p.classList.add("display-none");
    }
  });
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#about").id);
});

document.querySelector("#contact").addEventListener("click", () => {
  pages.forEach(p => {
    if (p.classList.contains("contact")) {
      p.classList.remove("display-none");
    } else {
      p.classList.add("display-none");
    }
  });
  nav.classList.remove("open");
  HighlightNav(document.querySelector("#contact").id);
});

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
}

window.addEventListener("hashchange", () => {
  const route = this.location.hash.substring(2).toLowerCase();
  HighlightNav(route);
  console.log(route);
});
