let i = 59;
let j = 1;
let k = 2;
let st;

let minute1 = document.getElementById("minute-1");
let seconds1 = document.getElementById("seconds-1");
let hour1 = document.getElementById("hour-1");
let minute2 = document.getElementById("minute-2");
let seconds2 = document.getElementById("seconds-2");
let hour2 = document.getElementById("hour-2");

st = setInterval(doStart, 1000);
function doStart() {
  if (i < 0) {
    if (j <= 0) {
      j = 59;
      k--;
      if (k < 0) {
        clearInterval(st);
        setTimeout(doStop, 10);
      } else {
        hour1.textContent = String(k).padStart(2, "0").slice(0, 1);
        hour2.textContent = String(k).padStart(2, "0").slice(-1);
      }
    }

    // minute.textContent = String(j).padStart(2, "0");
    minute1.textContent = String(j).padStart(2, "0").slice(0, 1);
    minute2.textContent = String(j).padStart(2, "0").slice(-1);
    j--;
    i = 59;
  }

  // seconds.textContent = String(i).padStart(2, "0");
  seconds1.textContent = String(i).padStart(2, "0").slice(0, 1);
  seconds2.textContent = String(i).padStart(2, "0").slice(-1);

  i--;
}

function doStop() {
  hour1.textContent = 0;
  minute1.textContent = 0;
  seconds1.textContent = 0;
  hour2.textContent = 0;
  minute2.textContent = 0;
  seconds2.textContent = 0;
}
// clearInterval(st);
