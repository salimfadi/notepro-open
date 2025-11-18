import { useState, useEffect } from 'react';

export default function Home() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('sites');
    if (saved) {
      setSites(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>Mes sites favoris</h1>
      <ul>
        {sites.map((site, index) => (
          <li key={index}>
            <a href={site.url} target="_blank">{site.name}</a>
          </li>
        ))}
      </ul>

      <a href="/add-site">Ajouter un site</a>
    </div>
  );
}
