const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");
const navWrapper = document.getElementById("nav-wrapper");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
});

// Close sidebar when resizing back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    sidebar.classList.add("translate-x-full");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 15) {
    navWrapper.classList.add("shadow-md");
  } else {
    navWrapper.classList.remove("shadow-md");
  }
});

filterSelection("all"); // Show all projects by default

function filterSelection(c) {
  const elements = document.getElementsByClassName("column");
  if (c === "all") c = "";
  for (let i = 0; i < elements.length; i++) {
    w3RemoveClass(elements[i], "show");
    if (elements[i].className.indexOf(c) > -1) w3AddClass(elements[i], "show");
  }
}

function w3AddClass(element, name) {
  const arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  arr1 = arr1.filter((className) => !arr2.includes(className));
  element.className = arr1.join(" ");
}

const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    if (current.length) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
