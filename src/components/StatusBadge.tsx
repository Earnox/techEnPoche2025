import React from "react";

interface StatusBadgeProps {
  status: string;
}

const statusColors: {[key: string]: string} = {
  Demande: "bg-yellow-200 text-yellow-800",
  "À Commander": "bg-orange-200 text-orange-800",
  Attente: "bg-blue-200 text-blue-800",
  Résolue: "bg-green-200 text-green-800",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({status}) => {
  const colorClass = statusColors[status] || "bg-gray-200 text-gray-800";
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-semibold ${colorClass}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
