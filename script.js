// Smooth scroll for the three nav buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const targetId = button.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();