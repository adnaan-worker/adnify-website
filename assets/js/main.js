/**
 * Adnify Website - Main JavaScript
 * Unified and optimized version
 */

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
  links: {
    github: 'https://github.com/nicepkg/adnify',
    releases: 'https://github.com/nicepkg/adnify/releases'
  },
  stats: {
    aiTools: 22,
    startupTime: 400,
    llmSupport: 5,
    localFirst: 100
  },
  animation: {
    numberDuration: 1500,
    scrollThreshold: 0.1,
    scrollMargin: '0px 0px -50px 0px'
  }
};

// ========================================
// DOM ELEMENTS
// ========================================
const DOM = {
  nav: null,
  bentoCards: null,
  statItems: null,
  featureBlocks: null,
  testimonialsTrack: null,
  indicatorDots: null
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initDOM();
  initSmoothScroll();
  initNavScroll();
  initScrollAnimations();
  initBentoGlow();
  initTestimonials();
  initContributors();
});

function initDOM() {
  DOM.nav = document.querySelector('.nav');
  DOM.bentoCards = document.querySelectorAll('.bento-card');
  DOM.statItems = document.querySelectorAll('.stat-item');
  DOM.featureBlocks = document.querySelectorAll('.feature-block');
  DOM.testimonialsTrack = document.querySelector('.testimonials-track');
  DOM.indicatorDots = document.querySelectorAll('.indicator-dot');
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========================================
// NAV SCROLL EFFECT
// ========================================
function initNavScroll() {
  if (!DOM.nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      DOM.nav.classList.add('scrolled');
    } else {
      DOM.nav.classList.remove('scrolled');
    }
  });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: CONFIG.animation.scrollThreshold,
    rootMargin: CONFIG.animation.scrollMargin
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate numbers when stat-item becomes visible
        if (entry.target.classList.contains('stat-item')) {
          const numEl = entry.target.querySelector('.stat-number');
          if (numEl && !numEl.dataset.animated) {
            animateNumber(numEl);
            numEl.dataset.animated = 'true';
          }
        }

        // Handle contributor items staggered animation
        if (entry.target.classList.contains('contributors-grid')) {
          const items = entry.target.querySelectorAll('.contributor-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 80);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.feature-block, .bento-card, .stat-item, .section-title, .section-subtitle, .contributor-card, .contributors-grid, .contribute-cta').forEach(el => {
    observer.observe(el);
  });

  // Fallback for elements already in viewport
  setTimeout(() => {
    document.querySelectorAll('.feature-block, .bento-card, .stat-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (inViewport && !el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  }, 100);
}

// ========================================
// NUMBER ANIMATION
// ========================================
function animateNumber(el) {
  const text = el.textContent;
  const hasPlus = text.includes('+');
  const hasLt = text.includes('<');
  const hasPercent = text.includes('%');
  const hasMs = text.includes('ms');

  let num = parseInt(text.replace(/[^0-9]/g, ''));
  if (isNaN(num)) return;

  const duration = CONFIG.animation.numberDuration;
  const start = performance.now();
  const startNum = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startNum + (num - startNum) * eased);

    let display = current.toString();
    if (hasLt) display = '<' + display;
    if (hasMs) display += 'ms';
    if (hasPercent) display += '%';
    if (hasPlus) display += '+';

    el.textContent = display;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ========================================
// BENTO CARD GLOW EFFECT
// ========================================
function initBentoGlow() {
  if (!DOM.bentoCards.length) return;

  DOM.bentoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });
}

// ========================================
// TESTIMONIALS
// ========================================
function initTestimonials() {
  if (!DOM.testimonialsTrack) return;

  // Clone testimonial cards for infinite scroll effect
  const cards = DOM.testimonialsTrack.querySelectorAll('.testimonial-card');
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    DOM.testimonialsTrack.appendChild(clone);
  });

  // Initialize indicator interaction
  if (DOM.indicatorDots.length > 0) {
    let currentIndicator = 0;

    function updateIndicator() {
      DOM.indicatorDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndicator);
      });
      currentIndicator = (currentIndicator + 1) % DOM.indicatorDots.length;
    }

    // Auto-update indicator every 13 seconds
    setInterval(updateIndicator, 13000);

    // Click to change indicator
    DOM.indicatorDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndicator = index;
        DOM.indicatorDots.forEach((d, i) => {
          d.classList.toggle('active', i === index);
        });
      });
    });
  }
}

// ========================================
// CONTRIBUTORS
// ========================================
function initContributors() {
  const contributorGlow = document.querySelector('.contributor-glow');
  const contributorCard = document.querySelector('.contributor-card.contributor-lead');

  if (contributorCard && contributorGlow) {
    contributorCard.addEventListener('mousemove', (e) => {
      const rect = contributorCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      contributorGlow.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`;
    });

    contributorCard.addEventListener('mouseleave', () => {
      contributorGlow.style.transform = 'translate(-50%, -50%)';
    });
  }
}
