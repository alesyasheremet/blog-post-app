// TextArea.tsx

import React from 'react';
import './TextArea.css'; // Import your CSS file for styling

interface TextAreaProps {
  label: string;
  value: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, id, name, onChange }) => {
  return (
    <div className="text-area">
      <label className="text-area-label">{label}</label>
      <textarea
        defaultValue={value}
        onChange={(e) => onChange(e)}
        className="text-area-input"
        id={id}
        name={name}
      />
    </div>
  );
};

export default TextArea;
