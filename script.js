const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}


const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(enquiryForm);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const company = formData.get('company') || '';
    const service = formData.get('service') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent('New Sedi.P website enquiry');
    const body = encodeURIComponent(
      `New Sedi.P Enquiry\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Company: ${company}\n` +
      `Service Needed: ${service}\n\n` +
      `Project Message:\n${message}`
    );

    window.location.href = `mailto:Lesediphaltse@gmail.com?subject=${subject}&body=${body}`;
  });
}
