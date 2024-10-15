function time() {
  let date = new Date();
  let hours = document.getElementById("hours");
  hours.innerHTML = date.getHours();
  let minutes = document.getElementById("minutes");
  minutes.innerHTML = date.getMinutes();
  let seconds = document.getElementById("seconds");
  seconds.innerHTML = date.getSeconds();
}
setInterval(() => {
  time();
}, 1000);
