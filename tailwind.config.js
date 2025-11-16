/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Liste des fichiers où Tailwind doit chercher les classes
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", // Ajoutez ceci si vous avez un fichier HTML principal
  ],

// tailwind.config.js

module.exports = {
  // ... autres sections (content, plugins)

  theme: {
    extend: {
      // AJOUTEZ VOS COULEURS ICI
      colors: {
        // 1. Couleurs Simples de Marque
        'primary': '#0070f3',   // Utilisable comme: bg-primary, text-primary
        'secondary': '#16161a', // Utilisable comme: border-secondary

        // 2. Couleurs d'État
        'success': '#2ecc71',
        'warning': '#f39c12',
        'error': '#e74c3c',

        // 3. Créer une Échelle de Couleurs Personnalisée (très flexible)
        'brand-gray': {
          100: '#f7f7f9', // Clair
          500: '#95a5a6', // Moyen
          900: '#34495e', // Foncé (Utilisable comme: bg-brand-gray-900)
        },
      },
      
      // Vous pouvez ajouter d'autres personnalisations ici (spacing, fontFamily...)
    },
  },

  // ...
};
  plugins: [
    // Ajoutez ici vos plugins, si nécessaire (ex: require('@tailwindcss/forms'))
  ],
};
