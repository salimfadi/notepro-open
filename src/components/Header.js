export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
      <h1 className="text-lg font-semibold">NotePro Dashboard</h1>
      <input
        type="text"
        placeholder="Rechercher..."
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
    </header>
  );
}
