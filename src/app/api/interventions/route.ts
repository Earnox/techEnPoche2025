// /app/api/interventions/route.ts
import {NextResponse} from "next/server";

// Petit mock pour la démo
export const interventions = [
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

// 1) GET -> Récupération de TOUTES les interventions
export async function GET() {
  console.log("GET /api/interventions TRIGGERD");
  console.log(interventions);
  return NextResponse.json(interventions);
}

// 2) POST -> Création d'une nouvelle intervention
export async function POST(request: Request) {
  const body = await request.json();

  // Génération d'un ID bidon
  const newInter = {
    id: Math.random().toString(36).substring(2, 9).toUpperCase(),
    ...body,
  };

  interventions.push(newInter);
  return NextResponse.json(newInter, {status: 201});
}
