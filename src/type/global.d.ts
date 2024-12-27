//   {
//   id: "C12",
//   poste: "Réception",
//   date: "2024-12-27",
//   categorie: "Eclairage",
//   status: "Attente",
//   description: "Ampoule hotte HS...",
//   lieu: "104",
// },
export {};

declare global {
  interface Intervention {
    id: string;
    date: string;
    location: string;
    status: string;
    categorie?: string;
    status?: string;
    description?: string;
    lieu: string;
    comment?: string;
  }

  // Ajoutez d'autres types ou interfaces globales ici
}
