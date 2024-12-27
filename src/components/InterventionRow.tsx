import React from "react";
import {useRouter} from "next/navigation";

interface InterventionRowProps {
  id: string;
  date: string;
  location: string;
  status: string;
}

const InterventionRow: React.FC<InterventionRowProps> = ({
  id,
  date,
  location,
  status,
}) => {
  const router = useRouter();

  const handleRowClick = () => {
    router.push(`/interventions/${id}`);
  };

  return (
    <tr
      className='border-b cursor-pointer hover:bg-gray-100'
      onClick={handleRowClick}>
      <td className='px-4 py-2'>{date}</td>
      <td className='px-4 py-2'>{location}</td>
      <td className='px-4 py-2'>{status}</td>
    </tr>
  );
};

export default InterventionRow;
