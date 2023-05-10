/*=============== SHOW SIDEBAR ===============*/

const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav__link");

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
    console.log(123);
  });
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if (navClose || navLink) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      navMenu.classList.remove("show-sidebar");
    })
  );
}
/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]"),
  tabsContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });
    tab.classList.add("skills__active");
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    document.body.classList.add("modal-open");
    togglePortfolioPopup();
    portfolioDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
  document.body.classList.remove("modal-open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopup);

function portfolioDetails(portfolioItem) {
  //   console.log(item);
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, l) => {
  modalBtn.addEventListener("click", () => {
    document.body.classList.add("modal-open");
    modal(l);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
      document.body.classList.remove("modal-open");
    });
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/

const inputs = document.querySelectorAll(".input");
function focusFun() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFun() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFun);
  input.addEventListener("blur", blurFun);
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

function navHighLighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current, i) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.add("active-link", "animationSidebar");
      if (i % 2 === 0)
        document
          .getElementById(sectionId)
          .classList.add("animationSectionRight");
      else
        document
          .getElementById(sectionId)
          .classList.add("animationSectionLeft");
    } else {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.remove("active-link", "animationSidebar");
      // if (i % 2 === 0)
      //   document
      //     .getElementById(sectionId)
      //     .classList.remove("animationSectionRight");
      // else
      //   document
      //     .getElementById(sectionId)
      //     .classList.remove("animationSectionLeft");
    }
  });
}

// function workCard() {
//   let scrollY = window.pageYOffset;
//   work.forEach((current, i) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 500;
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       if (i % 2 === 0) current.classList.add("animationSectionRight");
//       else current.classList.add("animationSectionLeft");
//     }
//   });
// }

function scrollUp() {
  let scrollY = window.pageYOffset;
  if (scrollY <= 300) {
    document.querySelector("#home-img").classList.add("animationImage");
  } else {
    document.querySelector("#home-img").classList.remove("animationImage");
  }
}

const sections = document.querySelectorAll("section[id]");
// const work = document.querySelectorAll(".work__card");
// window.addEventListener("scroll", workCard);
window.addEventListener("scroll", navHighLighter);
window.addEventListener("scroll", scrollUp);

/*=============== SHOW SCROLL UP ===============*/
