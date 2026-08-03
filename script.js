const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('#estimate-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Free estimate request from ${data.get('name') || 'website visitor'}`);
    const body = encodeURIComponent(
`Name: ${data.get('name') || ''}
Phone: ${data.get('phone') || ''}
Email: ${data.get('email') || ''}
Project location: ${data.get('location') || ''}
Project type: ${data.get('project') || ''}

Project details:
${data.get('details') || ''}`
    );
    window.location.href = `mailto:matt64studebaker@gmail.com?subject=${subject}&body=${body}`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
