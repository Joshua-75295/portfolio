import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-10); // Keep last 10 positions
      });
      
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      
      {/* Trail */}
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="cursor-trail"
          style={{
            left: pos.x - 4,
            top: pos.y - 4,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;