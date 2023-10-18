// TextArea.tsx

import React from "react";
import "./TextArea.css"; // Import your CSS file for styling

interface TextAreaProps {
  label: string;
  value: string;
  id: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  id,
  name,
  onChange,
}) => {
  return (
    <>
      <label>{label}</label>
      <div></div>
      <textarea
        defaultValue={value}
        onChange={(e) => onChange(e)}
        className="w-full h-[214px] border border-gray-300 p-2 text-gray-600 text-sm italic bg-gray-100"
        id={id}
        name={name}
      />
    </>
  );
};

export default TextArea;
