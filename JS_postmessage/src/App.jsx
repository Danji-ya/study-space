import { useEffect, useState } from "react";
import { TEST_URL } from "./main";

function App() {
  const [message, setMessage] = useState("");

  const handleOpenPopup = () => {
    const width = 600;
    const height = 800;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(
      TEST_URL,
      "test",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  useEffect(() => {
    const childResponse = (event) => {
      if (!event?.data) return;
      const message = event.data?.message;
      if (!message) return;

      setMessage(message);
    };
    window.addEventListener("message", childResponse);
    return () => window.removeEventListener("message", childResponse);
  }, []);

  return (
    <>
      <main>
        <h1>test</h1>
        <div>
          <p>{message}</p>
          <button onClick={handleOpenPopup}>팝업 열기</button>
        </div>
      </main>
    </>
  );
}

export default App;
