// app/cv/page.tsx (Version Ultra-Simplifiée)

import CVEntry from "@/components/CVEntry";

export default function CVPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white dark:bg-zinc-900 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-blue-600">Expérience</h1>

      <CVEntry title="Stage" employer="en recherche" date="avril-mai 2026">
        <ul>
          <li>Développement Front-end avec React et Tailwind CSS.</li>
          <li>Optimisation du code pour la performance mobile.</li>
        </ul>
      </CVEntry>

      <CVEntry title="TEST" employer="ECAM" date="2025-..">
        <ul>
          <li>cours de web CSS.</li>
          <li>cours d'administration linux.</li>
        </ul>
      </CVEntry>
    </div>
  );
}
