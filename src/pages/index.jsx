import { useState } from "react";
import useMessageEvent from "../hooks/useMessageEvent";

export default function ParentPage() {
  const [text, setText] = useState("");

  useMessageEvent("parent-channel", (ack, payload) => {
    setText((p) => p + "\n" + JSON.stringify(payload));
    ack({ messageChannel: "child-channel", payload: { success: true } });
  });

  const handleOpenChild = () => {
    window.open("/child", "newwindow");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Parent</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Output from parent
          </h2>
          <pre className="bg-gray-50 p-4 rounded-md border border-gray-200 h-[350px] overflow-auto font-mono text-sm">
            {text || "Awaiting message..."}
          </pre>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Child window
          </h2>
          <div className="space-x-4">
            <button
              onClick={handleOpenChild}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Open child window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
