export default function ChatArea() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-500 text-sm mb-4">Commencez une conversation</p>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-lg w-fit">
            Bonjour, comment puis-je t’aider aujourd’hui ?
          </div>
        </div>
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Écrire un message..."
            className="flex-1 bg-white border px-3 py-2 rounded-l-lg outline-none"
          />
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-r-lg">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
