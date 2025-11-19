export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-6 font-bold text-xl text-blue-600">NotePro</div>
      <nav className="space-y-2 px-4">
        {/* Exemple avec Heroicons v2 */}
        <a href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-100">
          <svg className="h-5 w-5 mr-2" /> Dashboard
        </a>
      </nav>
    </aside>
  );
}
