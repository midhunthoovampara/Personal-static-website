// Initialize AOS Animation Library
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Year Update
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();

  // Dark Mode Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
  }

  if(toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });
  }

  function updateIcon(theme) {
    if(toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Simple Typing Effect for Hero
  const typingElement = document.querySelector('.leadmuted');
  if (typingElement) {
    const text = "A passionate web developer creating dynamic, accessible, and user-friendly web experiences. I design clean interfaces and build scalable backends.";
    // Let's just animate the opacity or something simple, creating a full typing loop might be annoying for this long text.
    // Instead, let's create a typing effect for the SUBTITLE under the name "Web Developer..."
    
    const brandSub = document.querySelector('.muted[style*="font-size:12px"]');
    if(brandSub) {
      // Optional: Add some flair here if requested later
    }
  }
});
