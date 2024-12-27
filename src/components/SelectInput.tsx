import React, {ChangeEvent} from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
}) => (
  <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <select
      value={value}
      onChange={onChange}
      required={required}
      className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
      <option value=''>Sélectionnez une option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
