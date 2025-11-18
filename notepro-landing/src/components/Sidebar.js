import React from 'react';
import { HomeIcon, StarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    // Barre latérale: fond blanc pur, bordure droite légère, hauteur fixe.
    <div className="w-64 bg-nlm-surface border-r border-nlm-border min-h-screen fixed top-0 left-0 p-4 shadow-sm">
      
      {/* Titre/Logo plus aligné sur le haut */}
      <div className="text-2xl font-normal text-nlm-text mb-6">
        Notebook
      </div>
      
      {/* Liens de navigation */}
      <nav>
        <ul>
          <li className="mb-1">
            <a href="#" className="flex items-center space-x-3 p-2 rounded text-nlm-text hover:bg-gray-100 transition duration-150">
              <HomeIcon className="h-5 w-5" />
              <span>Accueil</span>
            </a>
          </li>
          
          <li className="mb-1">
            {/* Lien actif: utilise la couleur primaire et un fond très clair pour l'état actif */}
            <a href="#" className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-nlm-accent hover:bg-blue-100 font-medium transition duration-150">
              <StarIcon className="h-5 w-5 text-nlm-accent" />
              <span>Mes Favoris</span>
            </a>
          </li>
          
          <li className="mb-1">
            <a href="#" className="flex items-center space-x-3 p-2 rounded text-nlm-text hover:bg-gray-100 transition duration-150">
              <Cog6ToothIcon className="h-5 w-5" />
              <span>Paramètres</span>
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;
