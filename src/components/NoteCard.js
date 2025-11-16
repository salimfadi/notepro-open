// src/components/NoteCard.js
export default function NoteCard({ title, content }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h2 className="font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm">{content}</p>
    </div>
  );
}
