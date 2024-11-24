import { produce } from "immer";
import React, { useRef } from "react";
import { FieldContextProvider } from "../context/FieldContext";
import Form from "./Form";

export default function Editor() {
  const [fieldState, setFieldState] = React.useState({
    text: {
      value:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper est ut sem suscipit euismod. Suspendisse potenti. Donec cursus metus sollicitudin ex eleifend faucibus sollicitudin tempor velit. Maecenas id ultricies lectus.</p>",
      config: {
        type: "Tiptap",
        placeholder: "Placeholder...",
        label: "Text",
        props: { label: "Introduction Text" },
      },
    },
  });

  const onTextUpdate = React.useCallback(({ name, html, text }) => {
    setFieldState(
      produce((draft) => {
        draft[name].value = html;
      })
    );
  }, []);

  const ref = useRef(null);

  return (
    <FieldContextProvider form={fieldState} onTextUpdate={onTextUpdate}>
      <div className="wrap">
        <Form />
      </div>
    </FieldContextProvider>
  );
}
