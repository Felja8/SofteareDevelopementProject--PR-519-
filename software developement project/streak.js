document.addEventListener('DOMContentLoaded', function() {
  const days = document.querySelectorAll('.day');

  // Load streak from local storage
  days.forEach(day => {
      const dayNumber = day.getAttribute('data-day');
      if (localStorage.getItem(`day-${dayNumber}`) === 'true') {
          day.classList.add('completed');
      }

      // Add click event to each day
      day.addEventListener('click', function() {
          day.classList.toggle('completed');
          // Save streak to local storage
          if (day.classList.contains('completed')) {
              localStorage.setItem(`day-${dayNumber}`, 'true');
          } else {
              localStorage.removeItem(`day-${dayNumber}`);
          }
      });
  });
});
