document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlElement = document.documentElement;
  
  // Get saved theme or default to 'auto'
  const savedTheme = localStorage.getItem('theme') || 'auto';
  
  // Set initial theme
  applyTheme(savedTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const currentTheme = localStorage.getItem('theme') || 'auto';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  });
  
  function applyTheme(theme) {
    if (theme === 'auto') {
      // Use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-color-scheme', 'dark');
        updateToggleIcon('☀️');
      } else {
        htmlElement.setAttribute('data-color-scheme', 'light');
        updateToggleIcon('🌙');
      }
    } else if (theme === 'dark') {
      htmlElement.setAttribute('data-color-scheme', 'dark');
      updateToggleIcon('☀️');
    } else {
      htmlElement.setAttribute('data-color-scheme', 'light');
      updateToggleIcon('🌙');
    }
  }
  
  function updateToggleIcon(icon) {
    themeToggle.textContent = icon;
  }
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const theme = localStorage.getItem('theme') || 'auto';
      if (theme === 'auto') {
        applyTheme('auto');
      }
    });
  }
});