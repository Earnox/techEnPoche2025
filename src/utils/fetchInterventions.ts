export const fetchInterventions = async (): Promise<Intervention[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/interventions`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error("Failed to fetch interventions");
  }
  return data;
};
