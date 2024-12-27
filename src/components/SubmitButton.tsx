import React from "react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({label}) => (
  <div className='text-center'>
    <button
      type='submit'
      className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
      {label}
    </button>
  </div>
);

export default SubmitButton;
