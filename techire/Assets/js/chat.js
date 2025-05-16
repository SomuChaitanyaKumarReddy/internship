const chatbotButton = document.getElementById('chatbot-button');
    const chatWindow = document.querySelector('.chat');
    const closeButton = document.querySelector('.close-btn');
    const messageInput = document.querySelector('.message-input');
    const messageSubmit = document.querySelector('.message-submit');
    const messagesContent = document.querySelector('.messages-content');

    // Toggle chat window visibility when chatbot button is clicked
    chatbotButton.addEventListener('click', () => {
        chatWindow.style.display = 'block';
        chatbotButton.style.display = 'none';
    });

    // Close chat window and show chatbot button again
    closeButton.addEventListener('click', () => {
        chatWindow.style.display = 'none';
        chatbotButton.style.display = 'block';
    });

    // Handle sending a message
    messageSubmit.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            // Append sent message
            const sentMessage = document.createElement('div');
            sentMessage.classList.add('message', 'sent');
            sentMessage.innerHTML = `<p>${messageText}</p>`;
            messagesContent.appendChild(sentMessage);

            // Clear input field
            messageInput.value = '';

            // Simulate a received message
            setTimeout(() => {
                const receivedMessage = document.createElement('div');
                receivedMessage.classList.add('message', 'received');
                receivedMessage.innerHTML = `<p>Thanks for reaching out! We'll process your request shortly.</p>`;
                messagesContent.appendChild(receivedMessage);
                messagesContent.scrollTop = messagesContent.scrollHeight; // Scroll to bottom
            }, 1000); // Simulate a delay before receiving the message
        }
    });