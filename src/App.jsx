import "./App.css";
import {
  useSnippetStorage,
  useTextInput,
  useToggle,
  useDownloadPng,
} from "./hooks";
import { List, Button, Icon, Form, TextArea } from "semantic-ui-react";
import { TexSvg } from "./TexSvg";
import { useCallback } from "react";
import { SaveButton, SnippetsToggleButton } from "./Buttons";

const PNG_SCALE = 4;
const SVG_SCALE = 16;

function App() {
  const { text, onChangeText, onResetText } = useTextInput("ax^2+bx+c=0");
  const [openSnippets, toggleOpenSnippets] = useToggle(false);
  const { snippets, addSnippet, deleteSnippet } = useSnippetStorage();
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
          <TexSvg tex={text} scale={SVG_SCALE} />
        </div>
        <div className="App-menu">
          <div>
            <SaveButton onClick={onSave} />
            <SnippetsToggleButton
              onToggle={toggleOpenSnippets}
              open={openSnippets}
            />
          </div>
          {openSnippets && (
            <List relaxed>
              {snippets.map(({ key, tex }) => (
                <List.Item key={key}>
                  <List.Content floated="right">
                    <Button
                      icon
                      circular
                      onClick={() => onResetText(tex)}
                      title="Edit"
                    >
                      <Icon name="edit" />
                    </Button>
                    <Button
                      icon
                      circular
                      onClick={() => deleteSnippet(key)}
                      title="Delete"
                    >
                      <Icon name="trash" />
                    </Button>
                    <Button
                      icon
                      circular
                      onClick={() => onDownload({ key, tex })}
                      title="Download"
                    >
                      <Icon name="download" />
                    </Button>
                  </List.Content>
                  <List.Content>
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
