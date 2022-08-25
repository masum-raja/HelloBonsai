let arr = JSON.parse(localStorage.getItem("details")) || [];

// alert(arr.length)
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var flag = false;
let updatetime;
var time_tracking = document.getElementById("time_tracking_form")

function startstop() {
  if (count == 0) {
    count = 1;
    start();
    
    time_tracking.style.opacity="1";
    time_tracking.style.visibility="visible";
  } else {
    count = 0;
    stop();
    time_tracking.style.opacity="0";
    time_tracking.style.visibility="hidden";
  }
}
// document.addEventListener('click',function handleClickOutsideBox(event){
// if(!time_tracking.contains(event.target)){
//     //time_tracking.style.display = "none";
//     //time_tracking.style.visibility = "hidden"
//     time_tracking.style.opacity="0";
//     time_tracking.style.visibility="hidden";
// }
// })


function start() {
  flag = true;
  stopwatch();
}

function stop() {
  flag = false;
}

function reset() {
  flag = false;
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById("timer").innerHTML = `0${hr}:0${min}:0${sec}`;
  arr[arr.length - 1]["updatetime"] = updatetime;
  localStorage.setItem("details", JSON.stringify(arr));
  arr = JSON.parse(localStorage.getItem("details"));
  //alert(arr.length)
  displayProject(arr);
}

function stopwatch() {
  if (flag == true) {
    sec++;

    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }
    if (sec > 9) var secString = sec;
    else secString = "0" + sec;
    if (min > 9) var minString = min;
    else minString = "0" + min;

    if (hr > 9) var hrString = hr;
    else hrString = "0" + hr;

    updatetime = `${hrString}:${minString}:${secString}`;

    document.getElementById(
      "timer"
    ).innerHTML = `${hrString}:${minString}:${secString}`;

    setTimeout("stopwatch()", 1000);
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  startstop()
  let details = {
    project: document.getElementById("project").value,
    task: document.getElementById("task").value,
    date: document.getElementById("date").value,
    price: document.getElementById("rate").value,
    updatetime: "0",
  };
  arr.push(details);
  localStorage.setItem("details", JSON.stringify(arr));
});

let displayProject = (arr) => {
  let tablebody = document.querySelector("tbody");
  tablebody.innerHTML = "";
 // alert(arr.length)
  for (i = arr.length - 1; i >= 0; i--) {
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = arr[i].project;
    let col2 = document.createElement("td");
    col2.innerText = arr[i].task;
    let col3 = document.createElement("td");
    col3.innerText = arr[i].date;
    let col4 = document.createElement("td");
    col4.innerText = arr[i].price;
    let col5 = document.createElement("td");
    col5.innerText = arr[i].updatetime;
    row.append(col1, col2, col3, col4, col5);
    tablebody.append(row);
  }
};
displayProject(arr)
