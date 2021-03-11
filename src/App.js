import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { useMathJaxContext } from "./MathJaxLoader";
import SVG from "react-inlinesvg";
import { useTextInput } from "./hooks";

import { processData } from "./Svg2PngWorker";
import { donwloadBlob } from "./helpers";

const PNG_SCALE = 4;
const SVG_SCALE = 16;

function App() {
  const { ready } = useMathJaxContext();
  const { text, onChangeText } = useTextInput("ax^2=c");
  const [svg, setSvg] = useState(null);
  const onDownload = useCallback(async () => {
    const width = svg.width * PNG_SCALE;
    const height = svg.height * PNG_SCALE;
    const { pngUrl } = await processData({
      svg: svg.svgText,
      width,
      height,
      emSize: SVG_SCALE * PNG_SCALE * 2,
    });
    donwloadBlob(pngUrl, ".png");
  }, [svg]);
  useEffect(() => {
    if (!ready) {
      return;
    }
    window.MathJax.tex2svgPromise(text, { display: false }).then((svg) => {
      const svgText = svg.firstElementChild.outerHTML;
      const width =
        svg.firstElementChild.width.baseVal.valueInSpecifiedUnits * SVG_SCALE;
      const height =
        svg.firstElementChild.height.baseVal.valueInSpecifiedUnits * SVG_SCALE;
      setSvg({ svgText, width, height });
    });
  }, [ready, text, setSvg]);
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header-title">LaTeX to Image</h2>
      </header>
      <div className="App-body">
        <div className="App-body-col">
          <textarea
            className="App-textarea"
            value={text}
            onChange={onChangeText}
            spellCheck={false}
          />
        </div>
        <div className="App-body-col">
          {svg && (
            <SVG src={svg.svgText} width={svg.width} height={svg.height} />
          )}
        </div>
        <div>
          <button onClick={onDownload}>Donwload as PNG</button>
        </div>
      </div>
    </div>
  );
}

export default App;
