import React from "react";

export default function HISDisplay({ value }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px'
    }}>
      <div style={{
        width: '160px',
        height: '160px',
        border: '2px solid black',
        borderRadius: '50%',
        position: 'relative',
        backgroundColor: '#f9f9f9'
      }}>
        {/* חץ משולש שמסתובב לפי כיוון HIS */}
        <div style={{
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderBottom: '60px solid red',
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: `translateX(-50%) rotate(${value}deg)`,
          transformOrigin: 'bottom center',
          transition: 'transform 0.3s ease'
        }} />

        {/* סימוני כיוונים */}
        <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)' }}>0°</div>
        <div style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)' }}>180°</div>
        <div style={{ position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)' }}>270°</div>
        <div style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)' }}>90°</div>
      </div>

      {/* טקסט עם הכיוון הנוכחי */}
      <div style={{
        marginTop: '10px',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        HIS: {value}°
      </div>
    </div>
  );
}
