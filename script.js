// ==========================================
// PORTFOLIO — Doou Franc Manassé
// Fichier : script.js
// ==========================================


// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));


// ── NAV ACTIVE + BOUTON RETOUR EN HAUT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--text)'
      : '';
  });

  // Affiche le bouton "retour en haut" après 400px de scroll
  const btnTop = document.getElementById('btn-top');
  if (btnTop) {
    btnTop.classList.toggle('visible', window.scrollY > 400);
  }
});


// ── EFFET DE FRAPPE (TYPING EFFECT) ──
const typingEl = document.getElementById('typing-role');
if (typingEl) {
  const words = [
    'Développeur Web',
    'Passionné d\'Algorithmique',
    'Concepteur de Bases de Données',
    'Étudiant ETIC Abidjan',
    'Co-fondateur Agence Digitale'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}


// ── ANIMATION BARRES DE COMPÉTENCES ──
const skillBars = document.querySelectorAll('.skill-bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const level = bar.getAttribute('data-level');
      setTimeout(() => { bar.style.width = level + '%'; }, 200);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => barObserver.observe(bar));


// ── FORMULAIRE DE CONTACT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;

  btn.innerHTML = '✓ Message envoyé !';
  btn.style.background = 'var(--accent3)';
  btn.style.color = '#000';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}


// ── RETOUR EN HAUT ──
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}