"use client";

import React, {useState, ChangeEvent, FormEvent} from "react";
import TextInput from "@/components/TextInput";
import SelectInput from "@/components/SelectInput";
import TextAreaInput from "@/components/TextAreaInput";
import DateTimeInput from "@/components/DateTimeInput";
import FileInput from "@/components/FileInput";
import SubmitButton from "@/components/SubmitButton";

const NewInterventionPage: React.FC = () => {
  const [lieu, setLieu] = useState<string>("");
  const [categorie, setCategorie] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dateIntervention, setDateIntervention] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const categorieOptions = [
    {value: "electricite", label: "Électricité"},
    {value: "eclairage", label: "Éclairage"},
    {value: "plomberie", label: "Plomberie"},
    {value: "electromenager", label: "Électroménager"},
    {value: "mobilier", label: "Mobilier"},
    {value: "piscine_spa", label: "Piscine & SPA"},
    {value: "peinture_enduit", label: "Peinture/Enduit"},
    {value: "autre", label: "Autre"},
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire
    console.log({lieu, categorie, description, dateIntervention, file});
  };

  return (
    <div className='max-w-lg mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Nouvelle Intervention</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <TextInput
          label='Lieu'
          value={lieu}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLieu(e.target.value)
          }
          placeholder="Entrez le lieu de l'intervention"
          required
        />
        <SelectInput
          label='Catégorie'
          value={categorie}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCategorie(e.target.value)
          }
          options={categorieOptions}
          required
        />
        <TextAreaInput
          label='Description'
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          placeholder="Décrivez l'intervention"
          required
        />
        <DateTimeInput
          label="Date et Heure de l'Intervention"
          value={dateIntervention}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDateIntervention(e.target.value)
          }
          required
        />
        <FileInput
          label='Ajouter une Image'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
        />
        <SubmitButton label='Créer Intervention' />
      </form>
    </div>
  );
};

export default NewInterventionPage;
