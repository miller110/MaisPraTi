function showMessage(message, type) {
    var messageBox = document.getElementById('messageBox');
    messageBox.innerText = message; 
    messageBox.className = 'message-box ' + type; 
    messageBox.style.display = 'block'; 
}

function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
});