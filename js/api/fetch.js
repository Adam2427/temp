const apiUrl = "https://jsonplaceholder.typicode.com/users";

/////////////////////////

//XMLHTTPREQUEST METHOD

/*
const http = new XMLHttpRequest();

http.onload = function () {
  if (http.status === 200) {
    const data = JSON.parse(http.response);
    console.log(data);
  } else {
    console.log("Data Not Found ");
  }
};
http.open("GET", apiUrl);
http.send();
*/

///////////////////////////

//FETCH METHOD

const promise = fetch(apiUrl, {
  method: "GET",
});
// console.log(promise);
//promise
// 1) .then() .catch()
// 2) .try() .catch()  -> async/ await

promise
  .then(function (res) {
    if (res.status === 200) {
      return res.json();
    } else {
      console.log("Data Not Found..");
    }
  })
  .then(function (data) {
    console.log(data);
  });
