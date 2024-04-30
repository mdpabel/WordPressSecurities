import React from 'react';

const PlaceholderCard: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    width: '290px',
    height: 'calc(290px / 1.5858)',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    background: '#ccc', // Placeholder background color
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const brandStyle: React.CSSProperties = {
    width: '50px', // Adjust the width based on your design
    height: '30px', // Adjust the height based on your design
    margin: '15px',
    background: '#fff', // Placeholder brand color
  };

  const numberStyle: React.CSSProperties = {
    height: '20px', // Adjust the height based on your design
    margin: '15px',
    background: '#fff', // Placeholder number color
  };

  const detailsStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px',
  };

  const detailStyle: React.CSSProperties = {
    width: '100px', // Adjust the width based on your design
    height: '15px', // Adjust the height based on your design
    background: '#fff', // Placeholder detail color
  };

  return (
    <div style={cardStyle}>
      <div style={brandStyle}></div>
      <div style={numberStyle}></div>
      <div style={detailsStyle}>
        <div style={detailStyle}></div>
        <div style={detailStyle}></div>
      </div>
    </div>
  );
};

export default PlaceholderCard;
