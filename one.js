let h = 0;
let min = 0;
let sec = 0;
let millisec = 0;

function startwatch() {
  document.getElementById("resume").setAttribute("disabled", "true");
  document.getElementById("start").setAttribute("disabled", "true");
  watch = setInterval(() => {
    sec++;
    console.log(sec);
    document.getElementById("sec").innerHTML = `${sec} sec`;
    millisec = 0;
    if (sec == 60) {
      min++;
      document.getElementById("min").innerHTML = `${min} min`;
      sec = 0;
      if (min == 60) {
        h++;
        document.getElementById("h").innerHTML = `${h} h`;
        min = 0;
      }
    }
  }, 1000);
}
function pausewatch() {
  clearInterval(watch);
  document.getElementById("resume").removeAttribute("disabled", "true");
}
function resumewatch() {
  document.getElementById("pause").removeAttribute("disabled", "true");
  startwatch();
}
function clearwatch() {
  document.getElementById("start").removeAttribute("disabled", "true");
  document.getElementById("resume").removeAttribute("disabled", "true");
  let h = 0;
  let min = 0;
  let sec = 0;
  let millisec = 0;
  clearInterval(watch);
  document.getElementById("sec").innerHTML = `00 sec`;
  document.getElementById("min").innerHTML = `00 min`;
  document.getElementById("h").innerHTML = `00 h`;
  
}