import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopBar />

        <div className="p-6">
          <h2 className="text-2xl font-bold">Bienvenue !</h2>
          <p className="mt-2 text-gray-600">
            Interface en construction… bientôt comme NotebookLM ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
