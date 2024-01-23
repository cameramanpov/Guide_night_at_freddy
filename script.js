function sendMessage() {
    var username = document.getElementById("username").value;
    var messageText = document.getElementById("message").value;

    if (username && messageText) {
        var messageList = document.getElementById("message-list");

        var messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<strong>${username}:</strong> ${messageText}`;

        messageList.appendChild(messageDiv);

        // Efface les champs après l'envoi du message
        document.getElementById("username").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}
