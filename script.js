document.addEventListener("DOMContentLoaded", () => {
  initHeroParallax();
  initSpotlightEffect();
  initStickyScroll();
  initStatsCounter();
  initSmoothScroll();
  initNavbarEffect();
});

/* =========================================
   1. Hero Section 3D Parallax
   ========================================= */
function initHeroParallax() {
  const heroSection = document.querySelector(".hero");
  const interfaceContainer = document.querySelector(".interface-container");

  if (!heroSection || !interfaceContainer) return;

  heroSection.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    const xPercent = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const yPercent = (clientY / innerHeight - 0.5) * 2; // -1 to 1

    const maxRotateX = 10;
    const maxRotateY = 10;

    const rotateX = -yPercent * maxRotateX;
    const rotateY = xPercent * maxRotateY;

    interfaceContainer.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
  });

  heroSection.addEventListener("mouseleave", () => {
    interfaceContainer.style.transform = `
            perspective(1000px)
            rotateX(20deg)
            scale(0.9)
        `;
  });
}

/* =========================================
   2. Spotlight Hover Effect
   ========================================= */
function initSpotlightEffect() {
  const cards = document.querySelectorAll(".spotlight-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

/* =========================================
   3. Sticky Scroll (Scrollytelling)
   ========================================= */
function initStickyScroll() {
  const steps = document.querySelectorAll(".feature-step");
  const visuals = document.querySelectorAll(".visual-card");
  const stickySection = document.querySelector(".sticky-scroll-section");

  if (!steps.length || !visuals.length || !stickySection) return;

  // Use IntersectionObserver to determine which text step is in focus
  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -40% 0px", // Trigger when element is in middle 20% of screen
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Highlight text
        steps.forEach((s) => s.classList.remove("active"));
        entry.target.classList.add("active");

        // Switch Visual
        const index = entry.target.getAttribute("data-index");
        visuals.forEach((v) => v.classList.remove("active"));
        const targetVisual = document.getElementById(`visual-${index}`);
        if (targetVisual) {
          targetVisual.classList.add("active");
        }
      }
    });
  }, observerOptions);

  steps.forEach((step) => observer.observe(step));
}

/* =========================================
   4. Animated Stats Counter
   ========================================= */
function initStatsCounter() {
  const stats = document.querySelectorAll(".stat-value");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateValue(el);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  stats.forEach((stat) => observer.observe(stat));
}

function animateValue(obj) {
  const rawText = obj.innerText;
  // Extract number and suffix (e.g. "400ms" -> 400, "ms")
  const value = parseInt(rawText.replace(/[^0-9]/g, ""));
  const suffix = rawText.replace(/[0-9]/g, "");

  if (isNaN(value)) return;

  let startTimestamp = null;
  const duration = 2000;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Ease out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    obj.innerHTML = Math.floor(easeProgress * value) + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = rawText; // Ensure final exact value
    }
  };

  window.requestAnimationFrame(step);
}

/* =========================================
   5. Navbar & Smooth Scroll
   ========================================= */
function initNavbarEffect() {
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.background = "rgba(0,0,0,0.8)";
      nav.style.boxShadow = "0 1px 0 rgba(255,255,255,0.1)";
    } else {
      nav.style.background = "rgba(0,0,0,0.5)";
      nav.style.boxShadow = "none";
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = 60;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}
