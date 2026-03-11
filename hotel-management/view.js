let customers = JSON.parse(localStorage.getItem("customers")) || [];

let tableBody = document.getElementById("tableBody");

function displayData(data){

tableBody.innerHTML = "";

data.forEach((customer , index) => {

let row = `
<tr>
<td>${customer.name}</td>
<td>${customer.phone}</td>
<td>${customer.email}</td>
<td>${customer.aadhar}</td>
<td>${customer.checkin}</td>
<td>${customer.checkout}</td>
<td>${customer.adults}</td>
<td>${customer.children}</td>
<td>${customer.address}</td>
<td>${customer.purpose}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="deleteCustomer(${index})">Delete</button>
</td>
</tr>
`;

tableBody.innerHTML += row;

});

}

displayData(customers);

document.getElementById("search").addEventListener("input", function(){

let searchValue = this.value.toLowerCase();
    
let filteredData = customers.filter(customer => 
customer.name.toLowerCase().includes(searchValue)
);
    
displayData(filteredData);
    
});

function deleteCustomer(index){

customers.splice(index,1);
    
localStorage.setItem("customers", JSON.stringify(customers));
    
displayData(customers);
    
}

document.getElementById("totalGuests").innerText = customers.length;