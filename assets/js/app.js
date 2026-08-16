(() => {
  const data = window.PORTFOLIO_DATA;

  const renderStats = () => {
    document.getElementById("hero-stats").innerHTML = data.stats.map(item => `
      <div class="stat">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
    `).join("");
  };

  const renderUpdates = () => {
    document.getElementById("updates-list").innerHTML = data.updates.map(item => `
      <article class="update-row reveal">
        <div class="update-date">${item.date}</div>
        <p class="update-text">${item.text}</p>
      </article>
    `).join("");
  };

  const renderPublications = () => {
    document.getElementById("publications-list").innerHTML = data.publications.map((item, index) => `
      <article class="pub-item reveal">
        <div class="pub-num">${String(index + 1).padStart(2, "0")}</div>
        <div>
          <p class="pub-title">${item.title}</p>
          <p class="pub-authors">${item.authors}</p>
          <p class="pub-meta">${item.venue}</p>
          <a class="evidence-link" href="${item.link}" target="_blank" rel="noopener">DOI: ${item.doi} ↗</a>
        </div>
        <div class="pub-role">${item.role}</div>
      </article>
    `).join("");
  };

  const renderProjects = () => {
    document.getElementById("projects-list").innerHTML = data.projects.map((item, index) => `
      <article class="project-card reveal">
        <div class="project-type">${item.type}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="project-role">${item.role}</div>
        ${item.links && item.links.length ? `
          <div class="project-links">
            ${item.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`).join("")}
          </div>
        ` : ""}
        <div class="tag-row">
          ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </article>
    `).join("");
  };

  const renderExperience = () => {
    document.getElementById("experience-list").innerHTML = data.experience.map(item => `
      <article class="exp-item reveal">
        <div class="exp-date">${item.date}</div>
        <div>
          <h3>${item.role}</h3>
          <div class="exp-org">${item.org}</div>
          <p>${item.description}</p>
        </div>
      </article>
    `).join("");
  };

  const renderRecognition = () => {
    document.getElementById("recognition-list").innerHTML = data.recognition.map(item => `
      <article class="recognition-card reveal">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </article>
    `).join("");
  };

  const renderSkills = () => {
    document.getElementById("skills-list").innerHTML = data.skills.map(item => `
      <article class="skill-group reveal">
        <h3>${item.title}</h3>
        <p>${item.items}</p>
      </article>
    `).join("");
  };

  renderStats();
  renderUpdates();
  renderPublications();
  renderProjects();
  renderExperience();
  renderRecognition();
  renderSkills();

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  document.getElementById("year").textContent = new Date().getFullYear();
})();
