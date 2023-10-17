// InputText.tsx

import React from 'react';
import './InputText.css'; // Import your CSS file for styling


interface InputTextProps {
  label: string;
  value: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ label, value, id, name, onChange }) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <input
        type="text"
        defaultValue={value}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        className="input-text"
      />
    </div>
  );
};

export default InputText;