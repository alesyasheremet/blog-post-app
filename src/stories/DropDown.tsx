// Dropdown.tsx

import React from 'react';
import './DropDown.css'; // Import your CSS file for styling

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, options, id, name, onChange }) => {
  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <select
        defaultValue={value}
        onChange={(e) => onChange(e)}
        id={id}
        name={name}
        className="dropdown-select"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
