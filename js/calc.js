/**/
let result = document.getElementById("result");
let resultFul = document.getElementById("result-ful");
let buttons = document.querySelectorAll("button");
let buttonValue;
let displayValue = "";
let j = 52;
let k = 38;

function addValue() {
  displayValue += buttonValue;
  result.innerHTML = displayValue;
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target.innerText);

    buttonValue = e.target.innerText;

    if (buttonValue == "C") {
      displayValue = " ";
      result.innerHTML = "";
      resultFul.innerHTML = 0;
      resultFul.style.fontSize = "52px";
      j = 52;
      k = 38;
    } else if (buttonValue == "×") {
      buttonValue = "*";
      addValue();
    } else if (buttonValue == "÷") {
      buttonValue = "/";
      addValue();
    } else if (buttonValue == "+") {
      buttonValue = "+";
      addValue();
    } else if (buttonValue == "-") {
      buttonValue = "-";
      addValue();
    } else if (buttonValue == "%") {
      // buttonValue = displayValue * 0.1;
      // buttonValue = "-";
      displayValue = displayValue * 0.1;
      displayValue = String(displayValue).slice(0, 3);
      // console.log(String(displayValue).slice(0, 3));
      result.innerHTML = String(displayValue).slice(0, 3);
      resultFul.innerHTML = "=" + String(displayValue).slice(0, 3);

      // addValue();
    } else if (buttonValue == "=" && buttonValue != "") {
      resultFul.style.fontSize = "52px";
      result.style.fontSize = "38px";
      displayValue = resultFul.innerHTML.slice(2);
    } else {
      result.style.fontSize =
        displayValue.length >= 9 ? `${(j, (j = j - 3))}px` : `52px`;
      resultFul.style.fontSize =
        displayValue.length >= 9 ? `${(k, (k = k - 1))}px` : `38px`;

      addValue();
      resultFul.innerHTML = `= ${eval(displayValue)}`;
    }
  });
}

/* <script>
let result = document.getElementById("result");
let resultFul = document.getElementById("result-ful");
let buttons = document.querySelectorAll("button");
let displayValue = "";
let displayVal2 = "";
let buttonValue;
let j = 52;
let k = 38;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    console.log(e.target.innerText);

    buttonValue = e.target.innerText;
    // resultFul.innerHTML = "= " + displayValue;
    if (buttonValue == "C") {
      displayValue = " ";
      result.innerHTML = "";
      resultFul.innerHTML = 0;
      resultFul.style.fontSize = "52px";
      j = 52;
      k = 38;
    } else if (buttonValue == "×") {
      buttonValue = "*";
      displayValue += buttonValue;
      result.innerHTML = displayValue;
    } else if (buttonValue == "÷") {
      buttonValue = "/";
      displayValue += buttonValue;
      result.innerHTML = displayValue;
    } else if (buttonValue == "=" && buttonValue != "") {
      resultFul.style.fontSize = "52px";
      result.style.fontSize = "38px";
      displayValue = resultFul.innerHTML.slice(2);
    } else if (displayValue.length >= 9) {
      console.log(i);
      result.style.fontSize = `${j}px`;
      resultFul.style.fontSize = `${k}px`;
      j = j - 3;
      k = k - 1;
      displayValue += buttonValue;
      result.innerHTML = displayValue;
      resultFul.innerHTML = "= " + eval(displayValue);
    } else {
      result.style.fontSize = "52px";
      resultFul.style.fontSize = "38px";
      displayValue += buttonValue;
      result.innerHTML = displayValue;
      resultFul.innerHTML = "= " + eval(displayValue);
    }
  });
}
</script> */
