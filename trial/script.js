document.getElementById("submitForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    var confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.textContent = `Thank you, ${name}, for your submission! We have received your information. Email: ${email}`;
});
