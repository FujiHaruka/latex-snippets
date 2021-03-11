import { useCallback, useState } from "react";

export const useTextInput = (initText) => {
  const [text, setText] = useState(initText);
  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );
  return {
    text,
    onChangeText,
  };
};
