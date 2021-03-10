import "./App.css";
import { useEffect, useState } from "react";
import { useMathJaxContext } from "./MathJaxLoader";

// eslint-disable-next-line
import Worker from "comlink-loader!./Svg2PngWorker";

const worker = new Worker();

function App() {
  const { ready } = useMathJaxContext();
  const [tex, setTex] = useState("ax^2=c");
  const [imgSrc, setImgSrc] = useState("");
  const [imgSize, setImgSize] = useState({ width: 200, height: 200 });
  useEffect(() => {
    if (!ready) {
      return;
    }
    window.MathJax.tex2svgPromise(tex, {
      em: 16,
      ex: 8,
      scale: 2,
      display: true,
    }).then(async (tex) => {
      window.tex = tex;
      const width =
        tex.firstElementChild.width.baseVal.valueInSpecifiedUnits * 32;
      const height =
        tex.firstElementChild.height.baseVal.valueInSpecifiedUnits * 32;
      console.log({ width, height });
      const { pngUrl } = await worker.processData({
        svg: tex.outerHTML,
        width,
        height,
      });
      setImgSrc(pngUrl);
    });
  }, [ready, tex]);
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header-title">LaTeX to Image</h2>
      </header>
      <div className="App-body">
        <div className="App-body-col">
          <textarea
            className="App-textarea"
            value={tex}
            onChange={(e) => setTex(e.target.value)}
          />
        </div>
        <div className="App-body-col">
          <img
            className="App-image"
            src={imgSrc}
            width="236"
            height="70"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
