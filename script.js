const btnNavEl = document.querySelector(".mobile-btn-nav");
const headerEL = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
   headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
   link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to top
      if (href === "#")
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
         const sectionEl = document.querySelector(href);
         sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile naviagtion
      if (link.classList.contains("nav-links"))
         headerEl.classList.toggle("nav-open");
   });
});
