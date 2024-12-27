import React, {ChangeEvent} from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => (
  <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  </div>
);

export default TextInput;
