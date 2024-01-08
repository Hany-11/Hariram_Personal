const contactEl = document.getElementById('contact');
const chatButton = document.getElementById('chat-button');

window.addEventListener('scroll', function() {
  if (window.scrollY >= contactEl.offsetTop) {
    chatButton.style.display = 'block';
  } else {
    chatButton.style.display = 'none'; 
  }
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) { // Hide chatbox after scrolling 50px
    document.getElementById('chatbot-dialogflow').style.display = 'none';
  }
});
 
document.addEventListener('DOMContentLoaded', function () {
            var chatButton = document.getElementById('chat-button');
            var chatbox = document.getElementById('chatbot-dialogflow');

            // Toggle chatbox when the button is clicked
            chatButton.addEventListener('click', function () {
                if (chatbox.style.display === 'block') {
                    chatbox.style.display = 'none';
                } else {
                    chatbox.style.display = 'block';
                }
            });

            // Hide chatbox when clicking outside of it
            document.addEventListener('click', function (event) {
                var isClickInsideChatbox = chatbox.contains(event.target);
                var isClickOnChatButton = (event.target === chatButton);

                if (!isClickInsideChatbox && !isClickOnChatButton) {
                    chatbox.style.display = 'none';
                }
            });
        });
