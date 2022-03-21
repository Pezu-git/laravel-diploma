(()=>{var e,t,n,a,r,o;Array.from(document.querySelectorAll(".conf-step__header")).forEach((function(e){return e.addEventListener("click",(function(){e.classList.toggle("conf-step__header_closed"),e.classList.toggle("conf-step__header_opened")}))})),e=Array.from(document.getElementsByName("prices-hall")),t=document.getElementById("standartPrice"),n=document.getElementById("vipPrice"),e.forEach((function(e){return e.addEventListener("click",(function(a){t.value="",n.value="",$.ajax({url:"/show_price",type:"GET",data:{hall_id:e.value},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(a){a?(t.value=a.find((function(e){return"standart"===e.status})).price,n.value=a.find((function(e){return"vip"===e.status})).price):$.ajax({url:"/save_price",type:"POST",data:{result:[{hall_id:e.value,status:"standart",price:100},{hall_id:e.value,status:"vip",price:200}]},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){t.value=100,n.value=200}})}}),$("#savePrice").click((function(){e.checked&&$.ajax({url:"/save_price",type:"POST",data:{result:[{hall_id:e.value,status:"standart",price:t.value},{hall_id:e.value,status:"vip",price:n.value}]},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){location.reload()}})}))}))})),(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var t,n=Array.from(document.querySelectorAll("[data-delHall-id]")),a=document.getElementById("deletePopup"),r=document.getElementById("delModalDissmis"),o=document.getElementById("hallAddPopupShow"),c=document.getElementById("addPopup"),l=document.getElementById("addModalDissmis"),i=function(t){if(Array.isArray(t))return e(t)}(t=document.querySelectorAll(".hallDeleteList"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=document.querySelector(".popupHallName");r.addEventListener("click",(function(e){e.preventDefault(),a.classList.toggle("active")})),o.addEventListener("click",(function(){c.classList.toggle("active")})),l.addEventListener("click",(function(e){e.preventDefault(),c.classList.toggle("active")}));for(var u=function(e){n[e].addEventListener("click",(function(){a.classList.toggle("active");var t=n[e].getAttribute("data-delHall-id");console.log(i[e].textContent),s.textContent=i[e].textContent,$(document).ready((function(){$("#hallDeleteForm").submit((function(e){e.preventDefault(),$.ajax({url:"/delete_hall",type:"POST",data:{hall_id:t},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){location.reload()}})}))}))}))},d=0;d<n.length;d++)u(d);$(document).ready((function(){$("#hallAddForm").submit((function(e){e.preventDefault(),$hall_name=$("#hallNameAdd").val(),$.ajax({url:"/hall_add",type:"POST",data:{name:$hall_name},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){$.ajax({url:"/hall_conf",type:"POST",data:{hall_id:e.hall_id},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(){}}),location.reload()}})}))}))})(),(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}for(var n=document.getElementById("input_rows_count"),a=document.getElementById("input_places_count"),r=document.getElementsByName("chairs-hall"),o=Array.from(document.querySelectorAll(".conf-step__hall")),c=e(document.querySelectorAll(".conf-step__radio.hide")),l=e(document.querySelectorAll(".conf-step__hall-wrapper")),i=function(){Array.from(document.querySelectorAll(".conf-step__row  .conf-step__chair")).forEach((function(e){return e.addEventListener("click",(function(){e.classList.contains("conf-step__chair_standart")?(e.classList.toggle("conf-step__chair_standart"),e.classList.toggle("conf-step__chair_vip")):e.classList.contains("conf-step__chair_vip")?(e.classList.toggle("conf-step__chair_vip"),e.classList.toggle("conf-step__chair_disabled")):e.classList.contains("conf-step__chair_disabled")&&(e.classList.toggle("conf-step__chair_disabled"),e.classList.toggle("conf-step__chair_standart"))}))}))},s=function(t){r[t].addEventListener("click",(function(){o.forEach((function(e){e.style.display="none"})),o[t].style.display="block";var r=e(o[t].querySelectorAll(".conf-step__row"));n.value=r.length;var c=e(r[0].querySelectorAll(".conf-step__chair"));a.value=c.length,n.oninput=function(){n.value>20&&(n.value=20),l[t].innerHTML="";for(var r=0;r<Number(n.value);r++)l[t].insertAdjacentHTML("afterBegin",'\n             <div class="conf-step__row">\n          </div>\n         ');e(l[t].querySelectorAll(".conf-step__row")).forEach((function(e){for(var t=0;t<Number(a.value);t++)e.insertAdjacentHTML("afterBegin",'<span class="conf-step__chair conf-step__chair_standart"></span>')})),i()},a.oninput=function(){a.value>20&&(a.value=20),l[t].innerHTML="";for(var r=0;r<Number(n.value);r++)l[t].insertAdjacentHTML("afterBegin",'\n           <div class="conf-step__row">\n        </div>\n       ');e(l[t].querySelectorAll(".conf-step__row")).forEach((function(e){for(var t=0;t<Number(a.value);t++)e.insertAdjacentHTML("afterBegin",'<span class="conf-step__chair conf-step__chair_standart"></span>')})),i()}}))},u=0;u<r.length;u++)s(u);$(document).ready((function(){$("#hallConfSaveBtn").click((function(t){var r={rows:Number(n.value),cols:Number(a.value)},l=[];o.forEach((function(t){if("block"===t.style.display){var n=e(t.querySelectorAll(".conf-step__chair")),a=e(t.querySelectorAll(".conf-step__row")),o=e(a[0].querySelectorAll(".conf-step__chair"));c.forEach((function(e){if(e.checked){for(var t=0;t<a.length;t++)for(var r=0;r<o.length;r++)l.push({hall_id:e.value,row_num:t,seat_num:r,status:"standart"});for(var c=0;c<n.length;c++)l[c].status=n[c].className.slice(34)}})),$.ajax({url:"/hall_chair",type:"POST",data:{result:l,hallConf:r},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){}})}}))}))})),i()})(),a=document.getElementById("addMovie"),r=document.getElementById("addMoviePopup"),o=document.getElementById("movieModalDissmis"),a.addEventListener("click",(function(){r.classList.toggle("active")})),o.addEventListener("click",(function(e){e.preventDefault(),r.classList.toggle("active")})),$(document).ready((function(){$("#addMovieForm").submit((function(e){var t=$("#addMovieInput").val(),n=$("#addMovieDurationInput").val(),a=$("#addMovieTextarea").val(),o=$("#addMovieCountryInput").val();e.preventDefault(),$.ajax({url:"/add_movie",type:"POST",data:{title:t,duration:n,description:a,country:o},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(){r.classList.toggle("active"),location.reload()}})}))})),$(document).ready((function(){$("#movie_delete_btn").click((function(){var e=$("#seance_movieName").val();$.ajax({url:"/delete_movie",type:"POST",data:{title:e},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(){location.reload()}})}))})),(()=>{for(var e=Array.from(document.querySelectorAll(".conf-step__button-regular")),t=0;t<e.length;t++)e[t].addEventListener("click",(function(e){e.preventDefault(),location.reload(!0)}))})(),(()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var t,n=function(t){if(Array.isArray(t))return e(t)}(t=document.getElementsByName("startOfSales-hall"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=document.querySelector(".open-hall"),r=document.querySelector(".startOfSalesBtn");n.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("is_active")&&(a.textContent="Зал готов к открытию:",a.style.color="rgb(0,136,0)",r.removeAttribute("disabled")),e.classList.contains("is_active")||(r.setAttribute("disabled",!0),a.textContent="Нет сеансов",a.style.color="rgb(255,0,0)"),1==e.getAttribute("data-active")?(a.textContent="Продажа билетов открыта:",r.textContent="Закрыть продажу билетов"):0==e.getAttribute("data-active")&&(r.textContent="Открыть продажу билетов")})),$(document).ready((function(){$("#startOfSalesBtn").click((function(t){if(e.checked){var n=$(e).val();$.ajax({url:"/start_of_sales",type:"POST",data:{id:n},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){r.textContent=e[0],a.textContent=e[1]}})}}))}))}))})(),(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var n=e(document.querySelectorAll(".conf-step__seances-movie")),a=document.getElementById("delShowtimePopup"),r=document.querySelector(".popupMovieName"),o=document.getElementById("delShowtimeModalDissmis"),c=document.getElementById("showtimeModalDissmis"),l=e(document.querySelectorAll(".conf-step__movie")),i=document.getElementById("addShowtimePopup"),s=document.querySelector(".movie_name");n.forEach((function(e){e.addEventListener("click",(function(){a.classList.toggle("active");var t=e.querySelector(".conf-step__seances-movie-title").textContent,n=e.querySelector(".conf-step__seances-movie-start").textContent,o=e.getAttribute("data-hallSchedule-id");r.textContent=t,$("#delete_hall_shedule").submit((function(){$.ajax({url:"/delete_hall_shedule",type:"POST",data:{movieName:t,movieTime:n,hall_id:o},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(){location.reload()}})}))}))})),o.addEventListener("click",(function(e){e.preventDefault(),a.classList.toggle("active")})),l.forEach((function(e){e.addEventListener("click",(function(){console.log(e);var t=e.querySelector(".conf-step__movie-title");i.classList.toggle("active"),s.value=t.textContent}))})),c.addEventListener("click",(function(e){e.preventDefault(),i.classList.toggle("active")})),$(document).ready((function(){$("#seanceAddForm").submit((function(e){var t=$("#seance_movieName").val(),n=$("#seance_hallName option:selected").val(),a=$("#seance_startTime").val();$.ajax({url:"/add_movie_schedule",type:"POST",data:{hall_id:n,movie_name:t,start_time:a},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){location.reload(),e&&alert(e)}})}))}))})()})();