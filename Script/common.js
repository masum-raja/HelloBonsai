function myFunction(x) {
    x.classList.toggle("change");
  }
  
  login=()=>{
    window.location.href="signin_page.html"
  }

  signup=()=>{
    window.location.href="signup_page.html"
  }

  DasBtn=()=>{
    window.location.href="Dashboard_page.html"
  }

  
  logoff=()=>{
    localStorage.setItem("Bonsai_sigin_data",(null))
    window.location.href="index.html"
  }