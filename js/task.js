// to sort the values

document.querySelector(".sort").addEventListener("click", () => {
  let value = document.getElementById("id1").value;

  let arr = value.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  document.getElementById("res").innerHTML = `Result : ${arr.join(",")}`;
});

// to Reverse the Values

document.querySelector(".reverse").addEventListener("click", () => {
  let value = document.getElementById("id1").value;
  let sum = "";
  value.split("").forEach((val, i, arr) => {
    sum += value[arr.length - (i + 1)];
    document.getElementById("res").innerHTML = `Result : ${sum}`;
  });
});

//to clear the values

document.querySelector(".clear").addEventListener("click", () => {
  document.getElementById("id1").value = "";
  document.getElementById("res").innerHTML = "";
});
