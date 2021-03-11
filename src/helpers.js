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
