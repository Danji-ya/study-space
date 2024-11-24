import React from "react";
import { FieldContext } from "../context/FieldContext";
import Tiptap from "./Tiptap";

const FIELDS = {
  Tiptap,
};

export default function Form() {
  const context = React.useContext(FieldContext);

  return (
    <div className="box">
      <h1>Test Markdown</h1>

      <p className="info">
        Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
      </p>

      <div className="fieldSet">
        {Object.keys(context.form).map((key, i) => {
          const type = context.form[key].config.type;
          const value = context.form[key].value;
          const child = context.form[key]?.child || {};
          const label = context.form[key].config.props.label;
          const Field = FIELDS[type];

          return (
            <Field
              key={key + i}
              label={label}
              child={child}
              value={value}
              onTextUpdate={context.onTextUpdate}
              name={key}
            />
          );
        })}
      </div>
    </div>
  );
}
