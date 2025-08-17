import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const typing = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`;

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: ${theme.fonts.primary};
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${theme.colors.gradients.primary};
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(59, 130, 246, 0.4);
  }
  
  &.active {
    background: ${theme.colors.gradients.secondary};
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease-out;
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 300px;
    height: 400px;
    right: -50px;
  }
`;

const ChatHeader = styled.div`
  background: ${theme.colors.gradients.primary};
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  .bot-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  
  .bot-info {
    flex: 1;
    
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }
    
    p {
      margin: 0;
      font-size: 12px;
      opacity: 0.8;
    }
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 2px;
  }
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 80%;
  
  &.user {
    align-self: flex-end;
    flex-direction: row-reverse;
    
    .message-content {
      background: ${theme.colors.gradients.primary};
      color: white;
      border-radius: 18px 18px 4px 18px;
    }
  }
  
  &.bot {
    align-self: flex-start;
    
    .message-content {
      background: #f1f5f9;
      color: ${theme.colors.textPrimary};
      border-radius: 18px 18px 18px 4px;
    }
  }
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  
  .message-content {
    padding: 12px 16px;
    font-size: 14px;
    line-height: 1.4;
    word-wrap: break-word;
  }
  
  .typing-indicator {
    display: flex;
    gap: 4px;
    padding: 12px 16px;
    background: #f1f5f9;
    border-radius: 18px 18px 18px 4px;
    
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${theme.colors.primary};
      animation: ${typing} 1.4s ease-in-out infinite;
      
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
`;

const ChatInput = styled.div`
  padding: 20px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 10px;
  
  input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 25px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s ease;
    
    &:focus {
      border-color: ${theme.colors.primary};
    }
  }
  
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${theme.colors.gradients.primary};
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
  }
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Predefined responses for instant replies
  const botResponses = {
    greetings: [
      "Hello! I'm here to help you with any questions about our healthcare recruitment solutions. How can I assist you today?",
      "Hi there! Welcome to HealthTalentHub. I'm ready to help you with information about our talent acquisition services.",
      "Greetings! I'm your virtual assistant for all things HealthTalentHub. What would you like to know?"
    ],
    products: [
      "Our healthcare recruitment solutions include talent acquisition, staffing services, and our professional platform. Which service interests you most?",
      "We offer comprehensive recruitment technology including candidate sourcing, screening, and placement services. What specific solution are you looking for?",
      "Our services range from temporary staffing to permanent placement and recruitment consulting. Could you tell me more about your needs?"
    ],
    pricing: [
      "Our pricing varies based on your recruitment needs and facility size. Would you like me to connect you with our sales team for a personalized quote?",
      "We offer competitive pricing tailored to healthcare facilities of all sizes. I can arrange a consultation to discuss your specific needs and pricing options.",
      "Pricing depends on your recruitment scope. Let me connect you with our team for a detailed proposal."
    ],
    contact: [
      "You can reach us at 416.363.9313 or 1.800.387.9848. Our team is available 24/7 to assist you.",
      "Contact us at info@healthtalenthub.co.uk or call our support line. We're here to help with any questions or concerns.",
      "Our contact information is available on our website, or you can call us directly. How would you prefer to get in touch?"
    ],
    default: [
      "I'm here to help with information about our healthcare recruitment solutions. Could you please rephrase your question?",
      "I'd be happy to assist you with HealthTalentHub services. Can you provide more details about what you're looking for?",
      "Let me help you find the information you need. Could you clarify your question about our recruitment solutions?"
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    } else if (message.includes('product') || message.includes('solution') || message.includes('wristband') || message.includes('label')) {
      return botResponses.products[Math.floor(Math.random() * botResponses.products.length)];
    } else if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('call')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay for more natural feel
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when first opening
      setTimeout(() => {
        setMessages([{
          type: 'bot',
          content: "Hello! I'm your HealthTalentHub assistant. How can I help you today?"
        }]);
      }, 300);
    }
  };

  return (
    <ChatBotContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <div className="bot-avatar">💬</div>
            <div className="bot-info">
              <h3>HealthTalentHub Assistant</h3>
              <p>Online • Ready to help</p>
            </div>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </ChatHeader>
          
          <ChatMessages>
            {messages.map((message, index) => (
              <Message key={index} className={message.type}>
                <div className="avatar">
                  {message.type === 'user' ? '👤' : '💬'}
                </div>
                <div className="message-content">
                  {message.content}
                </div>
              </Message>
            ))}
            
            {isTyping && (
              <Message className="bot">
                <div className="avatar">💬</div>
                <div className="typing-indicator">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </Message>
            )}
            
            <div ref={messagesEndRef} />
          </ChatMessages>
          
          <ChatInput>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
              ➤
            </button>
          </ChatInput>
        </ChatWindow>
      )}
      
      <ChatButton onClick={toggleChat} className={isOpen ? 'active' : ''}>
        💬
      </ChatButton>
    </ChatBotContainer>
  );
};

export default ChatBot;
