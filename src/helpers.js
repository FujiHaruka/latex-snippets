import dayjs from "dayjs";
import { useCallback } from "react";
import { processData } from "./Svg2PngWorker";

export const donwloadBlob = (objectUrl, filename) => {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = filename;
  a.href = objectUrl;
  a.click();
  a.remove();
  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1000);
};

export const Storage = {
  saveSnippet(text) {
    const key = `latex-snippets:${dayjs().unix()}`;
    window.localStorage.setItem(key, text);
  },
  listSnippets() {
    const keys = Object.keys(localStorage)
      .filter((key) => key.startsWith("latex-snippets:"))
      .map((key) => ({ key, date: Number(key.split(":").pop()) }))
      .filter(({ date }) => !Number.isNaN(date))
      .sort((a, b) => b.date - a.date)
      .map(({ key }) => key);
    const snippets = keys.map((key) => ({
      tex: window.localStorage.getItem(key),
      key,
    }));
    return snippets;
  },
  deleteSnippet(key) {
    window.localStorage.removeItem(key);
  },
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
        emSize: pngScale * pngScale * 2,
      });
      donwloadBlob(pngUrl, `${key.split(":").pop()}.png`);
    },
    [pngScale, svgScale]
  );
  return onDownload;
};
