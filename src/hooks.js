import { useCallback, useEffect, useState } from "react";
import { Storage } from "./helpers";

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
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((val) => !val), [setOpen]);
  return [open, toggleOpen];
};

export const useSnippetStorage = () => {
  const [snippets, setSnippets] = useState([]);
  const sync = useCallback(() => {
    const snippets = Storage.listSnippets();
    setSnippets(snippets);
  }, [setSnippets]);
  const deleteSnippet = useCallback(
    (key) => {
      Storage.deleteSnippet(key);
      sync();
    },
    [sync]
  );
  const addSnippet = useCallback(
    (tex) => {
      Storage.saveSnippet(tex);
      sync();
    },
    [sync]
  );
  useEffect(() => {
    sync();
  }, [sync]);
  return {
    addSnippet,
    deleteSnippet,
    snippets,
  };
};
