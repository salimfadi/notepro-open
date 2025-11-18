import Split from "react-split";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ChatArea from "./components/ChatArea";
import "./index.css";

export default function App() {
  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100 text-gray-900">
      <Split className="h-full flex" sizes={[20, 50, 30]} minSize={[200, 300, 200]} gutterSize={8}>
        <Sidebar />
        <div className="flex flex-col">
          <TopBar />
          <ChatArea />
        </div>
        <div className="bg-white p-4 overflow-auto">
          <h2 className="font-bold text-lg mb-4">Studio</h2>
          <div className="grid grid-cols-1 gap-3">
            <button className="w-full p-3 border rounded hover:bg-gray-50">📘 Study Guide</button>
            <button className="w-full p-3 border rounded hover:bg-gray-50">📝 Briefing Doc</button>
            <button className="w-full p-3 border rounded hover:bg-gray-50">🔊 Audio Overview</button>
            <button className="w-full p-3 border rounded hover:bg-gray-50">🧠 Mind Map</button>
          </div>
        </div>
      </Split>
    </div>
  );
}
