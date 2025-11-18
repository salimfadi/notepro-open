export default function SiteList({ sites }) {
  if (!sites || sites.length === 0) {
    return <p>Aucun site enregistré pour le moment.</p>;
  }

  return (
    <ul>
      {sites.map((site, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          <a 
            href={site.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              fontWeight: 'bold', 
              color: 'blue', 
              textDecoration: 'underline' 
            }}
          >
            {site.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
