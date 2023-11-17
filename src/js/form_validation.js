document.querySelector('.form__btn').addEventListener('click', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value;
  const phoneInput = document.getElementById('phone').value;
  const form = document.querySelector('.form');

  if (nameInput.trim() === '' || phoneInput.trim() === '') {
    // eslint-disable-next-line no-alert
    alert('Пожалуйста, заполните все обязательные поля.');
  } else {
    // eslint-disable-next-line no-alert
    alert('Форма успешно отправлена!');
    form.reset();
  }
});
