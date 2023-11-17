function showPopup() {
  document.getElementById('popup').classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup').classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}

function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('mouseout', (e) => {
  if (e.clientY <= 0 && !document.getElementById('popup').style.display) {
    showPopup();
  }
});

document.getElementById('close-popup').addEventListener('click', closePopup);

document.getElementById('to-form').addEventListener('click', () => {
  closePopup();
  scrollToForm();
});

setTimeout(showPopup, 20000);
