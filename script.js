    
// ── CURSOR
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});

// ── NAV SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 50);
});

// ── TYPEWRITER
const roles = ['Desenvolvedor Web', 'Front-end Developer', 'Back-end Developer', 'Full Stack Dev'];
let ri = 0, ci = 0, del = false;
const tw = document.getElementById('typewriter');
function type() {
  const cur = roles[ri];
  if (!del) {
    tw.innerHTML = cur.slice(0, ci + 1) + '<span class="type-cursor">|</span>';
    ci++;
    if (ci === cur.length) { del = true; setTimeout(type, 1800); return; }
  } else {
    tw.innerHTML = cur.slice(0, ci - 1) + '<span class="type-cursor">|</span>';
    ci--;
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, del ? 60 : 100);
}
setTimeout(type, 1500);

// ── SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: .12 });
reveals.forEach(r => obs.observe(r));

// ── COUNT UP
const counters = document.querySelectorAll('.stat-num[data-target]');
const cObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = +e.target.dataset.target;
      let count = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        e.target.textContent = count + '+';
        if (count >= target) clearInterval(timer);
      }, 50);
      cObs.unobserve(e.target);
    }
  });
}, { threshold: .5 });
counters.forEach(c => cObs.observe(c));

// ── CAROUSEL
const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.project-card');
const totalCards = cards.length;
const visibleCards = () => window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3;
let currentIdx = 0;

function buildDots() {
  const dotsEl = document.getElementById('dots');
  dotsEl.innerHTML = '';
  const pages = totalCards - visibleCards() + 1;
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => { currentIdx = i; updateCarousel(); };
    dotsEl.appendChild(d);
  }
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 28;
  carousel.style.transform = `translateX(-${currentIdx * cardWidth}px)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentIdx));
  document.getElementById('prevBtn').disabled = currentIdx === 0;
  document.getElementById('nextBtn').disabled = currentIdx >= totalCards - visibleCards();
}

function moveCarousel(dir) {
  const max = totalCards - visibleCards();
  currentIdx = Math.max(0, Math.min(currentIdx + dir, max));
  updateCarousel();
}

buildDots();
updateCarousel();
window.addEventListener('resize', () => { buildDots(); updateCarousel(); });

// ── TOUCH SWIPE
let startX = 0;
carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
carousel.addEventListener('touchend', e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) moveCarousel(diff > 0 ? 1 : -1);
});

// ── FORM
function sendForm() {
  const btn = document.querySelector('.form-submit');
  btn.textContent = 'Enviando...';
  setTimeout(() => {
    btn.textContent = 'Mensagem enviada! ✓';
    btn.style.background = '#00c853';
    setTimeout(() => {
      btn.textContent = 'Enviar mensagem →';
      btn.style.background = '';
    }, 3000);
  }, 1200);
}

// ── HERO GLOW FOLLOW
const glow = document.querySelector('.hero-glow');
document.getElementById('hero').addEventListener('mousemove', e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  glow.style.left = x + '%';
  glow.style.top = y + '%';
});
