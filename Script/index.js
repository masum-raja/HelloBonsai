let btn1data2='With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.';
let btn2data2='Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.';
let btn3data2='Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.';
let btn4data2="Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.";
let btn5data2="Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.";
let btn6data2="Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.";
let btn7data2="Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.";
let btn8data2="Create your own customized forms and questionnaires for clients and kicking off new projects";

// let imagearrow="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cb471feb668_green_arrow.svg"

let image1="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png";
let image2="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png"                                                                                                                   
let image3= "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png"
let image4="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png"
let image5="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png"
let image6="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png"
let image7="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png"
let image8="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png"


document.getElementById('imagetwoo1').addEventListener('click',function(){
    appendimage('Win More Work',btn1data2,"EXPLORE PROPOSALS",image1);
})

document.getElementById('imagetwoo2').addEventListener('click',function(){
    appendimage('Protect Your Business',btn2data2,"EXPLORE CONTRACTS",image2);
})

document.getElementById('imagetwoo3').addEventListener('click',function(){
    appendimage('Stay Organized',btn3data2,"EXPLORE PROJECTS",image3);
})

document.getElementById('imagetwoo4').addEventListener('click',function(){
    appendimage('Keep It Simple',btn4data2,"EXPLORE TIME TRACKING",image4);
})

document.getElementById('imagetwoo5').addEventListener('click',function(){
    appendimage('Get Paid Faster',btn5data2,"EXPLORE INVOICES",image5);
})

document.getElementById('imagetwoo6').addEventListener('click',function(){
    appendimage('Be More Effective',btn6data2,"EXPLORE TASKS",image6);
})

document.getElementById('imagetwoo7').addEventListener('click',function(){
    appendimage('Automate Your Finances',btn7data2,"EXPLORE ACCOUNTING & TAXES",image7);
})

document.getElementById('imagetwoo8').addEventListener('click',function(){
    appendimage('Ask Your Clients',btn8data2,"EXPLORE FORMS",image8);
})

 function appendimage(data1,data2,data3,data4){
   let h2append=document.getElementById('h2append');
   h2append.innerText="";
   h2append.innerText=data1;

   let btdt=document.getElementById('btdt');
   btdt.innerText="";
   btdt.innerText=data2;

   let exploreproposal=document.getElementById('exploreproposal');
   exploreproposal.innerText="";
   exploreproposal.innerText=data3;

  let imagediv=document.getElementById('proposalimage');
  imagediv.innerText="";
  let image=document.createElement('img');
  image.src=data4;
  imagediv.append(image);

}

appendimage('Win More Work',btn1data2,"EXPLORE PROPOSALS",image1);