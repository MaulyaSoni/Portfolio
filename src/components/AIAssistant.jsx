import { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';

export default function AIAssistant() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const robotRef = useRef(null);

  // Track cursor for eye movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const robotCenterX = rect.left + rect.width / 2;
        const robotCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - robotCenterX;
        const deltaY = e.clientY - robotCenterY;
        
        // Calculate angle and limit eye movement
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 30, 8);
        
        const eyeX = Math.cos(angle) * distance;
        const eyeY = Math.sin(angle) * distance;
        
        setEyePosition({ x: eyeX, y: eyeY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const aboutMeInfo = [
    "🎓 I'm Maulya Soni, a passionate MERN Stack Developer and AI/ML Enthusiast!",
    "💻 I specialize in building full-stack web applications with React, Node.js, and MongoDB.",
    "🤖 I'm deeply interested in Machine Learning, Data Science, and AI technologies.",
    "☁️ I have expertise in Cloud Architecture and Data Analytics.",
    "🚀 I love creating high-performance, scalable applications with clean code.",
    "📊 Check out my projects in Web Development and Machine Learning!",
    "📫 Feel free to reach out through the contact page!"
  ];

  const handleRobotClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add initial greeting
      setTimeout(() => {
        setMessages([aboutMeInfo[0]]);
      }, 300);
    }
  };

  const tellMeMore = () => {
    if (messages.length < aboutMeInfo.length) {
      setMessages([...messages, aboutMeInfo[messages.length]]);
    } else {
      setMessages([...messages, "That's all about me! Want to know more? Check out my projects and achievements!"]);
    }
  };

  return (
    <>
      {/* AI Assistant Robot */}
      <div className="ai-assistant-container" ref={robotRef}>
        <div className="robot-body" onClick={handleRobotClick}>
          {/* Antenna */}
          <div className="antenna">
            <div className="antenna-ball"></div>
          </div>
          
          {/* Robot Head */}
          <div className="robot-head">
            {/* Eyes */}
            <div className="eyes-container">
              <div className="eye left-eye">
                <div 
                  className="pupil"
                  style={{
                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                  }}
                />
              </div>
              <div className="eye right-eye">
                <div 
                  className="pupil"
                  style={{
                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                  }}
                />
              </div>
            </div>
            
            {/* Mouth */}
            <div className={`mouth ${isOpen ? 'talking' : ''}`}></div>
            
            {/* Status Lights */}
            <div className="status-lights">
              <div className="status-light"></div>
              <div className="status-light"></div>
              <div className="status-light"></div>
            </div>
          </div>
          
          {/* Robot Body Base */}
          <div className="robot-chest">
            <div className="chest-panel">
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
            </div>
          </div>
          
          {/* Pulse Ring */}
          <div className="pulse-ring"></div>
        </div>

        {/* Info Badge */}
        <div className="info-badge">
          <i className="fas fa-robot"></i> AI Assistant
        </div>
      </div>

      {/* Chat Bubble */}
      {isOpen && (
        <div className="chat-bubble">
          <div className="chat-header">
            <div className="chat-title">
              <i className="fas fa-robot"></i> About Maulya
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <div className="message-avatar">🤖</div>
                <div className="message-text">{msg}</div>
              </div>
            ))}
          </div>
          
          <div className="chat-footer">
            <button className="tell-more-btn" onClick={tellMeMore}>
              Tell me more! <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
