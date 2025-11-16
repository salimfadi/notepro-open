export default function FavoriteSiteCard({ name, url }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h2 className="font-semibold text-gray-800">{name}</h2>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        {url}
      </a>
    </div>
  );
}
