import "./App.css";
import { useEffect, useState } from "react";
import { useMathJaxContext } from "./MathJaxLoader";

// eslint-disable-next-line
import Worker from "comlink-loader!./Svg2PngWorker";

const worker = new Worker();

const EX_SIZE = 64;

function App() {
  const { ready } = useMathJaxContext();
  const [tex, setTex] = useState("ax^2=c");
  const [imgSrc, setImgSrc] = useState({ src: "", width: 0, height: 0 });
  useEffect(() => {
    if (!ready) {
      return;
    }
    window.MathJax.tex2svgPromise(tex, {
      display: false,
    }).then(async (tex) => {
      window.tex = tex;
      const width =
        tex.firstElementChild.width.baseVal.valueInSpecifiedUnits * EX_SIZE;
      const height =
        tex.firstElementChild.height.baseVal.valueInSpecifiedUnits * EX_SIZE;
      const { pngUrl } = await worker.processData({
        svg: tex.outerHTML,
        width,
        height,
        emSize: EX_SIZE * 2,
      });
      setImgSrc({
        src: pngUrl,
        width: width / 4,
        height: height / 4,
      });
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
          {imgSrc.src && (
            <img
              className="App-image"
              src={imgSrc.src}
              width={imgSrc.width}
              height={imgSrc.height}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
