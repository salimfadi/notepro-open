import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddSite() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSite = { name, url };

    // Charger l'existant
    const saved = localStorage.getItem('sites');
    const sites = saved ? JSON.parse(saved) : [];

    // Ajouter le nouveau site
    sites.push(newSite);

    // Enregistrer dans localStorage
    localStorage.setItem('sites', JSON.stringify(sites));

    // Retour à l'accueil
    router.push('/');
  };

  return (
    <div>
      <h1>Ajouter un site</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du site :</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>URL :</label>
          <input 
            type="url" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
