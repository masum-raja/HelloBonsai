var myDate = new Date();

let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['January', 'Februaryeb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


let date = myDate.getDate();
let month = monthsList[(myDate.getMonth())];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];

let today = `${day}, ${month} ${date}th`;

document.getElementById("day").innerHTML=today

let currentTime=myDate.getHours()

let name="masum!"
if(currentTime >= 12 && currentTime < 17){
     let mssg=document.getElementById("mssg")
     mssg.innerText=`Good afternoon ${name}`
     let image=document.getElementById("img");
     let img=document.createElement("img");
     img.src="https://app.hellobonsai.com/packs/static/good-afternoon-b0990cefb6300b05f216.svg"
     image.append(img)
}else if(17 <= currentTime && currentTime <= 23){
  let mssg=document.getElementById("mssg")
  mssg.innerText=`Good evening ${name}`
  let image=document.getElementById("img");
  let img=document.createElement("img");
  img.src="https://app.hellobonsai.com/packs/static/good-night-b72f77cf9b08b00ddf6b.svg"
  image.append(img)
}else{
  let mssg=document.getElementById("mssg")
  mssg.innerText=`Good morning ${name}`
  let image=document.getElementById("img");
  let img=document.createElement("img");
  img.src="https://app.hellobonsai.com/packs/static/good-morning-66f0f5841376d77563ac.svg"
  image.append(img)
}


// Time Section End


let arr = JSON.parse(localStorage.getItem("details")) || [];

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
  if(count==0){
    count=1;
    start()
   
  }
  time_tracking.style.opacity="0";
  time_tracking.style.visibility="hidden";
 // startstop()
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

arr.forEach((ele,i)=>{
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.project;
    let col2 = document.createElement("td");
    col2.innerText = ele.task;
    let col3 = document.createElement("td");
    col3.innerText = ele.date;
    let col4 = document.createElement("td");
    col4.innerText = ele.price;
    let col5 = document.createElement("td");
    col5.innerText = ele.updatetime;

    let del= document.createElement("td");
    del.innerText="Delete"
    del.style.color="red"

    del.addEventListener("click",()=>{
        delRow(i)
    })
    row.append(col1, col2, col3, col4, col5,del);
    tablebody.append(row);
})
};
displayProject(arr)

delRow=(i)=>{
    arr.splice(i,1)
    localStorage.setItem("details",JSON.stringify(arr))
    displayProject(arr)
}

