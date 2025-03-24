document.addEventListener("DOMContentLoaded", function () {
  // Toggle side navigation on hamburger click
  const hamburger = document.getElementById("hamburger");
  const sideNav = document.getElementById("sideNav");
  hamburger.addEventListener("click", function () {
    sideNav.classList.toggle("open");
  });

  // Determine threshold based on viewport width
  const viewportThreshold = window.innerWidth < 768 ? 0.3 : 0.5;

  // Animate Featured Posts section when in view (reset on exit)
  const featuredPosts = document.querySelector(".featured-posts");
  const postsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        featuredPosts.classList.add("animate");
      } else {
        featuredPosts.classList.remove("animate");
      }
    });
  }, { threshold: viewportThreshold });
  postsObserver.observe(featuredPosts);

  // Animate h2 (Featured Posts heading) when visible (reset on exit)
  const featuredHeading = document.getElementById("featured-heading");
  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        featuredHeading.classList.add("tracking-in-expand");
      } else {
        featuredHeading.classList.remove("tracking-in-expand");
      }
    });
  }, { threshold: viewportThreshold });
  headingObserver.observe(featuredHeading);

  // Animate About Section when in view (reset on exit)
  const aboutSection = document.querySelector(".about");
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("animate");
      } else {
        aboutSection.classList.remove("animate");
      }
    });
  }, { threshold: viewportThreshold });
  aboutObserver.observe(aboutSection);

  // Animate Contact Section when in view (reset on exit)
  const contactSection = document.querySelector(".contact");
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("animate");
      } else {
        contactSection.classList.remove("animate");
      }
    });
  }, { threshold: viewportThreshold });
  contactObserver.observe(contactSection);
});
