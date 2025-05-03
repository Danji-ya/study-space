import { useState } from "react";
import useMessageEvent from "../hooks/useMessageEvent";

export default function ChildPage() {
  const [text, setText] = useState("");
  const { sendToParent } = useMessageEvent(
    "child-channel",
    (_send, payload) => {
      setText((p) => p + "\n" + JSON.stringify(payload));
    }
  );

  const handleSendMessage = () => {
    sendToParent({
      messageChannel: "parent-channel",
      payload: { message: "Hello from child!" },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Child</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Output from child
          </h2>
          <pre className="bg-gray-50 p-4 rounded-md border border-gray-200 h-[350px] overflow-auto font-mono text-sm">
            {text || "Awaiting message..."}
          </pre>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Send message to parent
          </h2>
          <button
            onClick={handleSendMessage}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
