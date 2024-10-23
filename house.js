function opent() {
    window.location.href = "step.html";
}
function opend(){
    window.location.href = "formofhouse.html";
}

 // JavaScript to handle form submission
 document.getElementById("emailform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const userEmail = document.getElementById("email").value;
    const adminEmail = "idilpreet24@gmail.com"; // Replace with the admin's email address

    // Here, you can use email sending methods like sending an AJAX request to a server-side script to send the email.
    // For simplicity, this example just displays an alert with the email content.
    const emailContent = `User Email: ${userEmail}\nAdmin Email: ${adminEmail}`;
    alert("Email sent to admin:\n" + emailContent);
    
    // You can also add code to send the email to the admin's email address using a server-side script.
});