// Show initials if the profile photo is missing
const img = document.getElementById('profileImg');
const fallback = document.getElementById('photoFallback');
img.addEventListener('error', function () {
  img.style.display = 'none';
  fallback.style.display = 'flex';
});

// Contact form: opens the visitor's email app with the message filled in
const form = document.getElementById('contactForm');
const status = document.getElementById('cf-status');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(message + '\n\n' + name + ' (' + email + ')');
  window.location.href = 'mailto:harshanandini2@gmail.com?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your email app...';
});

// Highlight the nav link for the section currently in view
(function () {
  const links = Array.from(document.querySelectorAll('.navlinks a'));
  const sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function setActive() {
    const marker = window.scrollY + 120;
    let current = sections[0];
    sections.forEach(function (s) {
      if (s.offsetTop <= marker) current = s;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('resize', setActive);
  setActive();
})();