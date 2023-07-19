let menu = document.querySelector(".btn i");
let list = document.querySelector(".container ul");

menu.addEventListener("click", function () {
  if (list.classList.length == 0) {
    list.classList.toggle("open");
  } else if (list.classList.length == 1) {
    list.classList.toggle("open");
    list.classList.toggle("close");
  }
  if (list.classList.contains("open")) {
    menu.classList.replace("fa-bars", "fa-x");
  } else {
    menu.classList.replace("fa-x", "fa-bars");
  }
});
document.addEventListener("click", function (e) {
  if (e.target !== list && e.target !== menu) {
    if (list.classList.contains("open")) {
      list.classList.toggle("close");
      list.classList.remove("open");
      if (list.classList.contains("open")) {
        menu.classList.replace("fa-bars", "fa-x");
      } else {
        menu.classList.replace("fa-x", "fa-bars");
      }
    }
  }
});


// About
let about = document.querySelector("#about");
let aboutHeadingS = document.querySelector(".about .special-heading span ");
let leftRow = document.querySelector(".about .about-img #left")
let topRow = document.querySelector(".about .about-img #top")

window.addEventListener("scroll", function () {
  if (window.scrollY >= about.offsetTop - 500) {
    aboutHeadingS.style.cssText = "left:-310px;";
    leftRow.style.cssText = "height:  calc(100% + 12px);";
    topRow.style.cssText ="width: calc(100% + 12px);    "
  }
});

//skills
let skills = document.querySelector("#skills");
let skill = document.querySelectorAll(".skill .progress span");
let skillsEnd = document.querySelectorAll(".skills  span.end");
let skillsHeading = document.querySelector(".skills .special-heading span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop - 500) {
    skill.forEach((span) => {
      let goal = span.dataset.width;
      span.style.width = `${goal}`;
    });
    skillsEnd.forEach((span) => {
      let position = span.dataset.width;
      span.style.cssText = `left:${position}`;
    });

    skillsHeading.style.cssText = "right:calc(100% + 10px);";
  }
});

//service
let services = document.querySelector("#services");
let servicesHeadingS = document.querySelector(
  ".services .special-heading span "
);

window.addEventListener("scroll", function () {
  if (window.scrollY >= services.offsetTop - 500) {
    servicesHeadingS.style.cssText = "right:calc(100% + 10px);";
  }
});

//portfolio
let portfolio = document.querySelector("#portfolio");
let portfolioHeadingS = document.querySelector(
  ".portfolio .special-heading span "
);

let switcher = document.querySelectorAll(".portfolio ul li");
let imgs = document.querySelectorAll(".galary div");

window.addEventListener("scroll", function () {
  if (window.scrollY >= portfolio.offsetTop - 500) {
    portfolioHeadingS.style.cssText = "right:calc(100% + 10px);";
  }
});

switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

//Remove active class from all lis and add to current
function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// control item
function manageImgs() {
  imgs.forEach((img) => {
    img.classList.add("non-chick");
    setTimeout(() => {
      img.style.display = "none";
    }, 500);
  });
  document.querySelectorAll(this.dataset.name).forEach((el) => {
    el.classList.remove("non-chick");
    el.classList.add("chick");
    setTimeout(() => {
      el.style.display = "block";
    }, 500);
  });
}
//contact
let contact = document.querySelector("#contact");
let contactHeadingS = document.querySelector(".contact .special-heading span ");

window.addEventListener("scroll", function () {
  if (window.scrollY >= contact.offsetTop - 500) {
    contactHeadingS.style.cssText = "right:calc(100% + 10px)";
  }
});

let userName = document.querySelector("[name='Name']");
let userEmail = document.querySelector("[name='email']");
let massage = document.querySelector("#massage");

document.forms[0].onsubmit = function (e) {
  let userV = false;
  let EmailV = false;
  let massageValid = false;

  if (userName.value !== "" && userName.value.length >= 4) {
    userV = true;
  }
  if (userEmail.value !== "") {
    EmailV = true;
  }
  if (massage.value !== "" && massage.value.length >= 15) {
    massageValid = true;
  }
  if (userV === false || massageValid === false || EmailV === false) {
    e.preventDefault();
  }
};
