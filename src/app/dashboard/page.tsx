export default async function DashboardPage() {
  // On fetch depuis le server component (SSR)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/interventions`,
    {
      cache: "no-store", // pour revalider à chaque requête
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {/* {data.map((inter) => (
        <div key={inter.id}>{inter.poste}</div>
      ))} */}
      wip
    </div>
  );
}
