// CreditCard.tsx

import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';

interface CreditCardProps {
  brand: string;
  last4: string;
  cardHolder: string;
  expiryDate: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  brand,
  last4,
  cardHolder,
  expiryDate,
}) => {
  const getCardBackground = () => {
    switch (brand.toLowerCase()) {
      case 'amex':
        return 'amexBackground';
      case 'dankort':
        return 'dankortBackground';
      case 'dinersclub':
        return 'dinersclubBackground';
      case 'discover':
        return 'discoverBackground';
      case 'mastercard':
        return 'mastercardBackground';
      case 'visa':
        return 'visaBackground';
      case 'elo':
        return 'eloBackground';
      case 'hipercard':
        return 'hipercardBackground';
      default:
        return 'unknownBackground';
    }
  };

  const cardStyle: CSSProperties = {
    width: '290px',
    height: 'calc(290px / 1.5858)',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.5s ease-out',
    background: 'linear-gradient(25deg, #939393, #717171)',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardContentStyle: CSSProperties = {
    padding: '20px',
    color: '#fff',
  };

  const cardBrandStyle: CSSProperties = {
    fontSize: '17px',
    fontFamily: "'Consolas', 'Courier', 'monospace'",
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const cardNumberStyle: CSSProperties = {
    fontSize: '17px',
    fontFamily: "'Consolas', 'Courier', 'monospace'",
    marginTop: '15px',
  };

  const cardDetailsStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const cardLabelStyle: CSSProperties = {
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  };

  const cardValueStyle: CSSProperties = {
    fontSize: '17px',
    fontFamily: "'Consolas', 'Courier', 'monospace'",
  };

  const backgrounds: Record<string, string> = {
    amexBackground: 'linear-gradient(25deg, #308c67, #a3f2cf)',
    dankortBackground: 'linear-gradient(25deg, #ccc, #999)',
    dinersclubBackground: 'linear-gradient(25deg, #fff, #eee)',
    discoverBackground: 'linear-gradient(25deg, #fff, #eee)',
    mastercardBackground: 'linear-gradient(25deg, #e8e9e5, #fbfbfb)',
    visaBackground: 'linear-gradient(25deg, #0f509e, #1399cd)',
    eloBackground: 'linear-gradient(25deg, #211c18, #aaa7a2)',
    hipercardBackground: 'linear-gradient(25deg, #8b181b, #de1f27)',
    unknownBackground: 'linear-gradient(25deg, #999, #999)',
  };

  return (
    <div style={{ ...cardStyle, background: backgrounds[getCardBackground()] }}>
      <div style={cardContentStyle}>
        <div style={cardBrandStyle}>{brand}</div>
        <div style={cardNumberStyle}>**** **** **** {last4}</div>
        <div style={cardDetailsStyle}>
          <div>
            <div style={cardLabelStyle}>Card Holder</div>
            <div style={cardValueStyle}>{cardHolder}</div>
          </div>
          <div>
            <div style={cardLabelStyle}>Expires</div>
            <div style={cardValueStyle}>{expiryDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
