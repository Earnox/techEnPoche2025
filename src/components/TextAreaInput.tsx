import React, {ChangeEvent} from "react";

interface TextAreaInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
}) => (
  <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
      rows={4}
    />
  </div>
);

export default TextAreaInput;
