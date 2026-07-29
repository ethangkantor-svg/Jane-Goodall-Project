/* =========================================================================
   Westchester Youth Waterway Initiative — Site Scripts
   Two things only: the mobile nav toggle and the before/after gallery
   lightbox. Both are progressive enhancements — the site works fully
   without JavaScript; this just makes small screens and the gallery nicer.
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("primary-nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after a link is chosen (mobile).
    navList.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && navList.classList.contains("is-open")) {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Gallery lightbox -------------------------------------------------- */
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  var lightboxBody = lightbox.querySelector(".lightbox-inner");
  var closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(trigger) {
    var src = trigger.getAttribute("data-full");
    var alt = trigger.getAttribute("data-alt") || "";
    var caption = trigger.getAttribute("data-caption") || "";

    lightboxBody.innerHTML =
      '<img src="' + src + '" alt="' + alt.replace(/"/g, "&quot;") + '">' +
      (caption ? '<p class="lightbox-caption">' + caption + "</p>" : "");

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
  }

  document.querySelectorAll("[data-lightbox-trigger]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openLightbox(trigger);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      lightbox.close();
    });
  }

  // Click on the backdrop (outside the inner panel) closes the dialog.
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
})();
