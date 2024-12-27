import React, {ChangeEvent} from "react";

interface DateTimeInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  label,
  value,
  onChange,
  required = false,
}) => (
  <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <input
      type='datetime-local'
      value={value}
      onChange={onChange}
      required={required}
      className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  </div>
);

export default DateTimeInput;
