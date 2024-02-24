import { useEffect } from "react";

const postMessage = (data, target, origin = "*") =>
  target?.postMessage(data, origin);

function Window() {
  useEffect(() => {
    if (!window.opener) {
      window.close();
    }
  });

  const sendToParent = (data) => {
    if (typeof window === "undefined") return;
    const { opener } = window;

    postMessage(data, opener);
  };

  const onChangeHandler = (event) => {
    const { value } = event.currentTarget;

    const data = {
      type: "name input",
      message: value,
    };

    sendToParent(data);
  };

  return (
    <main>
      <h1>Child Window</h1>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        onChange={onChangeHandler}
        placeholder="Enter your name"
      ></input>
    </main>
  );
}

export default Window;
