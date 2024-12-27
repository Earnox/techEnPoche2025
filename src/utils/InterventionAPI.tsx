class InterventionAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Récupérer toutes les interventions
  async getInterventions(): Promise<Intervention[]> {
    const res = await fetch(`${this.baseUrl}/api/interventions`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch interventions");
    }
    return res.json();
  }

  // Récupérer une intervention par ID
  async getInterventionById(id: string): Promise<Intervention> {
    const res = await fetch(`${this.baseUrl}/api/interventions/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch intervention with id ${id}`);
    }
    return res.json();
  }
}

// Exporter une instance de la classe avec la configuration de l'URL
const apiInstance = new InterventionAPI(process.env.NEXT_PUBLIC_BASE_URL!);
export default apiInstance;
