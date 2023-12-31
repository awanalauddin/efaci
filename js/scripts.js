function startTimer(duration, display) {
  var timer = duration, hours, minutes, seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var launchDate = new Date('July 30, 2023 00:00:00');
  var currentDate = new Date();
  var timeDifference = launchDate - currentDate; // Difference in milliseconds

  var duration = Math.ceil(timeDifference / 1000); // Convert to seconds and round up
  var display = document.getElementById('timer');
  startTimer(duration, display);
};
