let start = true;
function doPlay() {
  if (start) {
    document.querySelector("img").classList.add("ball");
  } else {
    document.querySelector("img").classList.remove("ball");
    setTimeout(() => document.querySelector("img").classList.add("ball"), 500);
  }

  start = !start;
}
