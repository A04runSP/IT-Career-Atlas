const app = document.querySelector('.app');
const pages = [...document.querySelectorAll('.role-page')];
const dots = [...document.querySelectorAll('.dot')];
let pageIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
let touchTracking = false;
let swipeLocked = false;

if (app) {
  Object.assign(app.style, {
    width: '100vw',
    minWidth: '100vw',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollSnapType: 'x mandatory',
    scrollBehavior: 'smooth',
    transform: 'none',
    transition: 'none',
    touchAction: 'pan-y',
    scrollbarWidth: 'none'
  });
}

pages.forEach(page => {
  page.style.scrollSnapAlign = 'start';
  page.style.touchAction = 'pan-y';
});

function setActive(index) {
  pageIndex = Math.max(0, Math.min(pages.length - 1, index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === pageIndex));
}

function goToPage(index, instant = false) {
  const target = Math.max(0, Math.min(pages.length - 1, index));
  setActive(target);
  if (!app) return;
  const width = window.innerWidth;
  app.scrollTo({
    left: target * width,
    top: 0,
    behavior: instant ? 'auto' : 'smooth'
  });
}

// Explicit mobile swipe navigation.
// Vertical scrolling remains native; a gesture becomes a page swipe only
// when horizontal movement is clearly dominant.
if (app) {
  app.addEventListener('touchstart', event => {
    if (!event.touches.length) return;
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchTracking = true;
    swipeLocked = false;
  }, { passive: true });

  app.addEventListener('touchmove', event => {
    if (!touchTracking || !event.touches.length) return;
    const touch = event.touches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (!swipeLocked && Math.abs(dx) > 18 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      swipeLocked = true;
      event.preventDefault();
    }

    if (swipeLocked) event.preventDefault();
  }, { passive: false });

  app.addEventListener('touchend', event => {
    if (!touchTracking) return;
    touchTracking = false;

    const touch = event.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    const horizontal = Math.abs(dx) > Math.abs(dy) * 1.15;
    const distance = Math.abs(dx);

    if (horizontal && distance >= 45) {
      // Finger moves left -> next page. Finger moves right -> previous page.
      goToPage(pageIndex + (dx < 0 ? 1 : -1));
    }

    swipeLocked = false;
  }, { passive: true });

  app.addEventListener('touchcancel', () => {
    touchTracking = false;
    swipeLocked = false;
  }, { passive: true });
}

if (app) {
  app.addEventListener('scroll', () => {
    const width = window.innerWidth || 1;
    const index = Math.round(app.scrollLeft / width);
    if (index !== pageIndex) setActive(index);
  }, { passive: true });
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goToPage(i)));

window.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') goToPage(pageIndex + 1);
  if (event.key === 'ArrowLeft') goToPage(pageIndex - 1);
});

window.addEventListener('wheel', event => {
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY) * 1.35 && Math.abs(event.deltaX) > 35) {
    event.preventDefault();
    goToPage(pageIndex + (event.deltaX > 0 ? 1 : -1));
  }
}, { passive: false });

goToPage(0, true);
