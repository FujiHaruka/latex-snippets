import dayjs from "dayjs";

export const donwloadBlob = (objectUrl, ext) => {
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = Math.random().toString(32).substring(2) + ext;
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
