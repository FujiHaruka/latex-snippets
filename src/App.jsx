import "./App.css";
import {
  useSnippetStorage,
  useTextInput,
  useToggle,
  useDownloadPng,
} from "./hooks";
import { Container, Form, TextArea } from "semantic-ui-react";
import { TexSvg } from "./TexSvg";
import { useCallback } from "react";
import { SaveButton, SnippetsToggleButton } from "./Buttons";
import { SnippetList } from "./SnippetList";

const PNG_SCALE = 4;
const SVG_SCALE = 16;

function App() {
  const {
    snippets,
    topSnippet,
    addSnippet,
    deleteSnippet,
  } = useSnippetStorage();
  const { text, onChangeText, onResetText } = useTextInput(
    topSnippet || "ax^2+bx+c=0"
  );
  const [openSnippets, toggleOpenSnippets] = useToggle(false);
  const onDownload = useDownloadPng({
    pngScale: PNG_SCALE,
    svgScale: SVG_SCALE,
  });
  const onSave = useCallback(() => {
    addSnippet(text);
    toggleOpenSnippets(true);
  }, [text, addSnippet, toggleOpenSnippets]);
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <h1 className="App-header-title">
            LaTeX Snippet with{" "}
            <a href="https://www.mathjax.org/" target="_blank" rel="noreferrer">
              MathJax
            </a>
          </h1>
        </header>
        <div className="App-row App-container">
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
        <div className="App-row App-container">
          <TexSvg tex={text} scale={SVG_SCALE} />
        </div>
        <div className="App-menu App-container">
          <SaveButton onClick={onSave} />
          <SnippetsToggleButton
            onToggle={toggleOpenSnippets}
            open={openSnippets}
          />
        </div>
        {openSnippets && (
          <div className="App-snippets App-container">
            <SnippetList
              snippets={snippets}
              onPaste={onResetText}
              onDownload={onDownload}
              onDelete={deleteSnippet}
            />
          </div>
        )}
      </Container>
      <footer className="App-footer">
        <div>© 2021 FujiHaruka</div>
      </footer>
    </div>
  );
}

export default App;
