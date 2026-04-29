/* =============================================
   MD Tanzim Hossain Mridha — Portfolio
   main.js
   ============================================= */

'use strict';

/* ===========================
   HELPERS
   =========================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ===========================
   CUSTOM CURSOR
   =========================== */
(function initCursor() {
  if (window.innerWidth <= 1024) return;

  const dot = $('#cursor');
  const ring = $('#cursorFollower');
  if (!dot || !ring) return;

  let mx = 0, my = 0;
  let rx = 0, ry = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(animRing);
  }
  animRing();

  const hoverEls = $$('a, button, .proj-card, .svc-card, .testi-card, .proc-step');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
  });
})();

/* ===========================
   NAVBAR — scroll + hamburger
   =========================== */
(function initNav() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');
  const overlay   = document.createElement('div');

  if (!navbar) return;

  // Dim overlay for mobile menu
  overlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.55);
    z-index:998;opacity:0;pointer-events:none;
    transition:opacity 0.3s;
  `;
  document.body.appendChild(overlay);

  // Scroll state
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 45);
    setActiveLink();
    toggleBackTop();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.style.opacity  = '1';
    overlay.style.pointerEvents = 'auto';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.style.opacity  = '0';
    overlay.style.pointerEvents = 'none';
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  $$('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
})();

/* ===========================
   ACTIVE NAV LINK ON SCROLL
   =========================== */
function setActiveLink() {
  const sections = $$('section[id]');
  const links    = $$('.nav-link');
  let current    = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 110) {
      current = sec.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ===========================
   SCROLL REVEAL (IntersectionObserver)
   =========================== */
(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve — keeps animation if scrolled back
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -44px 0px' });

  $$('.reveal').forEach(el => observer.observe(el));
})();

/* ===========================
   COUNTER ANIMATION
   =========================== */
(function initCounters() {
  const statsEl = $('.hero-stats');
  if (!statsEl) return;

  let triggered = false;

  const observer = new IntersectionObserver(entries => {
    if (!triggered && entries[0].isIntersecting) {
      triggered = true;
      $$('.counter').forEach(el => {
        const target = +el.getAttribute('data-target');
        const dur    = 1800; // ms
        const fps    = 60;
        const steps  = dur / (1000 / fps);
        const inc    = target / steps;
        let val      = 0;

        const tick = () => {
          val += inc;
          if (val >= target) {
            el.textContent = target;
            return;
          }
          el.textContent = Math.floor(val);
          requestAnimationFrame(tick);
        };
        tick();
      });
    }
  }, { threshold: 0.6 });

  observer.observe(statsEl);
})();

/* ===========================
   PROJECT FILTER
   =========================== */
(function initFilter() {
  const btns  = $$('.flt-btn');
  const cards = $$('.proj-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cats = card.getAttribute('data-cat') || '';
        const show = filter === 'all' || cats.split(' ').includes(filter);

        if (show) {
          card.style.display = '';
          // Trigger re-reveal after a micro-tick
          requestAnimationFrame(() => card.classList.remove('hidden'));
        } else {
          card.classList.add('hidden');
          // Actually hide after transition
          setTimeout(() => {
            if (card.classList.contains('hidden')) {
              card.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
})();

/* ===========================
   PROJECT IMAGE PLACEHOLDERS
   (graceful fallback SVG)
   =========================== */
(function initImgFallback() {
  const colors = [
    ['#067D85', '#034a50'],
    ['#1A3A5C', '#0a2040'],
    ['#0A2540', '#061528'],
    ['#1B4332', '#0d2b20'],
    ['#1C2B4A', '#0e1a30'],
    ['#2C1654', '#18093a'],
  ];
  let idx = 0;

  $$('.proj-thumb img').forEach(img => {
    img.addEventListener('error', function () {
      const wrapper = this.closest('.proj-thumb');
      const [c1, c2] = colors[idx % colors.length];
      idx++;

      const icons = ['💻', '🎨', '⚡', '📊', '🚀', '🔮'];
      const icon  = icons[Math.floor(Math.random() * icons.length)];

      const placeholder = document.createElement('div');
      placeholder.style.cssText = `
        position:absolute;inset:0;
        background:linear-gradient(135deg, ${c1} 0%, ${c2} 100%);
        display:flex;align-items:center;justify-content:center;
        font-size:3rem;
      `;
      placeholder.textContent = icon;
      wrapper.insertBefore(placeholder, wrapper.firstChild);
      this.style.display = 'none';
    });
  });
})();

/* ===========================
   PARALLAX GLOW ON HERO SCROLL
   =========================== */
(function initParallax() {
  const glowTop = $('.hero-glow-top');
  const glowBot = $('.hero-glow-bottom');

  if (!glowTop && !glowBot) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (glowTop) glowTop.style.transform = `translateY(${y * 0.28}px)`;
    if (glowBot) glowBot.style.transform = `translateY(${y * 0.15}px)`;
  }, { passive: true });
})();

/* ===========================
   BACK TO TOP
   =========================== */
const backTop = $('#backToTop');

function toggleBackTop() {
  if (!backTop) return;
  backTop.classList.toggle('visible', window.scrollY > 420);
}

if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===========================
   CONTACT FORM
   =========================== */
(function initForm() {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('submitBtn');
  if (!form || !btn) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name  = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      showFormError(form.querySelector('[name="name"]'), 'Please enter your name');
      return;
    }
    if (!email || !emailRx.test(email)) {
      showFormError(form.querySelector('[name="email"]'), 'Please enter a valid email');
      return;
    }

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    const formData = new FormData(form);

    fetch('https://formspree.io/f/xwvwajjw', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
      return response.json().then(function(data) {
        return { status: response.status, data: data };
      });
    })
    .then(function(result) {
      if (result.status === 200) {
        showSuccess(name);
      } else {
        throw new Error('Failed');
      }
    })
    .catch(function() {
      btn.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Failed — Try Again';
      btn.style.background = '#e63946';
      btn.disabled = false;
      setTimeout(function() {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        btn.style.background = '';
      }, 3500);
    });
  });

  function showSuccess(name) {
    const wrap = document.querySelector('.contact-form-wrap');
    if (!wrap) return;
    wrap.innerHTML = [
      '<div style="display:flex;flex-direction:column;align-items:center;',
      'justify-content:center;text-align:center;padding:60px 40px;gap:20px;">',
      '<div style="width:72px;height:72px;background:rgba(0,255,148,0.1);',
      'border:2px solid #00FF94;border-radius:50%;display:flex;',
      'align-items:center;justify-content:center;font-size:2rem;color:#00FF94;">✓</div>',
      '<h3 style="font-size:1.6rem;font-weight:800;">Message Sent!</h3>',
      '<p style="color:rgba(255,255,255,0.62);font-size:0.95rem;line-height:1.75;max-width:340px;">',
      'Thanks <strong style="color:white;">' + name + '</strong>, I\'ve received your message ',
      'and will get back to you within <strong style="color:white;">24 hours</strong>.</p>',
      '<a href="https://wa.me/8801680799597" target="_blank" rel="noopener" ',
      'style="display:inline-flex;align-items:center;gap:8px;background:#25D366;',
      'color:#fff;padding:12px 26px;border-radius:50px;font-weight:600;',
      'font-size:0.9rem;text-decoration:none;">',
      '<i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a>',
      '</div>'
    ].join('');
  }

  function showFormError(input, msg) {
    input.style.borderColor = '#ff6b6b';
    input.focus();
    const existing = input.nextElementSibling;
    if (existing && existing.classList.contains('form-err')) return;
    const err = document.createElement('span');
    err.className = 'form-err';
    err.style.cssText = 'font-size:0.75rem;color:#ff6b6b;margin-top:3px;display:block;';
    err.textContent = msg;
    input.after(err);
    setTimeout(function() {
      input.style.borderColor = '';
      err.remove();
    }, 2800);
  }
})();

/* ===========================
   YEAR
   =========================== */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===========================
   TYPING EFFECT — hero badge
   (subtle letter-by-letter on load)
   =========================== */
(function initTyping() {
  const badge = $('.hero-badge');
  if (!badge) return;

  const text = badge.textContent.trim();
  badge.innerHTML = '<span class="badge-pulse"></span>';

  let i = 0;
  const typeNode = document.createTextNode('');
  badge.appendChild(typeNode);

  // Slight delay after page load
  setTimeout(() => {
    const iv = setInterval(() => {
      typeNode.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(iv);
    }, 42);
  }, 600);
})();

/* ===========================
   SMOOTH HOVER TILT on project cards
   =========================== */
(function initTilt() {
  if (window.innerWidth <= 768) return;

  $$('.proj-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const cy   = rect.top  + rect.height / 2;
      const rx   = ((e.clientY - cy) / rect.height) * 5;
      const ry   = -((e.clientX - cx) / rect.width)  * 5;
      card.style.transform = `translateY(-7px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.transition = 'transform 0.08s';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.35s ease';
    });
  });
})();

/* ===========================
   FADE-IN PAGE ON LOAD
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.45s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
