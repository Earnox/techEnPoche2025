import React from "react";

interface InterventionCardProps {
  intervention: Intervention;
}

const InterventionCard: React.FC<InterventionCardProps> = ({intervention}) => (
  <div className='bg-white shadow-md rounded p-4'>
    <h2 className='text-xl font-bold mb-2'>{intervention.location}</h2>
    <p>
      <strong>Date Post :</strong> {intervention.date}
    </p>
    <p>
      <strong>Catégorie :</strong> {intervention.categorie}
    </p>
    <p>
      <strong>Nature de l&apos;intervention :</strong>{" "}
      {intervention.description}
    </p>
    <p>
      <strong>Statut :</strong> {intervention.status}
    </p>
    <p>
      <strong>Remarque :</strong> {intervention.comment}
    </p>
    <button
      onClick={() => window.history.back()}
      className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
      Retour
    </button>
  </div>
);

export default InterventionCard;
