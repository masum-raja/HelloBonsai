let invoice_details = JSON.parse(localStorage.getItem("invoice_details"));
let arr = JSON.parse(localStorage.getItem("details")) || [];
let invoice_project = invoice_details.invoice_project;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].project == invoice_project) var project_data = arr[i];
}

// let data = JSON.parse(localStorage.getItem("data"))
let data = {
  name: "Mayank Gupta",
  email: "mayankmk22@gmail.com",
};
let sender_name = document.getElementById("sender-name");
sender_name.value = data.name;

// let sender_company = document.getElementById("sender-company");
// sender_company.value = "Your Company";

document.getElementById("sender-email").innerText = data.email;
// document.getElementById("invoice_name").innerText = `${invoice_details.client_name} Invoice`;
let num = Math.ceil(1000 + Math.random());
document.getElementById("invoice_num").innerText = `Invoice #${num}`;

document
  .getElementById("sender-date")
  .append((document.createElement("h4").innerText = "Aug 26, 2022"));
document.getElementById("due-date").innerText = "Aug 28,2022";

document.getElementById("client-name").value = invoice_details.client_name;
document.getElementById("item-name").value = invoice_details.project_name;
document.getElementById("client-email").innerText = invoice_details.client_email;
document.getElementById("project-name").innerText = invoice_details.invoice_project;
document.getElementById("tax").value = "0";
document.getElementById("unit").value = "1";
document.getElementById("rate_item").value = project_data.price;

function calculatetotal() {
  let tax = document.getElementById("tax").value;
  tax = +tax;
  let units = document.getElementById("unit").value;
  units = +units;
  let rate = document.getElementById("rate_item").value;
  let total_price = rate * units;
  let tax_value = (tax / 100) * total_price;
  let total_invoice_amount = tax_value + total_price;

  // let show_tax = document.getElementById("total-tax")
  // show_tax.innerText = `₹${tax_value}`
  document.getElementById("total").innerText = `₹${total_price}`;
  document.getElementById("subtotal").innerText = `₹${total_price}`;
  document.getElementById("total-tax").innerText = `₹${tax_value}`;
  document.getElementById(
    "total-amount"
  ).innerText = `₹${total_invoice_amount}`;
}

calculatetotal();


