const app = document.querySelector('.app');
const pages = [...document.querySelectorAll('.role-page')];
const dots = [...document.querySelectorAll('.dot')];
let pageIndex = 0;
let startX = 0, startY = 0, startTime = 0;
let tracking = false, lockedAxis = null;

function goToPage(index, instant = false) {
  pageIndex = Math.max(0, Math.min(pages.length - 1, index));
  app.style.transition = instant ? 'none' : 'transform .75s cubic-bezier(.2,.8,.2,1)';
  app.style.transform = `translate3d(${-pageIndex * 100}vw,0,0)`;
  pages.forEach((page, i) => { if (i !== pageIndex) page.scrollTop = 0; });
  dots.forEach((dot, i) => dot.classList.toggle('active', i === pageIndex));
}

function startGesture(x, y) {
  startX = x; startY = y; startTime = performance.now();
  tracking = true; lockedAxis = null;
}

function moveGesture(x, y, event) {
  if (!tracking) return;
  const dx = x - startX, dy = y - startY;
  if (!lockedAxis && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
    lockedAxis = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
  }
  if (lockedAxis === 'horizontal' && event.cancelable) event.preventDefault();
}

function endGesture(x, y) {
  if (!tracking) return;
  tracking = false;
  const dx = x - startX, dy = y - startY;
  const duration = performance.now() - startTime;
  const horizontal = Math.abs(dx) > Math.abs(dy) * 1.15;
  const enough = Math.abs(dx) >= 45 || (Math.abs(dx) >= 30 && duration <= 350);
  if (lockedAxis === 'horizontal' && horizontal && enough) {
    goToPage(pageIndex + (dx < 0 ? 1 : -1));
  }
  lockedAxis = null;
}

window.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  startGesture(e.clientX, e.clientY);
});
window.addEventListener('pointermove', e => moveGesture(e.clientX, e.clientY, e));
window.addEventListener('pointerup', e => endGesture(e.clientX, e.clientY));
window.addEventListener('pointercancel', () => { tracking = false; lockedAxis = null; });

// Touch fallback.
window.addEventListener('touchstart', e => {
  const t = e.changedTouches[0]; startGesture(t.clientX, t.clientY);
}, { passive: true });
window.addEventListener('touchmove', e => {
  const t = e.changedTouches[0]; moveGesture(t.clientX, t.clientY, e);
}, { passive: false });
window.addEventListener('touchend', e => {
  const t = e.changedTouches[0]; endGesture(t.clientX, t.clientY);
}, { passive: true });

dots.forEach((dot, i) => dot.addEventListener('click', () => goToPage(i)));
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goToPage(pageIndex + 1);
  if (e.key === 'ArrowLeft') goToPage(pageIndex - 1);
});
window.addEventListener('wheel', e => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.35 && Math.abs(e.deltaX) > 35) {
    e.preventDefault();
    goToPage(pageIndex + (e.deltaX > 0 ? 1 : -1));
  }
}, { passive: false });

goToPage(0, true);
