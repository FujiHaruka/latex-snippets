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

export const useToggle = (initBool) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen((val) => !val), [setOpen])
  return [
    open,
    toggleOpen,
  ]
}
