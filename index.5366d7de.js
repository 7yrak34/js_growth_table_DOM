function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector(".field tbody"),n=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),c=document.querySelector(".remove-column"),d=r.rows.length,l=r.rows[0].children.length;function u(){d=r.rows.length,l=r.rows[0].children.length,10===d?n.setAttribute("disabled",!0):n.removeAttribute("disabled"),2===d?o.setAttribute("disabled",!0):o.removeAttribute("disabled"),10===l?i.setAttribute("disabled",!0):i.removeAttribute("disabled"),2===l?c.setAttribute("disabled",!0):c.removeAttribute("disabled")}n.addEventListener("click",function(){if(d<10){var e=r.rows[0].cloneNode(!0);r.append(e),u()}}),o.addEventListener("click",function(){d>2&&(r.rows[r.rows.length-1].remove(),u())}),i.addEventListener("click",function(){l<10&&(t(r.rows).forEach(function(e){var t=document.createElement("td");e.append(t)}),u())}),c.addEventListener("click",function(){l>2&&(t(r.rows).forEach(function(e){e.lastElementChild.remove()}),u())});
//# sourceMappingURL=index.5366d7de.js.map
