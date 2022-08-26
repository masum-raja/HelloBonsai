
// let switchb=document.querySelector("#buttonk")
//      switchb.onchange = function(){
//         this.classList.toggle("active");
//         var panel=document.querySelector(".yearly_part")
//         var mon=document.querySelector(".card_part")
//         if (mon.style.display === "none") {
//             mon.style.display = "grid";
//             panel.style.display="none"
//         } else {
//             mon.style.display = "none";
//             panel.style.display="grid"
//         }
//     }
let switchb=document.querySelector("#buttonk")
     switchb.onchange = function(){
        this.classList.toggle("active");
        var panel=document.querySelector(".yearly_part")
        var panel1=document.querySelector("#mid_part1_2")
        var mon=document.querySelector(".card_part")
        var mon1=document.querySelector("#mid_part")
        if (mon.style.display === "none" && mon1.style.display==="none") {
            mon.style.display = "grid";
            panel.style.display="none"
            mon1.style.display="block"
            panel1.style.display="none"
        } else {
            mon.style.display = "none";
            panel.style.display="grid"
             mon1.style.display="none"
            panel1.style.display="block"
        }
    }


  


//Bottom Js part
let q=document.querySelector("#que1")
	 q.onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

   let p=document.querySelector("#que2")
	 p.onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

	let m=document.querySelector("#que3")
	 m.onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
   
     

	let k=document.querySelector("#que4")
	 k.onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }