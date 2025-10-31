// Load the header HTML
(async function() {
  try {
    const res = await fetch('includes/header.html');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.outerHTML = html;
    } else {
      // insert at top of body if no placeholder
      document.body.insertAdjacentHTML('afterbegin', html);
    }

    // Attach mobile menu behavior
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
      // Close when a link in the mobile menu is clicked
      document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  } catch (err) {
    console.error('Failed to load header include:', err);
  }
})();
