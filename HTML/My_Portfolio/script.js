// ============================================
// Typewriter effect for the role in the hero code block
// ============================================
(function typewriter() {
  const el = document.querySelector('.typed-role');
  if (!el) return;
  const text = 'Software / Java Developer';
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = text;
    return;
  }

  let i = 0;
  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, 38);
    }
  }
  setTimeout(tick, 500);
})();

// ============================================
// Scroll reveal via IntersectionObserver
// ============================================
(function scrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), idx * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

// ============================================
// Active file highlighting in the explorer, based on scroll position
// ============================================
(function activeNav() {
  const fileItems = document.querySelectorAll('.file-item');
  const sections = document.querySelectorAll('.pane[id]');
  if (!fileItems.length || !sections.length) return;

  const map = new Map();
  fileItems.forEach(item => {
    const target = item.getAttribute('data-target');
    if (!map.has(target)) map.set(target, []);
    map.get(target).push(item);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        fileItems.forEach(item => item.classList.remove('active'));
        (map.get(id) || []).forEach(item => item.classList.add('active'));
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
})();

// ============================================
// Mobile explorer (sidebar) toggle
// ============================================
(function mobileExplorer() {
  const toggle = document.getElementById('explorerToggle');
  const explorer = document.getElementById('explorer');
  if (!toggle || !explorer) return;

  toggle.addEventListener('click', () => {
    explorer.classList.toggle('open');
  });

  explorer.querySelectorAll('.file-item').forEach(item => {
    item.addEventListener('click', () => {
      explorer.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (
      explorer.classList.contains('open') &&
      !explorer.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      explorer.classList.remove('open');
    }
  });
})();
