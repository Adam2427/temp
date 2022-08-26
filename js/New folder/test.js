// var str = "hallo";
// str = "ss";
// var num: number;
// num = 2233;
// var x;
// (x = "any"), (x = 231), (x = true);
// console.log("hallo");

//debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  console.log(max - min);
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
