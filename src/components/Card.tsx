import React from 'react';
import '../style/Card.css'

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
