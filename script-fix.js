const app=document.querySelector('.app');
const pages=[...document.querySelectorAll('.role-page')];
const dots=[...document.querySelectorAll('.dot')];
let pageIndex=0,startX=0,startY=0,startTime=0,moving=false,horizontalGesture=false;
function goToPage(index,instant=false){pageIndex=Math.max(0,Math.min(pages.length-1,index));app.style.transition=instant?'none':'transform .8s cubic-bezier(.2,.8,.2,1)';app.style.transform=`translate3d(${-pageIndex*100}vw,0,0)`;pages.forEach(p=>p.scrollTop=0);dots.forEach((d,i)=>d.classList.toggle('active',i===pageIndex));}
function onStart(x,y){startX=x;startY=y;startTime=performance.now();moving=true;horizontalGesture=false;}
function onMove(x,y,event){if(!moving)return;const dx=x-startX,dy=y-startY;if(Math.abs(dx)>12||Math.abs(dy)>12){horizontalGesture=Math.abs(dx)>Math.abs(dy)*1.15;if(horizontalGesture&&event)event.preventDefault();}}
function onEnd(x,y){if(!moving)return;moving=false;const dx=x-startX,dy=y-startY,dt=performance.now()-startTime;const horizontal=Math.abs(dx)>Math.abs(dy)*1.15;const deliberate=Math.abs(dx)>55||(Math.abs(dx)>30&&dt<260);if((horizontal||horizontalGesture)&&deliberate)goToPage(pageIndex+(dx<0?1:-1));horizontalGesture=false;}
window.addEventListener('touchstart',e=>{const t=e.changedTouches[0];onStart(t.clientX,t.clientY)},{passive:true});
window.addEventListener('touchmove',e=>{const t=e.changedTouches[0];onMove(t.clientX,t.clientY,e)},{passive:false});
window.addEventListener('touchend',e=>{const t=e.changedTouches[0];onEnd(t.clientX,t.clientY)},{passive:true});
window.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')onStart(e.clientX,e.clientY)});
window.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')onMove(e.clientX,e.clientY,e)});
window.addEventListener('pointerup',e=>{if(e.pointerType!=='touch')onEnd(e.clientX,e.clientY)});
dots.forEach((dot,i)=>dot.addEventListener('click',()=>goToPage(i)));
window.addEventListener('keydown',e=>{if(e.key==='ArrowRight')goToPage(pageIndex+1);if(e.key==='ArrowLeft')goToPage(pageIndex-1)});
window.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY)*1.5&&Math.abs(e.deltaX)>45){e.preventDefault();goToPage(pageIndex+(e.deltaX>0?1:-1));}},{passive:false});
goToPage(0,true);
