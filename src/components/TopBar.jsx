export default function TopBar() {
  return (
    <div className="w-full h-14 border-b border-gray-200 bg-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-7 h-7"
        />
        <h1 className="text-lg font-semibold text-gray-800">Notebook</h1>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        <button className="hover:text-black transition">Aide</button>
        <button className="hover:text-black transition">Compte</button>
      </div>
    </div>
  );
}
