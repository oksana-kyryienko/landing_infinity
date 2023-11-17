const currentDate = new Date();

currentDate.setDate(currentDate.getDate() - 5);

const formattedDate = currentDate.toLocaleDateString('uk-UA', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

document.getElementById('date-placeholder').textContent = `Опубліковано: ${formattedDate}`;
