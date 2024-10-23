document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_message.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var responseMessage = document.getElementById("response-message");
        if (xhr.status === 200) {
          responseMessage.innerHTML = "Message sent successfully!";
          responseMessage.style.color = "#00ff00";
        } else {
          responseMessage.innerHTML = "Error sending message. Please try again.";
          responseMessage.style.color = "#ff0000";
        }
        document.getElementById("contact-form").reset();
      }
    };
    
    var data = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
    xhr.send(data);
  });
  
  function openhome(){
    window.location.href = "index.html";
  }