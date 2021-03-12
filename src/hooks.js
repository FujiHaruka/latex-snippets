import { useMemo } from "react";
import { useCallback, useState } from "react";
import { donwloadBlob, Storage } from "./helpers";
import { processData } from "./Svg2PngWorker";

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
    onResetText: setText,
  };
};

export const useToggle = (initBool) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(
    (arg) => {
      if (typeof arg === "boolean") {
        setOpen(arg);
      } else {
        setOpen((val) => !val);
      }
    },
    [setOpen]
  );
  return [open, toggleOpen];
};

export const useSnippetStorage = () => {
  const init = useMemo(() => Storage.listSnippets(), []);
  const [snippets, setSnippets] = useState(init);
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
  return {
    addSnippet,
    deleteSnippet,
    snippets,
    topSnippet: snippets[0]?.tex,
  };
};

export const useDownloadPng = ({ pngScale, svgScale }) => {
  const onDownload = useCallback(
    async (snippet) => {
      const { tex, key } = snippet;
      const svg = await window.MathJax.tex2svgPromise(tex, {
        display: false,
      }).then((svg) => {
        const svgText = svg.firstElementChild.outerHTML;
        const width =
          svg.firstElementChild.width.baseVal.valueInSpecifiedUnits * svgScale;
        const height =
          svg.firstElementChild.height.baseVal.valueInSpecifiedUnits * svgScale;
        return {
          svgText,
          width,
          height,
        };
      });
      const width = svg.width * pngScale;
      const height = svg.height * pngScale;
      const { pngUrl } = await processData({
        svg: svg.svgText,
        width,
        height,
        emSize: svgScale * pngScale * 2,
      });
      donwloadBlob(pngUrl, `${key.split(":").pop()}.png`);
    },
    [pngScale, svgScale]
  );
  return onDownload;
};
