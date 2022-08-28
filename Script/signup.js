
document.querySelector('form').addEventListener('submit',signup);

let SignUpdata=JSON.parse(localStorage.getItem('Bonsai_signup_data'))||[];

function signup(event){
    event.preventDefault();
    let data={
      personEmail:document.getElementById('email').value, 
      personName:document.getElementById('name').value,
      personPassword:document.getElementById('password').value,

    }


    if(data.personEmail==="" || data.personName==="" || data.personPassword===""){
      alert("Please Fill all the boxes");
      
    }else{
      SignUpdata.push(data);
    localStorage.setItem("Bonsai_signup_data",JSON.stringify(SignUpdata));

    window.location.href="signin_page.html";
    }

}

