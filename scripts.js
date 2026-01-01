document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks for reaching out! I’ll get back to you soon.");
      form.reset();
    });
  }

  // Showcase filter (optional)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      projects.forEach(card => {
        card.style.display = category === "all" || card.dataset.category === category ? "block" : "none";
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => { 
    // Dynamic footer year 
    const yearSpan = document.getElementById("year"); 
    if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); } 
    // Bootstrap form validation 
    const forms = document.querySelectorAll(".needs-validation"); 
    Array.from(forms).forEach(form => { 
        form.addEventListener("submit", event => { 
            if (!form.checkValidity()) { event.preventDefault(); event.stopPropagation(); 

            } form.classList.add("was-validated"); 
        }, false); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      projectCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      // Highlight active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
