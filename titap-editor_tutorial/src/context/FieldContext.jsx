import React from "react";

export const FieldContext = React.createContext({
  form: {},
  onTextUpdate: {},
});

export function FieldContextProvider(props) {
  const value = React.useMemo(
    () => ({
      form: props.form,
      onTextUpdate: props.onTextUpdate,
    }),
    [props]
  );

  return (
    <FieldContext.Provider value={value}>
      {props.children}
    </FieldContext.Provider>
  );
}
