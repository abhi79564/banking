import React, { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function ChatbaseIntegration() {
  useEffect(() => {

    const chatbaseConfig = {
      chatbotId: "AbmjWr2ylNKjxkT8TkweS",
    };


    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.id = "AbmjWr2ylNKjxkT8TkweS";
    chatbaseScript.defer = true;


    document.head.appendChild(chatbaseScript);

    return () => {
      document.head.removeChild(chatbaseScript);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/C3wieDId1Nn-5mvIhrp7g"
      width="100%"
      style={{ height: '100%', minHeight: '700px' }}
      frameBorder="0"
    ></iframe>
  );
}

export default ChatbaseIntegration;
