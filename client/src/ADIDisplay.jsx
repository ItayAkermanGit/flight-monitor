import React from "react";

export default function ADIDisplay({ value }) {
  let backgroundColor;

  if (value > 0) backgroundColor = 'blue';
  else if (value < 0) backgroundColor = 'green';
  else backgroundColor = '#ccc'; // אפור אם 0

  return (
    <div style={{
      width: '160px',
      height: '160px',
      border: '2px solid black',
      borderRadius: '50%',
      margin: '20px',
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white'
    }}>
      ADI: {value}
    </div>
  );
}
