"use client";

import React, {useState, useEffect} from "react";
import InterventionRow from "@/components/InterventionRow";
import api from "@/utils/InterventionAPI";

const InterventionTable: React.FC = () => {
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getInterventions();
        setInterventions(data);
      } catch (err) {
        console.error(err);
        setError("Erreur lors de la récupération des interventions");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Interventions en cours</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-300'>
          <thead>
            <tr>
              <th className='px-4 py-2 border-b'>Date Post</th>
              <th className='px-4 py-2 border-b'>Lieu</th>
              <th className='px-4 py-2 border-b'>Statut</th>
            </tr>
          </thead>
          <tbody>
            {interventions.map((intervention) => (
              <InterventionRow
                key={intervention.id}
                id={intervention.id}
                date={intervention.date}
                location={intervention.lieu}
                status={intervention.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterventionTable;
