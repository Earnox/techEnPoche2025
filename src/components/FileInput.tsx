import React, {ChangeEvent} from "react";

interface FileInputProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  onChange,
  required = false,
}) => (
  <div className='mb-4'>
    <label className='block text-gray-700 font-semibold mb-2'>{label}</label>
    <input
      type='file'
      onChange={onChange}
      required={required}
      className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  </div>
);

export default FileInput;
