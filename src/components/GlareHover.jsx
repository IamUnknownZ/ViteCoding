import { useRef } from 'react';

const GlareHover = ({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '-100% -100%, 0 0';
  };

  // หัวใจสำคัญ: ปรับสไตล์ให้เป็น Mask อยู่บนตัวอักษร
  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(${glareAngle}deg, 
                transparent 40%, 
                ${rgba} 50%, 
                transparent 60%)`,
    backgroundSize: `${glareSize}% ${glareSize}%`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%',
    pointerEvents: 'none',
    // บังคับให้ background ปรากฏเฉพาะบนตัวอักษร
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent', // ทำให้สีข้อความเดิมโปร่งใสเพื่อโชว์แสง
  };

  return (
    <div
      className={`relative inline-block overflow-hidden cursor-pointer ${className}`}
      style={{ 
        background: 'transparent', // เอาพื้นหลังสีดำออก
        border: 'none',            // เอาเส้นขอบออก
        ...style 
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {/* ชั้นแสง Glare ที่จะวิ่งบนตัวอักษร */}
      <div ref={overlayRef} style={overlayStyle}>
        {children}
      </div>
      
      {/* ชั้นตัวอักษรฐาน (เพื่อให้มองเห็นข้อความปกติ) */}
      <div style={{ color: 'white' }}>
        {children}
      </div>
    </div>
  );
};

export default GlareHover;