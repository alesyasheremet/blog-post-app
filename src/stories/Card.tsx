// Card.tsx

import React from "react";

interface CardProps {
  content: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  content, 
  title
}) => {
  return (
    <div className="shadow-md">
    <img className="w-full" src="/assets/blogpost.png" />
    <div className="p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="p-4"></div>
      <div className="text-xs">{content}</div>
    </div>
  </div>
  );
};

export default Card;
