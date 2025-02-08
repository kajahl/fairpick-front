import React from "react";

interface ButtonComponentProps {
  text: string;
  onClick: () => void;
  color?: string;
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  onClick,
  className,
  color,
}) => {
  const bgColor = color || "blue";
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer m-4 px-4 py-2 bg-${bgColor}-500 text-white rounded-lg shadow-md hover:bg-${bgColor}-700 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
