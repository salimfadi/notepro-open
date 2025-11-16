export default function Sidebar() {
  return (
    <div className="w-72 bg-white border-r border-gray-200 p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-4">Notebook</h1>
      <button className="w-full text-left px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        + Nouveau document
      </button>

      <div className="mt-6 space-y-2">
        <p className="text-gray-500 text-sm">Vos documents</p>
        {[1, 2, 3].map((i) => (
          <div key={i} className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            Document {i}
          </div>
        ))}
      </div>
    </div>
  );
}
