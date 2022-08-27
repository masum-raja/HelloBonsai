let arr1 = JSON.parse(localStorage.getItem("details")) || [];
let form1 = document.getElementById("form2")
let invoice_project = document.getElementById("invoice_project")
let append_project = (arr1,project)=>{
    project.innerHTML=""
   arr1.forEach((el)=>{
    let opt = document.createElement("option")
    opt.innerText = el.project;
    project.append(opt)

   })
}
append_project(arr1,invoice_project)
let invoice_client = document.getElementById("invoice_client")
let count2 = 0;

invoice_client.addEventListener("change",function(){

    if(invoice_client.value=="+ New Client"){
        if(count2 == 0){
            let client_name_label = document.createElement("label")
            client_name_label.setAttribute("class","new_tags")
            client_name_label.innerText="CLIENT NAME" 
            let client_name = document.createElement("input")
            client_name.placeholder = "Jane Smith"
            client_name.setAttribute("id","client_name")
            let client_email_label = document.createElement("label")
            client_email_label.innerText="CLIENT EMAIL" 
            client_email_label.setAttribute("class","new_tags")
            let client_email = document.createElement("input")
            client_email.setAttribute("id","client_email")
            client_email.placeholder = "new@email.com"
            let project_name_label = document.createElement("label")
            project_name_label.setAttribute("class","new_tags")
            project_name_label.innerText="NEW PROJECT NAME" 
            let project_name = document.createElement("input")
            project_name.placeholder = "HomePage Redesign"
            project_name.setAttribute("id","project_name")
            
            form1.append(client_name_label,client_name,client_email_label,client_email,project_name_label,project_name)
            count2 =1;

            document.getElementById("container").style.height="720px"
    
        }
    }else{
        if(count2==0){
            let spacebr = document.createElement("br")
            let project_name_label = document.createElement("label")
        project_name_label.innerText="PROJECT" 
        let spacebr1 = document.createElement("br")
        let invoice_project1 = document.createElement("select")
    
        
        append_project(arr1,invoice_project1)
        form1.append(spacebr,project_name_label,spacebr1,invoice_project1)
       count2 = 1
        }
    }
})

function generateInvoice(){
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