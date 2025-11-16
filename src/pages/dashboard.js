// src/pages/dashboard.js
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";

export default function Dashboard() {
  const notes = [
    { title: "Cours Physique", content: "Résumé du chapitre sur la mécanique." },
    { title: "Projet AutoCAD", content: "Idées pour le guide débutant." },
    { title: "Kickstarter", content: "Plan de campagne et visuels." },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </Layout>
  );
}
