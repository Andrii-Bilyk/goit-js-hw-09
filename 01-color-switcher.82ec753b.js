!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.body;function n(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}function r(d){d.target===e?(e.disabled=!0,a.disabled=!1,t=setInterval(n,1e3)):d.target===a&&(e.disabled=!1,a.disabled=!0,clearInterval(t))}e.addEventListener("click",r),a.addEventListener("click",r)}();
//# sourceMappingURL=01-color-switcher.82ec753b.js.map
