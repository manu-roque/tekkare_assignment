// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
