document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start-button');
  const pomodoroPage1 = document.getElementById('pomodoro-page1');
  const timerPage = document.getElementById('timer-page');
  const timerElement = document.getElementById('timer');

  startButton.addEventListener('click', function() {
      pomodoroPage1.style.display = 'none';
      timerPage.style.display = 'block';
      
      let time = 45 * 60; // 45 minutes in seconds
      let timerInterval = setInterval(function() {
          const minutes = Math.floor(time / 60);
          const seconds = time % 60;
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          time--;

          if (time < 0) {
              clearInterval(timerInterval);
              alert("End of study session! Good job!");
              pomodoroPage1.style.display = 'block';
              timerPage.style.display = 'none';
          }
      }, 1000);
  });
});

