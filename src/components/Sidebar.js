import { HomeIcon, StarIcon } from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-6 font-bold text-xl text-blue-600">NotePro</div>
      <nav className="space-y-2 px-4">
        <a href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-100">
          <HomeIcon className="h-5 w-5 mr-2" />
          Dashboard
        </a>
        <a href="/favorites" className="flex items-center p-2 rounded hover:bg-gray-100">
          <StarIcon className="h-5 w-5 mr-2" />
          Favoris
        </a>
      </nav>
    </aside>
  );
}
