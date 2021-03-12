import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { useMathJaxContext } from "./MathJaxLoader";
import SVG from "react-inlinesvg";
import { useSnippetStorage, useTextInput, useToggle } from "./hooks";
import { List, Button, Icon, Form, TextArea } from "semantic-ui-react";

import { processData } from "./Svg2PngWorker";
import { donwloadBlob } from "./helpers";
import { TexSvg } from "./TexSvg";

const PNG_SCALE = 4;
const SVG_SCALE = 16;

function App() {
  const { ready } = useMathJaxContext();
  const { text, onChangeText } = useTextInput("ax^2+bx+c=0");
  const [svg, setSvg] = useState(null);
  const [openSnippets, toggleOpenSnippets] = useToggle(false);
  const { snippets, addSnippet, deleteSnippet } = useSnippetStorage();
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
        <h2 className="App-header-title">LaTeX Snippets</h2>
      </header>
      <div>
        <div className="App-row pure-form">
          <Form>
            <TextArea
              className="App-textarea"
              placeholder="Write a LaTeX equation"
              value={text}
              onChange={onChangeText}
              spellCheck={false}
            />
          </Form>
        </div>
        <div className="App-row">
          {svg && (
            <SVG src={svg.svgText} width={svg.width} height={svg.height} />
          )}
        </div>
        <div className="App-row"></div>
        <div className="App-row">
          <div>
            <Button onClick={toggleOpenSnippets}>
              <Icon name={openSnippets ? "angle down" : "angle up"} />{" "}
              {openSnippets ? "Hide" : "Show"} Snippets
            </Button>
            <Button onClick={() => addSnippet(text)}>
              <Icon name="save outline" /> Save
            </Button>
            <Button disabled={!svg} onClick={onDownload}>
              <Icon name="download" /> Donwload as PNG
            </Button>
          </div>
          {openSnippets && (
            <List relaxed>
              {snippets.map(({ key, tex }) => (
                <List.Item className="App-snippet-list-item" key={key}>
                  <List.Content floated="right">
                    <Button icon circular onClick={() => deleteSnippet(key)}>
                      <Icon name="trash" />
                    </Button>
                  </List.Content>
                  <List.Content
                    onClick={() => onChangeText({ target: { value: tex } })}
                  >
                    <TexSvg tex={tex} scale={12} />
                  </List.Content>
                </List.Item>
              ))}
            </List>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
