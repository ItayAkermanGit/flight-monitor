import React from "react";

export default function AltitudeDisplay({ value }) {
  const heightPercent = (value / 3000) * 100;

  return (
    <div style={{
      height: '300px',
      width: '60px',
      border: '1px solid black',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '20px'
    }}>
      <div style={{
        width: '100%',
        height: `${heightPercent}%`,
        backgroundColor: 'blue',
        transition: 'height 0.3s ease'
      }} />
    </div>
  );
}
