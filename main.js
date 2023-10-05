const display = document.getElementById("display");

function updateWatch() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  display.textContent = `${hours - 12}:${minutes}:${seconds}`;
}

// Update the watch every second
setInterval(updateWatch, 1000);
