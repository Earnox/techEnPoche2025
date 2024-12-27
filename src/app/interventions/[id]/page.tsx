"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import api from "@/utils/InterventionAPI";
import InterventionCard from "@/components/InterventionCard";

const InterventionDetails = ({params}: {params: Promise<{id: string}>}) => {
  const [intervention, setIntervention] = useState<Intervention | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unwrappedParams, setUnwrappedParams] = useState<{id: string} | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setUnwrappedParams(resolvedParams);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (unwrappedParams) {
      const fetchIntervention = async () => {
        try {
          const data = await api.getInterventionById(unwrappedParams.id);
          setIntervention(data);
        } catch (err) {
          console.error(err);
          setError(
            "Erreur lors de la récupération des détails de l’intervention"
          );
        } finally {
          setLoading(false);
        }
      };
      fetchIntervention();
    }
  }, [unwrappedParams]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='container mx-auto p-4'>
      {intervention && <InterventionCard intervention={intervention} />}
      <div className='mt-4'>
        <button
          className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'
          onClick={() => router.push("/interventions")}>
          Retour à la liste
        </button>
      </div>
    </div>
  );
};

export default InterventionDetails;
