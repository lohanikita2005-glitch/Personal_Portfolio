// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form alert
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});
