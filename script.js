
script.js
100%
document.addEventListener("DOMContentLoaded", () => {
  // 1. Motto / Saying Cycler in the Developer Section
  const mottos = [
    {
      quote: "Code with clarity. Design with intent.",
      source: "Shawn"
    },
    {
      quote: "Every error message is just a clue to a better solution.",
      source: "Shawn"
    },
    {
      quote: "Curiosity starts the project; persistence gets it across the finish line.",
      source: "Shawn"
    },
    {
      quote: "Make it work, make it clean, make it intuitive.",
      source: "Shawn"
    }
  ];

  let mottoIndex = 0;
  const shuffleMottoBtn = document.getElementById("shuffleMottoBtn");
  const blockquoteEl = document.querySelector("#about-motto blockquote");

  if (shuffleMottoBtn && blockquoteEl) {
    shuffleMottoBtn.addEventListener("click", () => {
      mottoIndex = (mottoIndex + 1) % mottos.length;
      const currentMotto = mottos[mottoIndex];
      blockquoteEl.innerHTML = `
        <p class="mb-2 fst-italic fw-medium">&ldquo;${currentMotto.quote}&rdquo;</p>
        <footer class="blockquote-footer mb-0 mt-1">${currentMotto.source}</footer>
      `;
    });
  }

  // 2. Portfolio Filter Buttons (All Projects / Midterms / Finals)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.getAttribute("data-filter");

      // Update active button styling using Bootstrap classes
      filterButtons.forEach((btn) => {
        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-outline-primary");
      });
      button.classList.remove("btn-outline-primary");
      button.classList.add("active", "btn-primary");

      // Show or hide matching project cards
      projectItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (selectedFilter === "all" || category === selectedFilter) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });

  // 3. Dynamic Activity Screenshot & Notes Preview Box
  const detailButtons = document.querySelectorAll(".view-details-btn");
  const detailsBox = document.getElementById("projectDetailsBox");
  const detailTitle = document.getElementById("detailTitle");
  const detailDescription = document.getElementById("detailDescription");
  const detailImage = document.getElementById("detailImage");
  const closeDetailsBtn = document.getElementById("closeDetailsBtn");

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title");
      const details = btn.getAttribute("data-details");
      const imgSrc = btn.getAttribute("data-img");

      if (detailsBox && detailTitle && detailDescription && detailImage) {
        detailTitle.textContent = title;
        detailDescription.textContent = details;
        detailImage.src = imgSrc;
        detailImage.alt = `${title} Screenshot`;

        detailsBox.classList.remove("d-none");
        detailsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });

  if (closeDetailsBtn && detailsBox) {
    closeDetailsBtn.addEventListener("click", () => {
      detailsBox.classList.add("d-none");
    });
  }

  // 4. Contact Form Validation & Confirmation
  const contactForm = document.getElementById("contactForm");
  const contactFeedback = document.getElementById("contactFeedback");

  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("senderName")?.value.trim() || "";
      const email = document.getElementById("senderEmail")?.value.trim() || "";
      const message = document.getElementById("senderMessage")?.value.trim() || "";

      if (!name || !email || !message) {
        contactFeedback.className = "alert alert-danger";
        contactFeedback.textContent = "Please complete your full name, email address, and message before submitting.";
        return;
      }

      contactFeedback.className = "alert alert-success";
      contactFeedback.textContent = `Thanks for reaching out, ${name}! Your message has been received.`;
      contactForm.reset();
    });
  }
});
