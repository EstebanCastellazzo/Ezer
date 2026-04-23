/* ═══════════════════════════════════════════════════
   EZER THEME — JavaScript
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {

  /* ─── Mobile Menu ─── */
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menuClose = document.querySelector('.mobile-menu__close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('is-open');
      menuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      menuOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
  }

  /* ─── Accordion ─── */
  document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const item = this.closest('.accordion-item');
      const wasOpen = item.classList.contains('is-open');
      
      // Close all
      document.querySelectorAll('.accordion-item').forEach(function(i) {
        i.classList.remove('is-open');
      });
      
      // Toggle clicked
      if (!wasOpen) {
        item.classList.add('is-open');
      }
    });
  });

  /* ─── Fade In on Scroll ─── */
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all
    fadeElements.forEach(function(el) {
      el.classList.add('is-visible');
    });
  }

  /* ─── Quantity Selector ─── */
  document.querySelectorAll('.qty-selector').forEach(function(selector) {
    const minus = selector.querySelector('.qty-minus');
    const plus = selector.querySelector('.qty-plus');
    const value = selector.querySelector('.qty-selector__value');
    const input = selector.closest('form')?.querySelector('input[name="quantity"]');

    if (minus && plus && value) {
      minus.addEventListener('click', function() {
        let val = parseInt(value.textContent) || 1;
        if (val > 1) {
          val--;
          value.textContent = val;
          if (input) input.value = val;
        }
      });
      plus.addEventListener('click', function() {
        let val = parseInt(value.textContent) || 1;
        val++;
        value.textContent = val;
        if (input) input.value = val;
      });
    }
  });

});
