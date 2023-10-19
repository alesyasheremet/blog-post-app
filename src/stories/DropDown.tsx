// Dropdown.tsx

import React from "react";

export interface DropDownOptions {
  id: number;
  name: string;
}

interface DropdownProps {
  label: string;
  value: string;
  options: DropDownOptions[];
  id: string;
  key: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  id,
  name,
  key,
  onChange,
}) => {
  return (
    <div className="dropdown">
      <label className="py-3">{label}</label>
      <div></div>
      <select
        defaultValue={value}
        onChange={(e) => onChange(e)}
        id={id}
        name={name}
        className="w-full border border-gray-300 p-2 text-gray-600 text-sm italic placeholder-grey-500 bg-gray-100"
      >
        <option value="">Geen</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
