import {NextResponse} from "next/server";
// import {interventions} from "../route";
const interventions = [
  {
    id: "A47",
    poste: "Réception",
    date: "2024-12-26",
    categorie: "Mobilier",
    status: "Demande",
    description: "Départ 17h...",
    lieu: "103",
  },
  {
    id: "C12",
    poste: "Réception",
    date: "2024-12-27",
    categorie: "Eclairage",
    status: "Attente",
    description: "Ampoule hotte HS...",
    lieu: "104",
  },
  // etc...
];
export async function GET(
  request: Request,
  {params}: {params: Promise<{id: string}>}
) {
  const {id} = await params;
  const found = interventions.find((inter) => inter.id === id);

  if (!found) {
    return NextResponse.json(
      {message: `Intervention ${id} introuvable`},
      {status: 404}
    );
  }

  return NextResponse.json(found);
}

export async function PUT(
  request: Request,
  {params}: {params: Promise<{id: string}>}
) {
  const {id} = await params;
  const body = await request.json();

  const index = interventions.findIndex((inter) => inter.id === id);

  if (index === -1) {
    return NextResponse.json(
      {message: `Intervention ${id} introuvable`},
      {status: 404}
    );
  }

  // Mise à jour (ex: merges old data et new data)
  interventions[index] = {...interventions[index], ...body};

  return NextResponse.json(interventions[index]);
}

export async function DELETE(
  request: Request,
  {params}: {params: Promise<{id: string}>}
) {
  const {id} = await params;
  const index = interventions.findIndex((inter) => inter.id === id);

  if (index === -1) {
    return NextResponse.json(
      {message: `Intervention ${id} introuvable`},
      {status: 404}
    );
  }

  interventions.splice(index, 1);
  return NextResponse.json({message: `Intervention ${id} supprimée`});
}
