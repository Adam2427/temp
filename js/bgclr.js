// document.addEventListener("load", doColors);
function doColors(colors) {
  let container = document.querySelector("#container");
  switch (colors) {
    case "red":
      container.style.backgroundColor = "red";
      break;
    case "blue":
      container.style.backgroundColor = "blue";
      break;
    case "black":
      container.style.backgroundColor = "black";
      break;
    case "skyblue":
      container.style.backgroundColor = "skyblue";
      break;
    case "green":
      container.style.backgroundColor = "green";
      break;
    case "violet":
      container.style.backgroundColor = "violet";
      break;
    case "orange":
      container.style.backgroundColor = "orange";
      break;
    case "grey":
      container.style.backgroundColor = "grey";
      break;
    case "yellow":
      container.style.backgroundColor = "yellow";
      break;
    case "pink":
      container.style.backgroundColor = "pink";
      break;
    default:
      container.style.backgroundColor = "white";
  }
}
