(()=>{function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var r;(function(r){if(Array.isArray(r))return t(r)}(r=document.querySelectorAll(".page-nav__day"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".page-nav__day_chosen").classList.toggle("page-nav__day_chosen"),t.classList.toggle("page-nav__day_chosen")}))}))})();