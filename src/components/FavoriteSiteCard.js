function FavoriteSiteCard({ name, url, onDelete }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h2 className="font-semibold text-gray-800">{name}</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm block mb-3"
      >
        {url}
      </a>
      {onDelete && (
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
        >
          Supprimer
        </button>
      )}
    </div>
  );
}

// ✅ Export par défaut obligatoire
export default FavoriteSiteCard;
