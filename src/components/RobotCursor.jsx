import { useEffect, useState } from 'react';
import './RobotCursor.css';

export default function RobotCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trail.length * 0.3,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
      
      {/* Main robot cursor */}
      <div
        className={`robot-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Robot head */}
        <div className="robot-head">
          {/* Eyes */}
          <div className="robot-eyes">
            <div className="robot-eye left"></div>
            <div className="robot-eye right"></div>
          </div>
          
          {/* Antenna */}
          <div className="robot-antenna">
            <div className="antenna-ball"></div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="cursor-glow"></div>
        
        {/* Scan line */}
        <div className="scan-line"></div>
      </div>

      {/* Click ripple effect container */}
      <div id="click-ripples"></div>
    </>
  );
}
