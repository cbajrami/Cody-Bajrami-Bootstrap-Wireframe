document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.swatch').forEach(function (el) {
  el.addEventListener('click', function(){
    const hex = el.getAttribute('data-hex');
    if (!hex) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hex).then(function(){
        alert('Copied: ' + hex);
      }, function(){
        prompt('Copy this color:', hex);
      });
    } else {
      prompt('Copy this color:', hex);
    }
  });
});

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Search coming soon!');
  });
}

(function(){
  const toggleBtn = document.getElementById('themeToggle');


  const saved = localStorage.getItem('xentron-theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = 'Light Mode';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('xentron-theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
})();

document.querySelector('.toggle-theme-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});


