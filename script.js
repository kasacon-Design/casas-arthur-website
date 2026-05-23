// GSAP initialization
gsap.registerPlugin(ScrollTrigger);

// NAVBAR SCROLL BEHAVIOR
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// MOBILE MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// SMOOTH SCROLL ANIMATION
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('[data-animate]');
      children.forEach((child, index) => {
        gsap.to(child, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: index * 0.15,
          ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const sections = document.querySelectorAll('.manifesto, .science-data, .services, .materials, .journal, .founder-narrative');
sections.forEach(section => {
  const children = section.querySelectorAll('h2, h3, p, span, .service-card, .science-card, .material-card, .journal-card');
  children.forEach(child => child.setAttribute('data-animate', 'true'));
  children.forEach(child => {
    gsap.set(child, { opacity: 0, y: 28 });
  });
  observer.observe(section);
});

// QUIZ FORM VALIDATION
const quizForm = document.getElementById('quizForm');
if (quizForm) {
  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(err => err.classList.remove('show'));
    
    let isValid = true;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    if (!q1) {
      document.getElementById('error-q1').textContent = 'Por favor, selecione uma opção';
      document.getElementById('error-q1').classList.add('show');
      isValid = false;
    }
    if (!q2) {
      document.getElementById('error-q2').textContent = 'Por favor, selecione uma opção';
      document.getElementById('error-q2').classList.add('show');
      isValid = false;
    }
    if (!q3) {
      document.getElementById('error-q3').textContent = 'Por favor, selecione uma opção';
      document.getElementById('error-q3').classList.add('show');
      isValid = false;
    }
    
    if (isValid) {
      // Submit form to Formspree
      this.submit();
    }
  });
}

// SCROLL TRIGGER ANIMATIONS
gsap.utils.toArray('.service-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 28,
    duration: 0.9,
    ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });
});

// PAGE LOAD ANIMATION
window.addEventListener('load', () => {
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    scrollHint.style.opacity = '1';
  }
});