let arr = JSON.parse(localStorage.getItem("details")) || [];
let form = document.getElementById("form")
let invoice_project = document.getElementById("invoice_project")
let append_project = (arr,project)=>{
    project.innerHTML=""
   arr.forEach((el)=>{
    let opt = document.createElement("option")
    opt.innerText = el.project;
    project.append(opt)

   })
}
append_project(arr,invoice_project)
let invoice_client = document.getElementById("invoice_client")
let count = 0;

invoice_client.addEventListener("change",function(){

    if(invoice_client.value=="+ New Client"){
        
        //let project_label = document.getElementById("project_label")
        //project_label.innerHTML=null;
        //let brr = document.getElementById("br")
        // // form.removeChild(brr)
        // invoice_project.innerHTML="";
        //form.removeChild(invoice_project)
        if(count ==0){
            let client_name_label = document.createElement("label")
            client_name_label.setAttribute("class","new_tags")
            client_name_label.innerText="CLIENT NAME" 
            let space = document.createElement("br")
            space.setAttribute("class","new_tags")
            let client_name = document.createElement("input")
            client_name.placeholder = "Jane Smith"
            client_name.setAttribute("id","client_name")
            let space1 = document.createElement("br")
            space1.setAttribute("class","new_tags")
            let client_email_label = document.createElement("label")
            client_email_label.innerText="CLIENT EMAIL" 
            client_email_label.setAttribute("class","new_tags")
            let space2 = document.createElement("br")
            space2.setAttribute("class","new_tags")
            let client_email = document.createElement("input")
            client_email.setAttribute("id","client_email")
            client_email.placeholder = "new@email.com"
            let space3 = document.createElement("br")
            space3.setAttribute("class","new_tags")
            let project_name_label = document.createElement("label")
            project_name_label.setAttribute("class","new_tags")
            project_name_label.innerText="NEW PROJECT NAME" 
            let space4 = document.createElement("br")
            space4.setAttribute("class","new_tags")
            let project_name = document.createElement("input")
            project_name.placeholder = "HomePage Redesign"
            project_name.setAttribute("id","project_name")
            
            form.append(client_name_label,space,client_name,space1,client_email_label,space2,client_email,space3,project_name_label,space4,project_name)
            count =1
    
        }
    }else{
        if(count==0){
            let spacebr = document.createElement("br")
            let project_name_label = document.createElement("label")
        project_name_label.innerText="PROJECT" 
        let spacebr1 = document.createElement("br")
        let invoice_project1 = document.createElement("select")
        

        //invoice_project.setAttribute("id","invoice_project")
        
        append_project(arr,invoice_project1)
        form.append(spacebr,project_name_label,spacebr1,invoice_project1)
        // let tags = document.getElementsByClassName("new_tags")
        // while (list.hasChildNodes()) {  
        //     form.removeChild(form.firstChild);
        //   }
       // form.removeChild(tags)
       count = 1
        }
    }
})

function generateInvoice(){
    //alert("1")
    let invoice_details ={
        invoice_type:document.getElementById("invoice_type").value,
        client:document.getElementById("invoice_client").value,
        client_name:document.getElementById("client_name").value,
        client_email:document.getElementById("client_email").value,
        project_name:document.getElementById("project_name").value,
        invoice_project :document.getElementById("invoice_project").value
    }
    
    localStorage.setItem("invoice_details",JSON.stringify(invoice_details))
    window.location.href="invoiceedit.html"
}