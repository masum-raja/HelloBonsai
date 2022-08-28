
document.querySelector('form').addEventListener("submit", signin);

let signIndata=JSON.parse(localStorage.getItem('Bonsai_sigin_data'))||[];

function signin(event){
  event.preventDefault();
  let data={
  Email:document.getElementById('email').value,
  Password:document.getElementById('password').value,
}


    let SignUpdata=JSON.parse(localStorage.getItem('Bonsai_signup_data'))||[];

    let flag = false;
  for (let i = 0; i < SignUpdata.length; i++) {
      if(data.Email===SignUpdata[i].personEmail && data.Password===SignUpdata[i]. personPassword){
        flag = true;
      }
  }

  if (flag===true) {
    signIndata.push(data);
    localStorage.setItem("Bonsai_sigin_data",JSON.stringify(signIndata));
    window.location.href="index.html";
  }else{
    alert("Please Check your Email or Password");
  }

}

