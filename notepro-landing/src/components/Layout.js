import React from 'react';
import Sidebar from './Sidebar'; 

const Layout = ({ children }) => {
  return (
    // Utilisez la couleur de fond nlm-bg et la couleur de texte nlm-text
    <div className="min-h-screen bg-nlm-bg text-nlm-text antialiased"> 
      
      {/* 1. La barre latérale (fixe à gauche) */}
      <Sidebar />

      {/* 2. Le conteneur du contenu principal avec un ml-64 pour l'espace */}
      <div className="ml-64"> 
        
        {/* L'en-tête est simple et blanc, sans ombre lourde */}
        <header className="bg-nlm-surface border-b border-nlm-border p-4 sticky top-0 z-10">
          {/* Le titre est une simple démonstration */}
          <h1 className="text-xl font-medium">
            NotebookLM Project
          </h1>
        </header>
        
        {/* Le contenu principal */}
        <main className="p-8">
          {children}
        </main>

        {/* Pas de footer visible sur NotebookLM, nous le laissons simple ou le retirons */}
      </div>
      
    </div>
  );
};

export default Layout;
