import { useState } from "react";
import Layout from "../src/components/Layout";
import FavoriteSiteCard from "../src/components/FavoriteSiteCard";
import Modal from "../src/components/Modal";

export default function Dashboard() {
  const [sites, setSites] = useState([
    { name: "Google", url: "https://www.google.com" },
    { name: "NotebookLM", url: "https://notebooklm.google.com" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSite, setNewSite] = useState({ name: "", url: "" });

  const handleAddSite = () => {
    setSites([...sites, newSite]);
    setNewSite({ name: "", url: "" });
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Mes sites favoris</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <FavoriteSiteCard key={index} name={site.name} url={site.url} />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Ajouter un site
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold mb-4">Ajouter un site</h2>
        <input
          type="text"
          placeholder="Nom du site"
          value={newSite.name}
          onChange={(e) => setNewSite({ ...newSite, name: e.target.value })}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="URL du site"
          value={newSite.url}
          onChange={(e) => setNewSite({ ...newSite, url: e.target.value })}
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <button
          onClick={handleAddSite}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
      </Modal>
    </Layout>
  );
}
