// JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    document.getElementById('contact-form').reset();
  });
  