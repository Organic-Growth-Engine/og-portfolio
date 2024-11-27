// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const mobileMenu = document.querySelector(".mobile-menu-links");
    toggleButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      toggleButton.classList.toggle("nav-open");
    });
  });
  
  // Navbar Glass Background on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar--scroll");
    } else {
      navbar.classList.remove("navbar--scroll");
    }
  });
  
  // To add activex class to links when they reach their respective section
  function onScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollY >= sectionTop - 50 &&
        scrollY < sectionTop + sectionHeight - 50
      ) {
        currentSection = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("activex");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("activex");
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  
  // Circular Text using CircleType.js
  document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("rotating-text");
    new CircleType(text);
  });
  
  // It makes the product CTA Button scale when you hover over the circular rotating text (jquery used)
  $(function () {
    $("#rotating-text, #product-button").hover(
      function () {
        $("#product-button ").css("transform", "translate(0rem, -0.25rem)");
        $("#product-button").css("scale", "1.05");
        $("#product-button").css(
          "box-shadow",
          "0.25rem 0.25rem rgba(0, 0, 0, 0.5)"
        );
        $("#product-button").css("transition", "all 250ms");
      },
      function () {
        $("#product-button").css("transform", "translate(0rem, 0rem)");
        $("#product-button").css("scale", "1");
        $("#product-button").css("box-shadow", "0rem 0rem rgba(0, 0, 0, 0)");
        $("#product-button").css("transition", "all 1000ms");
      }
    );
  });
  
  // It mimics the :active pseudoclass
  $("#product-button")
    .on("mousedown", function () {
      $("#product-button").css("transform", "translate(0)");
      $("#product-button").css("scale", "1");
      $("#product-button").css("box-shadow", "none");
      $("#product-button").css("transition", "all 100ms");
    })
    .on("mouseup", function () {
      $("#product-button ").css("transform", "translate(0rem, -0.25rem)");
      $("#product-button").css("scale", "1.05");
      $("#product-button").css(
        "box-shadow",
        "0.25rem 0.25rem rgba(0, 0, 0, 0.5)"
      );
      $("#product-button").css("transition", "all 1000ms");
    });
  
  // Flips the card when clicked on
  $(document).ready(function () {
    $(".card-inner").on("click", function () {
      $(this).toggleClass("activey");
    });
  });