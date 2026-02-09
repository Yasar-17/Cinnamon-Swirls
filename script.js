// Minimal interactions for Cinnamon Swirls site
// - Mobile navigation toggle
// - Close mobile nav on link click
// - Simple image lightbox for gallery

(function () {
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const navIconOpen = document.getElementById('nav-icon-open');
  const navIconClose = document.getElementById('nav-icon-close');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('block');
      mobileNav.classList.toggle('hidden', isOpen);
      mobileNav.classList.toggle('block', !isOpen);

      navToggle.setAttribute('aria-expanded', String(!isOpen));

      if (navIconOpen && navIconClose) {
        navIconOpen.classList.toggle('hidden', !isOpen);
        navIconClose.classList.toggle('hidden', isOpen);
      }
    });

    // Close mobile menu when a link is clicked
    mobileNav.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.tagName === 'A') {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('block');
        navToggle.setAttribute('aria-expanded', 'false');
        if (navIconOpen && navIconClose) {
          navIconOpen.classList.remove('hidden');
          navIconClose.classList.add('hidden');
        }
      }
    });
  }

  // Simple lightbox for gallery images
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImage && lightboxClose) {
    const galleryButtons = document.querySelectorAll('[data-lightbox="image"]');

    galleryButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const fullSrc = btn.getAttribute('data-full');
        if (fullSrc) {
          lightboxImage.src = fullSrc;
          lightbox.classList.remove('hidden');
          lightbox.classList.add('flex');
          lightboxClose.focus();
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImage.src = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (!lightbox.classList.contains('hidden')) {
          closeLightbox();
        }
      }
    });
  }
})();

