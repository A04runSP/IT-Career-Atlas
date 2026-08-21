const app = document.querySelector('.app');
const pages = [...document.querySelectorAll('.role-page')];
const dots = [...document.querySelectorAll('.dot')];
let pageIndex = 0;

Object.assign(app.style, {
  width: '100vw', minWidth: '100vw', overflowX: 'auto', overflowY: 'hidden',
  scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', transform: 'none',
  transition: 'none', touchAction: 'pan-x pan-y', scrollbarWidth: 'none'
});

pages.forEach(page => {
  page.style.scrollSnapAlign = 'start';
  page.style.touchAction = 'pan-x pan-y';
});

function setActive(index) {
  pageIndex = Math.max(0, Math.min(pages.length - 1, index));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === pageIndex));
}

function goToPage(index, instant = false) {
  const target = Math.max(0, Math.min(pages.length - 1, index));
  setActive(target);
  app.scrollTo({ left: target * app.clientWidth, top: 0, behavior: instant ? 'auto' : 'smooth' });
}

app.addEventListener('scroll', () => {
  const width = app.clientWidth || window.innerWidth;
  const index = Math.round(app.scrollLeft / width);
  if (index !== pageIndex) setActive(index);
}, { passive: true });

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
