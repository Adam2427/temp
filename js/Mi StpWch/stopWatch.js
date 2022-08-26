//Elements

var stMillSec2;
let msec2 = 0;
let msec1 = 0;
let sec = 1;
let mint = 0;
let start = false;
let arr = [];
let totalArr = [];
let total;
let i = 0;
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");
let millSec1 = document.getElementById("millSec-1");
let millSec2 = document.getElementById("millSec-2");
let btnPlay = document.querySelector(".btn-play");
let btnStop = document.querySelector(".btn-stop");
let btnFlag = document.querySelector(".btn-flag");

//start and stop the stopWatch function

btnPlay.addEventListener("click", () => {
  start = !start;

  if (start) {
    btnFlag.style.display = "block";
    btnPlay.classList.add("move");
    document.getElementById("img").src = "img/pause.png";
    stMillSec2 = setInterval(doMillSec2, 10);
  } else if (!start) {
    btnStop.style.display = "block";
    btnFlag.style.display = "none";

    doClearInterval();
  }
});

// to clear or stop or hold the stopwatch function

function doClearInterval() {
  document.getElementById("img").src = "img/play.png";
  clearInterval(stMillSec2);
}
function doMillSec2() {
  msec2 >= 10 ? (doMillSec1(), (msec2 = 0)) : msec2;

  millSec2.innerHTML = msec2;
  msec2++;
}
function doMillSec1() {
  msec1 >= 10 ? (doSeconds(), (msec1 = 0)) : msec1;

  millSec1.innerHTML = msec1;
  msec1++;
}
function doSeconds() {
  if (sec >= 60) {
    mint++;
    minute.innerHTML = String(mint).padStart(2, "0");

    sec = 0;
  }

  seconds.innerHTML = String(sec).padStart(2, "0");
  sec++;
}

//btn stop to reset the stopwatch function

btnStop.addEventListener("click", () => {
  btnStop.style.display = "none";
  btnPlay.classList.remove("move");
  msec1 = msec2 = mint = 0;

  sec = 1;
  millSec2.innerHTML = millSec1.innerHTML = 0;
  minute.innerHTML = seconds.innerHTML = "00";
  doClearInterval();
  document.querySelector(".displaylist-row").innerHTML = " ";
  i = 0;
  arr = [];
  totalArr = [];
  document.querySelector(".display").classList.remove("display-flag");
  document.querySelector(".display-list").style.display = "none";
});

//To flag the current timing and display the values

btnFlag.addEventListener("click", doFlag);

function doFlag() {
  document.querySelector(".display").classList.add("display-flag");
  document.querySelector(".display-list").style.display = "block";
  let result = `${String(mint).padStart(2, "0")}:${String(sec).padStart(
    2,
    "0"
  )}:${msec1 == 10 ? 0 : msec1}${msec2 == 10 ? 0 : msec2}  `;

  arr.push(result);
  if (arr.length >= 2) {
    let [i, j, k] = arr.at(-1).split(":");
    let [i1, j1, k1] = arr.at(-2).split(":");
    total = [
      String(i - i1).padStart(2, "0"),
      String(j - j1).padStart(2, "0"),
      String(k - k1).padStart(2, "0"),
    ]

      .join(":")
      .replace(/-/g, "");
    totalArr.push(total);

    // console.log(total);
  }
  //display the list
  html = ` <div class="result--row">
        <span> <img class='flag-grey' src='img/flag-grey.png'>${(
          i +
          1 +
          ""
        ).padStart(2, "0")}</span>

       <span>+ ${totalArr.length >= 1 ? totalArr[i - 1] : arr[0]}</span>
      <span class='font-clr'>${arr[i]}</span>
    </div>`;

  document
    .querySelector(".displaylist-row")
    .insertAdjacentHTML("afterbegin", html);
  i++;
}
