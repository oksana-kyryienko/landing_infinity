function getTimeUntil(target) {
  const timeDifferenceInMillis = Date.parse(target) - Date.now();
  const minutes = Math.floor((timeDifferenceInMillis / 1000 / 60) % 60);
  const seconds = Math.floor((timeDifferenceInMillis / 1000) % 60);

  return {
    total: timeDifferenceInMillis,
    minutes,
    seconds,
  };
}

function initializeClock(clockId, target) {
  const clock = document.getElementById(clockId);
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  let timeInterval;

  function updateClock() {
    const timeDifferenceInMillis = getTimeUntil(target.toISOString());

    minutesSpan.innerHTML = (`0${timeDifferenceInMillis.minutes}`).slice(-2);
    secondsSpan.innerHTML = (`0${timeDifferenceInMillis.seconds}`).slice(-2);

    if (timeDifferenceInMillis.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  timeInterval = setInterval(updateClock, 1000);
}

const target = new Date(Date.now() + 10 * 60 * 1000);
initializeClock('count', target);
