var stMillSec2;
let msec2 = 0;
let msec1 = 0;
let sec = 1;
let mint = 0;
let start = false;
let arr = [];
let totalArr = [];
let total;
let index = 0;
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");
let millSec1 = document.getElementById("millSec-1");
let millSec2 = document.getElementById("millSec-2");
let btnPlay = document.querySelector(".btn-play");
let btnStop = document.querySelector(".btn-stop");
let btnFlag = document.querySelector(".btn-flag");
let display = document.querySelector(".display");
let displaylist = document.querySelector(".display-list");

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
  //clear display lists
  index = 0;
  arr = [];
  totalArr = [];
  display.classList.remove("display-flag");
  displaylist.style.display = "none";
});

//To flag the current timing or display lists

btnFlag.addEventListener("click", doFlag);

function doFlag() {
  display.classList.add("display-flag");
  displaylist.style.display = "block";
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
  }
  //display the lists

  let listValues = ` <div class="result--row">
         <span> <img class='flag-grey' src='img/flag-grey.png'>${(
           index +
           1 +
           ""
         ).padStart(2, "0")}</span>

       <span>+ ${totalArr.length >= 1 ? totalArr[index - 1] : arr[0]}</span>
      <span class='font-clr'>${arr[index]}</span>
    </div>`;

  document
    .querySelector(".displaylist-row")
    .insertAdjacentHTML("afterbegin", listValues);
  index++;
}

/*
//elements
var stMillSec2;
let i = 0;
let j = 0;
let k = 1;
let mint = 0;
let start = false;
let minute = document.getElementById("minute");
let seconds = document.getElementById("second");
let millSec1 = document.getElementById("millSec-1");
let millSec2 = document.getElementById("millSec-2");
let btnPlay = document.querySelector(".btn-2");
let btnReset = document.querySelector(".btn-1");

//start the stopWatch function

btnPlay.addEventListener("click", () => {
  start = !start;
  btnReset.style.display = "block";

  if (start) {
    btnPlay.classList.add("move");
    document.getElementById("img").src = "img/pause.png";
    stMillSec2 = setInterval(doMillSec2, 10);
  } else if (!start) {
    doClearInterval();
  }
});

//stop or hold the stopWatch

function doClearInterval() {
  document.getElementById("img").src = "img/play.png";
  clearInterval(stMillSec2);
}

//Start the MilliSecond in stopWatch

function doMillSec2() {
  i >= 10 ? (doMillSec1(), (i = 0)) : i;
  millSec2.innerHTML = i;
  i++;
}

function doMillSec1() {
  j >= 10 ? (doSeconds(), (j = 0)) : j;

  millSec1.innerHTML = j;
  j++;
}
function doSeconds() {
  if (k >= 10) {
    k = 0;
    mint++;
    minute.innerHTML = String(mint).padStart(2, "0");
  }

  seconds.innerHTML = String(k).padStart(2, "0");
  k++;
}

//Reset the stopWatch

btnReset.addEventListener("click", () => {
  btnReset.style.display = "none";
  btnPlay.classList.remove("move");
  i = 0;
  j = 0;
  k = 1;
  mint = 0;
  millSec2.innerHTML = millSec1.innerHTML = 0;
  minute.innerHTML = seconds.innerHTML = "00";
  doClearInterval();
});
*/
