class CustomerFormHandler {

    validateForm(data){
    
    if(data.name.length < 3){
    alert("Name must be at least 3 characters");
    return false;
    }
    
    if(data.phone.length !== 10){
    alert("Phone number must be 10 digits");
    return false;
    }
    
    if(data.aadhar.length !== 12){
    alert("Aadhar number must be 12 digits");
    return false;
    }
    
    if(data.address === ""){
    alert("Address is required");
    return false;
    }
    
    return true;
    
    }
    
    saveToLocalStorage(data){
    
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    
    customers.push(data);
    
    localStorage.setItem("customers", JSON.stringify(customers));
    
    }
    
    clearForm(){
    document.getElementById("guestForm").reset();
    }
    
    }
    const formHandler = new CustomerFormHandler();

document.getElementById("guestForm").addEventListener("submit", function(e){

e.preventDefault();

let data = {

name: document.getElementById("name").value,
phone: document.getElementById("phone").value,
email: document.getElementById("email").value,
aadhar: document.getElementById("aadhar").value,
checkin: document.getElementById("checkin").value,
checkout: document.getElementById("checkout").value,
adults: document.getElementById("adults").value,
children: document.getElementById("children").value,
address: document.getElementById("address").value,
purpose: document.getElementById("purpose").value

};

if(formHandler.validateForm(data)){

formHandler.saveToLocalStorage(data);

formHandler.clearForm();

alert("Guest Registered Successfully");

}

});