let container = document.getElementById("container");
var divfirst = document.getElementById("divfirst");
let count =0
function popupstart(){
 if(count==0){
    count=1;
    let contentdiv = document.getElementById("content")
    contentdiv.style.maxHeight="500px";
    contentdiv.style.overflow="auto";
    contentdiv.style.transition=" max-height 0.2s ease-out";
    contentdiv.style.backgroundColor= "#f1f1f1";

 }else{
    count = 0;
    let contentdiv = document.getElementById("content")
    contentdiv.style.maxHeight="0px";
    contentdiv.style.overflow="hidden";
    contentdiv.style.transition=" max-height 0.2s ease-out";
    contentdiv.style.backgroundColor= "#f1f1f1";
 }
 
}
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
today = today + "";
let presentdate = today.slice(0, 15);
let presenttime = today.slice(16, 21);
// let hr = presenttime[16]+presenttime[17]
// hr = +hr
// if(hr>12){

// }
let datediv = document.getElementById("date");
let presentday = document.createElement("p");
presentday.innerText = presentdate;
datediv.append(presentday);

// let greeting = document.createElement("p")
// greeting.innerText="Hello, How are you! \n How may i help you?"
// greeting.setAttribute("class","des")
// container.append(greeting)
//document.getElementById("divfirst").scrollTop =100;
function sendbtn() {
  let response = document.getElementById("response");
  let responsemsg = response.value;

  if(responsemsg=="" || responsemsg==null){
    
}else 
  if (responsemsg != null) {
    thirdbtn1(responsemsg)
    firstpage();
  }
 
}

function firstpage() {
  let btn1 = document.createElement("btn");
  btn1.setAttribute("class", "btn");
  btn1.innerText = "Templates";
  btn1.addEventListener("click", function () {
    thirdbtn1(btn1.innerText);
    secondbtn1();
  });
  let btn2 = document.createElement("btn");
  btn2.setAttribute("class", "btn");
  btn2.innerText = "Plans";
  btn2.addEventListener("click", function () {
    secondbtn2();
  });
  let space = document.createElement("br");
  let space1 = document.createElement("br");
  let space2 = document.createElement("br");
  let btn3 = document.createElement("btn");
  btn3.setAttribute("class", "btn");
  btn3.innerText = "Pricing";
  btn3.addEventListener("click", function () {
    secondbtn3();
  });
  let btn4 = document.createElement("btn");
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Want to know about HelloBonsai";
  btn4.addEventListener("click", function () {
    secondbtn4();
  });
  let btn5 = document.createElement("btn");
  btn5.setAttribute("class", "btn");
  btn5.innerText = "Just surfing on web";
  btn5.addEventListener("click", function () {
    secondbtn5();
  });
  let space3 = document.createElement("br");
  let space4 = document.createElement("br");
  let space5 = document.createElement("br");
  let space6 = document.createElement("br");
  let space7 = document.createElement("br");
  divfirst.append(
    btn1,
    btn2,
    space,
    space1,
    space2,
    btn3,
    btn5,
    space3,
    space4,
    space7,
    btn4,
    space5,
    space6
  );

  response.value = "";
}
function secondbtn1() {
  let divthird = document.createElement("div");
  let btn1 = document.createElement("btn");
  btn1.setAttribute("class", "btn");
  btn1.innerText = "Proposal Templates";
  btn1.addEventListener("click", function () {
    thirdbtn1(btn1.innerText);
    proposal();
  });
  let btn2 = document.createElement("btn");
  btn2.setAttribute("class", "btn");
  btn2.innerText = "Contract Templates";
  btn2.addEventListener("click", function () {
    contracts();
  });
  let space = document.createElement("br");
  let space1 = document.createElement("br");
  let space2 = document.createElement("br");
  let btn3 = document.createElement("btn");
  btn3.setAttribute("class", "btn");
  btn3.innerText = "Invoice Templates";
  btn3.addEventListener("click", function () {
    invoice();
  });
  let btn4 = document.createElement("btn");
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Go Back";
  btn4.addEventListener("click", function () {
    thirdbtn1(btn4.innerText);
    firstpage();
  });
  let space5 = document.createElement("br");
  let space6 = document.createElement("br");
  divthird.append(
    btn1,
    btn2,
    space,
    space1,
    space2,
    btn3,
    btn4,
    space5,
    space6
  );
  divfirst.append(divthird);
  //divsecond.append(divthird);
}
function secondbtn2() {}
function secondbtn3() {}
function secondbtn4() {}
function secondbtn5() {}

function thirdbtn1(msg) {
  let divsec = document.createElement("div");
  divsec.setAttribute("class", "sentmsgs");
  let sentmsg = document.createElement("p");
  sentmsg.setAttribute("class", "des");
  let spantg = document.createElement("span")
  spantg.innerText=presenttime;
  spantg.style.fontSize="10px"
  spantg.style.display="flex"
  spantg.style.justifyContent="flex-end"
 
  let icons = document.createElement("i")
  icons.setAttribute("class","fa-solid fa-check-double")
  icons.style.color="blue"
  spantg.append(icons)
  sentmsg.innerText = msg + "\n" 
  sentmsg.append(spantg);
  divsec.append(sentmsg);
  divfirst.append(divsec);
  
}
function proposal() {
  let txt = document.createElement("p");
  txt.innerText =
    "Proposal templates are a great way to streamline and improve your proposal workflow. Having a proposal template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.\n" 
  txt.setAttribute("class", "rec");
  let divs = document.createElement("div");

  let btn4 = document.createElement("btn");
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Go Back";
  btn4.addEventListener("click", function () {
    thirdbtn1(btn4.innerText);
    secondbtn1();
  });
  let space5 = document.createElement("br");
  let space6 = document.createElement("br");
  divs.append(txt, btn4, space5, space6);
  divfirst.append(divs);
}
function contracts() {
  let txt = document.createElement("p");
  txt.innerText =
    "A contract is a legally binding agreement between you and your client. It’s as simple as that.\n" 
    
  txt.setAttribute("class", "rec");

  let divs = document.createElement("div");

  let btn4 = document.createElement("btn");
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Go Back";
  btn4.addEventListener("click", function () {
    thirdbtn1(btn4.innerText);
    secondbtn1();
  });
  let space5 = document.createElement("br");
  let space6 = document.createElement("br");
  divs.append(txt, btn4, space5, space6);
  divfirst.append(divs);
}
function invoice() {
  let txt = document.createElement("p");
  txt.innerText =
    "An invoice is a document containing payment details that obligates a client to process your fees for your services. It’s a formal way of asking your clients to complete the payments within the specified deadline.\n" 
    
  txt.setAttribute("class", "rec");
  let divs = document.createElement("div");

  let btn4 = document.createElement("btn");
  btn4.setAttribute("class", "btn");
  btn4.innerText = "Go Back";
  btn4.addEventListener("click", function () {
    thirdbtn1(btn4.innerText);
    secondbtn1();
  });
  let space5 = document.createElement("br");
  let space6 = document.createElement("br");
  divs.append(txt, btn4, space5, space6);
  divfirst.append(divs);
}
