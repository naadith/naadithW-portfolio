// Contact form validation
const form = document.getElementById('contactForm');
const msg  = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      msg.className = 'form-message error';
      msg.textContent = 'Please fill in all fields.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.className = 'form-message error';
      msg.textContent = 'Please enter a valid email address.';
      return;
    }

    msg.className = 'form-message success';
    msg.textContent = 'Thanks! Your message has been recorded.';
    form.reset();
  });
}
