import Layout from "../components/Layout";
import FavoriteSiteCard from "../components/FavoriteSiteCard";

export default function Favorites() {
  const sites = [
    { name: "Google", url: "https://www.google.com" },
    { name: "NotebookLM", url: "https://notebooklm.google.com" },
    { name: "NotePro", url: "https://tonsite.com" },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Mes sites favoris</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <FavoriteSiteCard key={index} name={site.name} url={site.url} />
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover>
        Ajouter un site
      </button>
    </Layout>
  );
}

// src/pages/favorites.js
import Layout from "../components/Layout";
import FavoriteSiteCard from "../components/FavoriteSiteCard";

export default function Favorites() {
  const sites = [
    { name: "Google", url: "https://www.google.com" },
    { name: "NotebookLM", url: "https://notebooklm.google.com" },
    { name: "NotePro", url: "https://tonsite.com" },
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Mes sites favoris</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <FavoriteSiteCard key={index} name={site.name} url={site.url} />
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Ajouter un site
      </button>
    </Layout>
  );
}
