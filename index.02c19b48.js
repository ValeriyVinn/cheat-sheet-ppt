const e=document.getElementsByClassName("accordion");let t;for(t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");const e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var o=n[t];o.classList.contains("show")&&o.classList.remove("show")}}};let n=()=>{let e=document.getElementById("progress"),t=(document.getElementById("progress-value"),document.documentElement.scrollTop),n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=Math.round(100*t/n);e.style.display=t>100?"grid":"none",e.addEventListener("click",(()=>{document.documentElement.scrollTop=0})),e.style.background=`conic-gradient(cornflowerblue ${o}%, aliceblue ${o}%)`};window.onscroll=n,window.onload=n;const o={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop")};function c(){window.removeEventListener("keydown",l),document.body.classList.remove("show-modal")}function l(e){"Escape"===e.code&&c()}o.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",l),document.body.classList.add("show-modal")})),o.closeModalBtn.addEventListener("click",c),o.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&c()}));
//# sourceMappingURL=index.02c19b48.js.map