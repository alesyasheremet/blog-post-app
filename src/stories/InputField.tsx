// InputText.tsx

import React from "react";

interface InputTextProps {
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

const InputField: React.FC<InputTextProps> = ({
  label,
  value,
  id,
  name,
  onChange,
}) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <input
        type="text"
        defaultValue={value}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        className="border border-gray-300 p-2 text-gray-600 text-sm italic placeholder-grey-500 bg-gray-100"
        placeholder="Geen titel"
      />
    </div>
  );
};

export default InputField;
