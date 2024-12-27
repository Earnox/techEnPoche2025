// /app/api/interventions/[id]/route.ts
import {NextResponse} from "next/server";

// Pour simplifier, on réutilise le même tableau (ou ta DB)
import {interventions} from "../route";
// Astuce: Tu peux export interventions depuis /api/interventions/route.ts,
// ou tu stockes ça dans un fichier global. À toi de voir.

export async function GET(request: Request, {params}: {params: {id: string}}) {
  const {id} = params;
  const found = interventions.find((inter) => inter.id === id);

  if (!found) {
    return NextResponse.json(
      {message: `Intervention ${id} introuvable`},
      {status: 404}
    );
  }

  return NextResponse.json(found);
}

export async function PUT(request: Request, {params}: {params: {id: string}}) {
  const {id} = params;
  console.log(id);
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
  {params}: {params: {id: string}}
) {
  const {id} = params;
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
